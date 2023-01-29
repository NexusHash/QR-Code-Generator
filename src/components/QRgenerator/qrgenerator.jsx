import React, { useState } from "react";
import ReactDOM from "react-dom";
import QRCode from "qrcode.react";

import "./qrgenerator.scss";

function QRGenerator() {
  const [qrValue, setQrValue] = useState("jeftar");
  const handleOnChange = event => {
    const { value } = event.target;
    setQrValue(value);
  };
  const downloadQRCode = () => {
    // Generate download with use canvas and stream
    const canvas = document.getElementById("qr-gen");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `${qrValue}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  
  return (
      <div className="center-parent">
        <div className="center-container">
          <h1>QR Code Generator</h1>
          <input onChange={handleOnChange} 
          placeholder="Insert your link" />

          <QRCode
            className="qrCode"
            id="qr-gen"
            value={qrValue}
            size={290}
            level={"H"}
          />

          <button type="button" onClick={downloadQRCode}>
            Download QR Code
          </button>
        </div>
      </div>
  );
}

export default QRGenerator;