import React, { Component } from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Accordion from './accordion';
import '../css/styles.css';
import { accordionData } from './content';

const App = () => {
  return (
    <div>
      <div className="accordion">
        {accordionData.map(({ ID, title, content }) => (
          <Accordion ID={ID} title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default App;