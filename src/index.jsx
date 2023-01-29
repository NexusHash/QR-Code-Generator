import React, { useState } from "react";
import ReactDOM from "react-dom";
import QRCode from "qrcode.react";

import "./styles.scss";
import QRGenerator from "./components/QRgenerator/qrgenerator";

function App() {
  
  return (

    <>
      <div className="qrCode">
        <QRGenerator/>
      </div>
    

    <div class="lines">
    
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      
    </div>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);