<?php

namespace App\Http\Controllers;

use App\Models\Users;

use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;

class AuthController extends Controller
{
    //
    public function __construct()
    {
        
    }

    public function register(Request $request) 
    {
        $validator = Validator::make(
            // input
            $request->all(),
            // rules
            [
                'name' => 'required', 
                'email' => 'required|email|unique:App\Models\Users,email', 
                'password' => ['required','confirmed']
            ],
            // message
            [
                'confirmed' => 'password tidak sama, gagal',
                'required' => ':attribute harus diisi',
                'unique' => ':attribute sudah digunakan',
            ]
        );

        if ($validator->fails()) {
            return response()->json($validator->errors(), 409);
        }

        $user = Users::create([
            'name' => $request->name, 
            'email' => $request->email, 
            'password' => Hash::make($request->password),
        ]);
        
        if($user) {
            return response()->json([
                'success' => true,
                'user'    => $user,  
            ], 201);
        }

        //return JSON process insert failed 
        return response()->json([
            'alert' => 'error',
        ], 409);
    }   

    public function login(Request $request) {

        //set validation
        $validator = Validator::make($request->all(), [
            'email'     => 'required',
            'password'  => 'required'
        ]);

        //if validation fails
        if ($validator->fails()) {
            return response()->json($validator->errors(), 409);
        }

        //get credentials from request
        $credentials = $request->only('email','password');

        //if auth failed
        if(!$token = auth()->guard('api')->attempt($credentials)) {
            return response()->json([
                'success' => false,
                'message' => 'Email atau Password Anda salah'
            ], 401);
        }

        //if auth success
        $data = auth()->guard('api')->user();

        return response()->json([
            'success' => true,
            'email'    => Hash::make($data->email), 
            'token'   => $token,
        ], 200);     

    }
}
