import React, {useEffect, useState} from "react";
import ChatMsg from '@mui-treasury/components/chatMsg/ChatMsg';
import user from "../../Models/user";
import {Box, Typography} from "@mui/material";

function Messages({messages}) {
    const [groupedMessages, setGroupedMessages] = useState([]);

    useEffect(() => {
        let newMessages = [];
        let previousUserId = null;
        let previousGroupIndex = null;
        messages.map((message, index) => {
            if (previousUserId === message.user?.id && previousGroupIndex) {
                newMessages[previousGroupIndex].messages.push(message.message)
            } else if(message.user) {
                previousUserId = message.user.id
                previousGroupIndex = index
                newMessages[index] = {
                    messages: [message.message],
                    side: previousUserId === user.id ? 'right' : 'left',
                    type: 'user'
                }
            } else {
                previousGroupIndex= null
                newMessages[index] = {
                    messages: message.message,
                    type: 'system'
                }
            }
        })

        setGroupedMessages(newMessages)
    }, [messages])

    const renderMessages = () => {
        return groupedMessages.map((message, index) => {
            switch (message.type) {
                case 'user':
                    return <ChatMsg
                        key={index}
                        side={message.side}
                        messages={message.messages}
                    />
                case 'system':
                    return <Typography>{message.messages}</Typography>
            }

        })
    }

    return <Box  sx={{height: 300, overflow: "scroll"}}>
        {renderMessages()}
    </Box>
}

export default Messages
