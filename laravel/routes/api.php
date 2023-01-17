<?php

use App\Http\Controllers\ActivityController;
use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


// http://127.0.0.1:8000/api/

Route::middleware('auth:api')
    ->group(function() {
        Route::get('/activity/all', [ActivityController::class, 'index']);
        Route::get('/activity/detail/{id}', [ActivityController::class, 'detail']);
        Route::post('/activity/create', [ActivityController::class, 'create']);
        Route::post('/activity/update', [ActivityController::class, 'update']);
        Route::post('/activity/delete', [ActivityController::class, 'delete']);        
    });

Route::post('/auth/register', [AuthController::class, 'register']);
Route::post('/auth/login', [AuthController::class, 'login'])->name('login');