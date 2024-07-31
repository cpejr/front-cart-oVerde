import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class DemoCarousel extends Component {
  render() {
    return (
      <Carousel
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6000}
        infiniteLoop={true}
      >
        <div>
          <img src="/src/assets/Home/background.png" />
        </div>
        <div>
          <img src="/src/assets/Home/background.png" />
        </div>
        <div>
          <img src="/src/assets/Home/background.png" />
        </div>
      </Carousel>
    );
  }
}
export default DemoCarousel;
