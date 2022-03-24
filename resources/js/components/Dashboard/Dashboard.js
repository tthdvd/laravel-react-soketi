import React from "react";
import user from "../../Models/user";
import {Grid, Typography} from "@mui/material";
import MainLayout from "../MainLayout/MainLayout";
import Chat from "../Chat/Chat";

function Dashboard() {
    return (
        <MainLayout title={"Dashboard"}>
            <Grid container justifyContent={"center"} alignItems={"center"} direction={"column"}>
                <Grid item>
                    <Typography variant={"h6"}>
                        Hello {user.name}, write a message!
                    </Typography>
                </Grid>
                <Grid item>
                    <Chat/>
                </Grid>
            </Grid>
        </MainLayout>
    )
}

export default Dashboard
