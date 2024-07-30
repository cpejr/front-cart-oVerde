import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class DemoCarousel extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <img src="/src/assets/Home/background.png" alt="slide 1" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="/src/assets/Home/background.png" alt="slide 2" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="/src/assets/Home/background.png" alt="slide 3" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    );
  }
}
export default DemoCarousel;
