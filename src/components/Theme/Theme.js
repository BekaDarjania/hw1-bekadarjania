import React, { useState } from "react";
import "./Theme.css";

export default function Theme({counterValue=0}) {
  const [currentStyle, setStyle] = useState("color4");

  return (
    <div className="table-dark mt-2 Theme">
      <div>
        <h2>Theme</h2>
      </div>
      <div className="">
        <div onClick={() => setStyle('color1')} className="color-box red color1"></div>
        <div onClick={() => setStyle('color2')} className="color-box red color2"></div>
        <div onClick={() => setStyle('color3')} className="color-box red color3"></div>
        <div onClick={() => setStyle('color4')} className="color-box red color4"></div>
        <div onClick={() => setStyle('color5')} className="color-box red color5"></div>
        <div onClick={() => setStyle('color6')} className="color-box red color6"></div>
        <div onClick={() => setStyle('color7')} className="color-box red color7"></div>
      </div>
      <div>
        <div className={`${currentStyle} sample`}>
          <h3>Sample Text {counterValue}</h3>
        </div>
      </div>
    </div>
  );
}
