<?php

namespace App\Http\Controllers;

use App\Models\ActivityModel;
use Illuminate\Http\Request;

class ActivityController extends Controller
{
    public function __invoke()
    {
        
    }
    //
    public function index() {
        $activities = ActivityModel::get();

        return response()->json([
            'activities' => $activities,
            'success' => true,        
        ], 200);
    }

    public function detail($id) {
        $activity = ActivityModel::where('id', $id)->first();

        return response()->json([
            'success' => true,
            'activity' => $activity,
        ], 200);
    }

    public function create(Request $request) {
        $activity = ActivityModel::create([
            'title' => $request->title,
            'description' => $request->description,
            // active => [1 => true, 0 => false]
            'active' => $request->active,
        ])->save();

        return response()->json([
            'success' => true,
        ], 200);
    }
    
    public function update(Request $request) {
        $activity = ActivityModel::where('id', $request->id);

        $activity->update([
            'title' => $request->title,
            'description' => $request->description,
             // active => [1 => true, 0 => false]
            'active' => $request->active,
        ]);

        return response()->json([
            'success' => true,
        ], 200);
    }

    public function delete(Request $request) {
        $activity = ActivityModel::where('id', $request->id)->first();

        $activity->delete();
        return response()->json([
            'success' => true,
        ], 200);
    }
}
