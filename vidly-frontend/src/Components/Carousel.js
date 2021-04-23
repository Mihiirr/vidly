import React, { useState } from "react";
import { Carousel, Container } from 'react-bootstrap';
import './Carousel.css'

function Vcarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="corousel">
      <Container>
        <div>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://cdn.wallpapersafari.com/71/67/caO4zE.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Deadpool</h3>
                <p>
                  Feel The Love Valentines Day.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://wallpaperaccess.com/full/2203540.jpg"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Super-Man</h3>
                <p>Man Of Steel.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://fastly.syfy.com/sites/syfy/files/wire/legacy/iron-man-3-13h.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Iron-Man</h3>
                <p>Love You 3000.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </Container>
    </div>
  );
}

export default Vcarousel;
