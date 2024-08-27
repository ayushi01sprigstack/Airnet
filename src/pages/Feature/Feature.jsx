import React from "react";
import {Carousel} from "react-bootstrap";
import IMAGES from "../../utils/Images";

export default function Feature() {
  const images = [ IMAGES.analytics, IMAGES.shoper, IMAGES.mobileApp];
  return (
    <div className="p-2">
      <Carousel controls={false} indicators={true} interval={3000}>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img src={image} className="w-100" alt={`Slide ${index + 1}`} style={{height:'75vh'}}/>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
