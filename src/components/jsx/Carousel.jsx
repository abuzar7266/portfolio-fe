import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import image3 from '../../images/myPic.jpg';
const ControlledCarousel = () => {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel style={{ height:"300px",width:"550px",maxHeight:"300px",maxWidth:"550px",minWidth:"550px",minHeight:"300px"}} activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img style={{ height:"300px",width:"550px",maxHeight:"300px",maxWidth:"550px",minWidth:"550px",minHeight:"300px"}}
            className="d-block w-100"
            src=""
            alt="First slide"
            fluid
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}
export default ControlledCarousel;