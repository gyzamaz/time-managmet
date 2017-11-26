import React from "react";
import "../media/css/SessionInterval.css";

class SessionInterval extends React.Component {
  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
    this.toggleHandler = this.toggleHandler.bind(this);
  }

  clickHandler(event) {
    const newTime = Number(event.target.value);
    this.props.setNewTime(newTime);
  }

  toggleHandler() {
    const toggle = true;
    this.props.togglePopup(toggle);
  }

  render() {
    return (
      <div className="sessionInterval">
        <button onClick={this.clickHandler} value="1500">Session 25 min</button>
        <button onClick={this.clickHandler} value="300">Break 5 min</button>
        <button onClick={this.toggleHandler}>Custom Time</button>
      </div>
    );
  }
}

export default SessionInterval;
