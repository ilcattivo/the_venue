import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import MyButton from "../utils/MyButton";

export default class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30
  };

  percentage = () => {
    const { discountStart } = this.state;
    this.setState({
      discountStart: discountStart + 1
    });
  };

  componentDidUpdate() {
    if (this.state.discountStart < this.state.discountEnd) {
      setTimeout(() => {
        this.percentage();
      }, 30);
    }
  }

  render() {
    return (
      <div className='center_wrapper'>
        <div className='discount_wrapper'>
          <Fade onReveal={this.percentage}>
            <div className='discount_percentage'>
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>
          <Slide right>
            <div className='discount_description'>
              <h3>Purchase tickets before 1th FEBRUARY</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
                perspiciatis sed quo similique explicabo, expedita a impedit
                dolores ipsa velit!
              </p>
              <MyButton
                text='Purchase tickets'
                bck='#ffa800'
                color='#ffffff'
                link='#'
              />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}
