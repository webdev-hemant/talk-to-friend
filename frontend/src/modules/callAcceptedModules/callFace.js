import React from "react";
import "./callFace.css";

const CallFace = ({ img, style = {} }) => {
  return (
    <div className="container">
      <div className="box">
        <div className="spin-container">
          <div className="shape">
            <div
              className="bd"
              style={{
                backgroundImage: `url("${img}")`,
                backgroundPosition: "center top",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                ...style,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallFace;
