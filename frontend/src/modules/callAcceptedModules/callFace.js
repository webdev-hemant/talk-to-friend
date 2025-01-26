import React from "react";
import man1 from "../../images/men-1.jpg";
import man2 from "../../images/men-2.jpg";
import man3 from "../../images/men-3.jpg";
import man4 from "../../images/men-4.jpg";
import "./callFace.css";

const CallFace = () => {
  return (
    <div class="container">
      <div class="box">
        <div class="spin-container">
          <div class="shape">
            <div
              class="bd"
              style={{
                backgroundImage: `url("${man3}")`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallFace;
