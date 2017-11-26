import React from "react";
import "../media/css/TimerControls.css";

const TimerControls = (props) => {
    return (
        <div className="timerControls">
            <div className="play" onClick={props.startTimer}>
                <svg className="play-btn" viewBox="0 0 490 490">
                    <g>
                        <path d="M15.541,490V0l458.917,245.009L15.541,490z"/>
                    </g>
                </svg>
            </div>

            <div className="pause" onClick={props.pauseTimer}>
                <svg className="pause-btn" viewBox="0 0 12 12">
                    <g>
                        <path d="M2,0h3v12H2V0z"/>
                        <path d="M7,0h3v12H7V0z"/>
                    </g>
                </svg>
            </div>
        </div>
    );
};

export default TimerControls;
