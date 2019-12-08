import React, { Component } from "react";
import Zoom from "react-reveal/Zoom";

import MyButton from "../utils/MyButton";

export default class Pricing extends Component {
  state = {
    prices: [100, 150, 250],
    positions: ["Balcony", "Medium", "Star"],
    desc: [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident quo rerum, ex quos explicabo officia.",
      "Illum adipisci pariatur impedit necessitatibus cum. Nemo, similique totam!",
      "Assumenda perferendis repudiandae magnam totam quis suscipit? Minima temporibus magni!"
    ],
    linkTo: ["#", "#", "#"],
    delay: [500, 0, 500]
  };

  showBoxes = () => {
    const { positions, desc, linkTo, delay } = this.state;

    return this.state.prices.map((price, i) => (
      <Zoom key={i} delay={delay[i]}>
        <div className='pricing_item'>
          <div className='pricing_inner_wrapper'>
            <div className='pricing_title'>
              <span>${price}</span>
              <span>{positions[i]}</span>
            </div>
            <div className='pricing_description'>{desc[i]}</div>
            <div className='pricing_buttons'>
              <MyButton
                text='Purchase'
                bck='#ffa800'
                color='#ffffff'
                link={linkTo[i]}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));
  };

  render() {
    return (
      <div className='bck_black'>
        <div className='center_wrapper pricing_section'>
          <h2>pricing</h2>
          <div className='pricing_wrapper'>{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}
