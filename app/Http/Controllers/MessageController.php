<?php

namespace App\Http\Controllers;

use App\Events\NewMessage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MessageController extends Controller
{
    public function create(Request $request)
    {
        $request->validate([
            'message' => 'required'
        ]);

        $user = Auth::user();

        broadcast(new NewMessage($user, $request->get('message')));
    }
}
