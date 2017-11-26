import React from "react";
import "../media/css/TimerDisplay.css";
import {convertTime} from "../helpers";

const TimerDisplay = (props) => {
    return (
        <div className="timerDisplay">
            <div className="header">
                <svg viewBox="0 0 390 330">
                    <g>
                        <path
                            d="M246.525,328.068 C176.561,333.181 53.785,328.431 10.913,234.218 C-42.193,113.972 122.522,53.2 204.664,55.408 C277.326,59.212 384.441,90.318 389.375,190.905 C391.63,273.793 316.491,322.952 246.525,328.068 L246.525,328.068 Z"
                            id="Shape" fill="#D0483C"></path>
                        <path
                            d="M256.538,105.274 C240.784,91.907 224.388,81.853 207.348,75.108 C223.184,72.448 241.955,69.286 258.41,62.84 C247.706,60.4 237.06,58.598 226.777,57.343 C220.843,59.958 214.977,62.628 209.275,65.176 C212.824,62.468 216.043,59.556 218.946,56.48 C214.07,56.005 209.297,55.651 204.665,55.408 C200.045,55.285 195.149,55.37 190.058,55.643 C188.599,57.314 187.143,58.973 185.697,60.597 C184.612,59.161 183.502,57.685 182.38,56.194 C167.48,57.519 151.148,60.423 134.564,64.891 C144.825,66.774 154.272,69.826 161.213,76.455 C139.297,79.07 108.541,79.97 89.947,96.971 C119.418,102.695 147.496,84.099 175.95,79.316 C163.89,94.153 148.891,108.417 142.085,127.709 C155.805,120.067 168.501,101.919 183.503,87.655 C180.289,104.207 183.613,118.595 186.938,132.982 C195.394,118.673 201.856,101.018 202.952,84.854 C218.629,97.969 238.394,105.152 256.538,105.274 L256.538,105.274 Z"
                            id="Shape" fill="#A8322C"></path>
                        <path
                            d="M174.283,62.115 C156.869,41.556 108.054,25.206 85.872,44.948 C108.162,56.146 143.152,49.2 161.211,66.448 C139.295,69.063 108.539,69.963 89.945,86.963 C119.416,92.687 147.494,74.091 175.948,69.309 C163.888,84.147 148.889,98.41 142.083,117.702 C155.803,110.059 168.499,91.912 183.501,77.648 C180.287,94.2 183.611,108.587 186.936,122.974 C196.041,107.567 202.847,88.276 203.113,71.149 L202.47,74.459 C218.224,87.826 238.213,95.143 256.538,95.267 C240.784,81.899 224.388,71.845 207.348,65.102 C235.8,60.319 273.737,53.945 290.667,29.748 C266.447,28.48 236.066,43.195 209.274,55.169 C227.225,41.478 236.977,22.757 237.886,2.322 C217.633,12.13 201.344,33.016 185.695,50.59 C173.532,34.486 159.064,14.501 140.362,0.561 C133.557,19.853 148.669,36.53 160.834,52.634"
                            id="Shape" fill="#6D8C3E"></path>
                        <path
                            d="M167.385,190.494 C171.078,197.009 176.898,204.361 185.308,203.188 C194.237,201.943 199.863,192.698 203.677,185.463 C205.709,181.609 199.872,178.191 197.837,182.049 C195.043,187.349 191.438,194.244 185.358,196.316 C179.73,198.233 175.44,190.989 173.224,187.08 C171.075,183.287 165.231,186.694 167.385,190.494 L167.385,190.494 L167.385,190.494 Z"
                            id="Shape" fill="#A31A13"></path>
                        <circle id="Oval" fill="#3A3A3A" cx="239.5" cy="168.637" r="14.143"></circle>
                        <circle id="Oval" fill="#3A3A3A" cx="131.415" cy="168.637" r="14.144"></circle>
                        <path
                            d="M108.518,187.211 C123.395,180.892 139.009,180.887 152.846,189.708 C154.691,190.884 156.385,187.956 154.553,186.788 C139.621,177.269 122.802,177.498 106.811,184.291 C104.81,185.142 106.535,188.053 108.518,187.211 L108.518,187.211 L108.518,187.211 Z"
                            id="Shape" fill="#3A3A3A"></path>
                        <path
                            d="M220.941,190.091 C234.886,181.973 250.346,179.77 265.218,186.791 C267.178,187.717 268.896,184.802 266.925,183.871 C250.928,176.318 234.291,178.405 219.234,187.171 C217.352,188.268 219.053,191.19 220.941,190.091 L220.941,190.091 L220.941,190.091 Z"
                            id="Shape" fill="#3A3A3A"></path>
                        <path
                            d="M294.309,228.279 C287.304,220.774 296.31,213.769 303.817,211.765 C322.832,205.762 332.339,227.779 309.321,229.781 C309.32,229.781 298.813,233.283 294.309,228.279 L294.309,228.279 Z"
                            id="Shape" fill="#F7C7BC"></path>
                        <path
                            d="M80.141,228.779 C99.657,223.275 86.397,202.008 64.629,209.265 C42.863,216.521 60.627,234.285 80.141,228.779 L80.141,228.779 Z"
                            id="Shape" fill="#F7C7BC"></path>
                    </g>
                </svg>
                <h3 className="task">Time management</h3>
            </div>
            <h1 className="timer">{convertTime(props.time)}</h1>
        </div>
    );
};

export default TimerDisplay;