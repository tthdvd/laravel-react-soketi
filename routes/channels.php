<?php

use Illuminate\Support\Facades\Broadcast;

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/

Broadcast::channel('public-visitors', function () {
    return true;
});

Broadcast::channel('App.Models.User.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});

Broadcast::channel('chat-room', function ($user) {
    return ['id' => $user->id, 'name' => $user->name];
});

Broadcast::channel('room.{id}', function ($user, $id) {
    if($user->canJoinRoom($id)) {
        return ['id' => $user->id, 'name' => $user->name];
    }

    return false;
});

