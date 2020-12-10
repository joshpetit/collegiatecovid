import React from "react";
import { Grid, Divider, Card, Typography, CardContent } from "@material-ui/core/";
import "./Landing.css"

const style = {
    height: '100vh',
    background: 'cornflowerblue',
}

const cardStyle = {
    minHeight: '50%',
    alignItems: 'center',
    minWidth: '100%',
}

export default function HomePage(){
    return (
        <Grid container direction="column" align="center" alignItems="center" style={style}  justify="center" >
            <Grid item xs={10} >
                <Card raised={true} style={cardStyle}>
                    <CardContent>
                        <Typography component='h1' variant='h3' align='center'>
                            Collegiate Covid
                        </Typography>
                        <Divider />
                        <Typography style={{marginTop: '10px', fontSize: '3vh'}} variant='subtitle2' align='center'>
                            Easily find SARS-CoV-2 data from universities across the US
                            Learn about SARS-CoV-2 mitigation policies
                            Compare different university responses
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}
