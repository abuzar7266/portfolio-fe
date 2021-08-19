import { useState } from 'react';
import React, { Component } from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import '../css/styles.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
const Accordion = ({ ID,title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
    <div class="card">
    <div class="card-header" role="tab" id={ID} onClick={() => setIsActive(!isActive)} style={{cursor:"grab",borderRadius:"10px",color:"white",backgroundColor:"#1C2331"}}>
    <div><i className="fa fa-sliders" style={{color:"white"}}></i> {title}</div>
    </div>
    <div className="accordion-transition">
    {isActive && (<div class="card-body">
            <p class="d-none d-sm-block">
            <div>{content}</div>
                      </p>
    </div>)}
    </div>
    </div>
    </div>
  );
};



export default Accordion;