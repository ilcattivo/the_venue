import React, { Component } from "react";
import Slide from "react-reveal/Slide";

export default class Countdown extends Component {
  state = {
    days: null,
    hours: null,
    minutes: null,
    seconds: null
  };

  startCountdown() {
    const deadline = "Feb, 5, 2020";

    this.timer = setInterval(() => {
      const time = Date.parse(deadline) - new Date();

      if (time > 0) {
        const seconds = Math.floor((time / 1000) % 60);
        const minutes = Math.floor((time / 1000 / 60) % 60);
        const hours = Math.floor((time / 1000 / 3600) % 60);
        const days = Math.floor(time / 1000 / 3600 / 24);
        this.setState({
          seconds,
          minutes,
          hours,
          days
        });
      } else {
        this.setState({ seconds: 0, minutes: 0, hours: 0, days: 0 });
      }
    }, 1000);
  }

  componentDidMount() {
    this.startCountdown();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { seconds, minutes, hours, days } = this.state;

    return (
      <Slide left delay={1000}>
        <div className='countdown_wrapper'>
          <div className='countdown_top'>Event starts in</div>
          <div className='countdown_bottom'>
            <div className='countdown_item'>
              <div className='countdown_time'>{days}</div>
              <div className='countdown_tag'>Days</div>
            </div>
            <div className='countdown_item'>
              <div className='countdown_time'>{hours}</div>
              <div className='countdown_tag'>Hs</div>
            </div>
            <div className='countdown_item'>
              <div className='countdown_time'>{minutes}</div>
              <div className='countdown_tag'>Min</div>
            </div>
            <div className='countdown_item'>
              <div className='countdown_time'>{seconds}</div>
              <div className='countdown_tag'>Seconds</div>
            </div>
          </div>
        </div>
      </Slide>
    );
  }
}
