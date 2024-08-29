import React from "react";
import { Carousel } from "react-bootstrap";
import IMAGES from "../../utils/Images";

export default function Feature() {
  const images = [IMAGES.analytics, IMAGES.shoper, IMAGES.mobileApp];
  return (
    <div className="contentBackground">
      <h2 className='text-black text-center my-2'>Feature</h2>
      <Carousel controls={false} indicators={true} interval={3000}>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img src={image} className="w-100" alt={`Slide ${index + 1}`} style={{ height: '70vh' }} />
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="row">
        <div className="col-md-12 p-5">
        <table className="table table-responsive mt-2">
          <thead>
            <tr>
              <th scope="col">Order No.</th>
              <th scope="col">Product</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="col">Guy Hawkins</td>
              <td scope="col">Laptop</td>
              <td scope="col">1</td>
              <td scope="col">$690</td>
              <td scope="col">$100</td>
            </tr>
            <tr>
              <td scope="col">Jane Cooper</td>
              <td scope="col">Watch</td>
              <td scope="col">1</td>
              <td scope="col">$100</td>
              <td scope="col">$100</td>
            </tr>
            <tr>
              <td scope="col">Ralph Edwards</td>
              <td scope="col">Perfume</td>
              <td scope="col">2</td>
              <td scope="col">$100</td>
              <td scope="col">$100</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
}
