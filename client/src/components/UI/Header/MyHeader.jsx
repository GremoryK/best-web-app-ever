import React from 'react';
import {Grid, Typography} from "@mui/material";
import MyBreadcrumbs from "../Breadcrumbs/MyBreadcrumbs";
import classes from '../../../assets/MyLogo.module.css'
import {Container} from "react-bootstrap";

const MyHeader = () => {
    return (
        <header style={{backgroundColor: "#232536", padding: "20px 0px"}}>
            <Container >
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={1}></Grid>
                    <Grid item xs={2}> <Typography className={classes.MyLogo}> IT STEP </Typography> </Grid>
                    <Grid item xs={6}></Grid>
                    <Grid item xs={3}><MyBreadcrumbs /></Grid>
                </Grid>
            </Container>
        </header>
    );
};

export default MyHeader;