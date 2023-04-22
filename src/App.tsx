import React from 'react';
import logo from './logo.svg';
import {Helmet} from "react-helmet";
import './App.css';


function App() {
  return (
      <div>
      <div className="container2">
        <div className="content">
          <canvas id="universe"></canvas>
        </div>
      </div>
      <div className="title">
        <h3 className="STARDUST1">From 2015 with Love</h3>
        <h1 className="STARDUST2">Melk <strong>❤</strong> 幽昙</h1>
        <h3 className="STARDUST3">Yêu Quỳnh ^^</h3>
        <img className="img" src="/images/41a9918513bab13320abc80835c0e8bf.JPG" alt="Q"/>
        <canvas id="pinkboard"></canvas>
      </div>
      </div>
  );
}

export default App;
