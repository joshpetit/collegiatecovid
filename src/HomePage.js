import React from "react";
import "./Landing.css"


export default function HomePage(){
    return (
        <div>

                <div className="Splash-container">
                    <div className="Splash">
                        <div className="Splash-head">
                            This is your Universal Covid-Tracker
                        </div>
                        <p className="splash-subhead" style={{color: 'white' }}>
                            <div style={{color: 'white' }}>
                                Easily find SARS-CoV-2 data from universities across the US
                            </div>
                            <div>
                                Learn about SARS-CoV-2 mitigation policies
                            </div>
                            <div>
                                Compare different university responses
                            </div>
                        </p>
                    </div>
                </div>

        </div>
    )
}
