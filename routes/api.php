<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Broadcast;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use \App\Http\Controllers\MessageController;

Route::post('login', [LoginController::class, 'authenticate']);

Route::group(['middleware' => 'Models:sanctum'], function (){
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::post('/logout', [LoginController::class, 'logout']);
    Route::post('/message', [MessageController::class, 'create']);
});
