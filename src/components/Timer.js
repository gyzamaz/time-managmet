import React from "react";
import TimerDisplay from "./TimerDisplay";
import SessionInterval from "./SessionInterval";
import TimerControls from "./TimerControls";
import Popup from "./Popup";
import notify from "../media/audio/notify.mp3";
import icon from "../media/images/thumbsup.png";

class Timer extends React.Component {
    constructor() {
        super();


        // 1500 sec = 25 min
        this.state = {
            time: 1500,
            showPopup: false,
            sessionTime: 1500,
            isPlaying: false
        };

        this.togglePopup = this.togglePopup.bind(this);
        this.setNewTime = this.setNewTime.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.pauseTimer = this.pauseTimer.bind(this);
        this.decrementTime = this.decrementTime.bind(this);
        this.completeSession = this.completeSession.bind(this);
    }

    setNewTime(newTime) {


        this.setState({
            time: newTime,
            sessionTime: newTime,
        });
    }


    componentDidMount() {
        Notification.requestPermission();
    }


    togglePopup(toggle) {
        this.setState({
            showPopup: toggle
        });
    }

    startTimer() {
        if (!this.state.isPlaying) {
            this.setState({
                tick: setInterval(this.decrementTime, 1000),
                isPlaying: true
            });
        }
    }

    pauseTimer() {
        if (this.state.isPlaying) {
            clearInterval(this.state.tick);

            this.setState({
                tick: null,
                isPlaying: false
            })
        }
    }


    decrementTime() {
        const time = this.state.time;
        if (time === 0) {
            this.completeSession();
            return;
        }

        this.setState({
            time: this.state.time - 1
        });
    }

    completeSession() {
        const isPlaying = this.state.isPlaying;
        if (isPlaying === true) {
            clearInterval(this.state.tick);

            this.setState({
                tick: null,
                isPlaying: false
            })
        }
        this.notify();
    }

    notify() {
        const notification = new Notification("Congratulations!!", {
            icon: icon,
            body: "You completed this session!"
        });
        setTimeout(notification.close.bind(notification), 10000);
        const audio = new Audio(notify);
        audio.play();
    }

    render() {
        return (
            <div>
                <TimerDisplay time={this.state.time}/>
                <TimerControls startTimer={this.startTimer} pauseTimer={this.pauseTimer}/>
                <SessionInterval setNewTime={this.setNewTime} togglePopup={this.togglePopup}/>
                {this.state.showPopup ? <Popup currentTime={this.state.sessionTime} setCustomTime={this.setNewTime}
                                               togglePopup={this.togglePopup}/> : null}
            </div>
        );
    }
}

export default Timer;
