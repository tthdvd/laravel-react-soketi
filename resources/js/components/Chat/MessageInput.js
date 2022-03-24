import React from "react";
import {Box, Button, Grid, TextField} from "@mui/material";

function MessageInput() {

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        window.axios.post(`/api/message`, {message: formData.get('message')});
        e.currentTarget.reset()
    }

    return (
        <Box component={"form"} onSubmit={handleSubmit}>
            <Grid container direction={"row"} alignItems={"center"}>
                <Grid item sm={10}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="message"
                        name="message"
                        autoFocus
                        autoComplete={'off'}
                    />
                </Grid>
                <Grid item sm={2} >
                    <Button
                        type={"submit"}
                    >
                        Send
                    </Button>
                </Grid>
            </Grid>
        </Box>
    )
}

export default MessageInput
