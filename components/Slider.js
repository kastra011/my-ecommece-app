import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Slider() {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
      showThumbs={false}
      showArrows={false}
      interval={2500}
      className="mb-4"
    >
      <div>
        <img src="images/1.jpg" />
      </div>
      <div>
        <img src="images/2.jpg" />
      </div>
      <div>
        <img src="images/3.jpg" />
      </div>
    </Carousel>
  );
}
