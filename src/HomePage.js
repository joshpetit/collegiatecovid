import React from "react";
import { Grid, Divider, Card, Typography, CardContent, CardHeader  } from "@material-ui/core/";
import "./Landing.css"

const style = {
    height: '100vh',
    background: 'cornflowerblue',
}

const cardStyle = {
    minHeight: '50%',
    alignItems: 'center',
    minWidth: '100%',
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
}

const text = {
    width: '50vw',
    margin: '0 auto',
    fontSize: '3vh',
}

const vcent = {
}

export default function HomePage(){
    return (
        <Grid container direction="column" align="center" alignItems="center" style={style}  justify="center" >
            <Grid item xs={10} >
                        <Typography component='h1' variant='h3' align='center'>
                            Collegiate Covid
                        </Typography>
                <Card raised={true} style={cardStyle}>
                    <CardContent>
                        <div style={vcent}>
                            <Typography style={text} variant='subtitle2' align='center'>
                                Easily find SARS-CoV-2 data from universities across the US
                                Learn about SARS-CoV-2 mitigation policies
                                Compare different university responses
                            </Typography>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}
