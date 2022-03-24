import React, {useEffect, useReducer} from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import {Box} from "@mui/material";
import * as authUser from "../../Models/user";

function reducer(state, action) {
    switch (action.type) {
        case 'new-message':
            return [...state, action.data]
        case 'joining':
            return [...state, {message: action.data.name + ' joined!'}]
        case 'leaving':
            return [...state, {message: action.data.name + ' leaved!'}]
        case 'here':
            return [...state, {message: `Welcome!`}]
        default:
            return []
    }
}

function Chat() {
    const [messages, dispatch] = useReducer(reducer, []);

    useEffect(() => {
        window.Echo.join('chat-room')
            .here(() => {
                dispatch({type: 'here', data: authUser})
            })
            .joining((user) => {
                dispatch({type: 'joining', data: user})
            })
            .leaving((user) => {
                dispatch({type: 'leaving', data: user})
            })
            .listen('NewMessage', (data) => {
                dispatch({type: 'new-message', data})
            })

        return () => {
            window.Echo.leave('chat-room')
        }
    }, []);

    return <Box sx={{width: 500, margin: 5}} >
        <Messages messages={messages}/>
        <MessageInput/>
    </Box>
}

export default Chat
