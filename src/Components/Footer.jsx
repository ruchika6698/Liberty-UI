import React from "react";
import "../SCSS/Footer.scss";
import Heart from "./../Assets/Heart.png";

export default function UpdateChart() {
  return (
    <div className="footer">
        <div className="copyright">
            Copyright © 2018   <span className="footerText">Bootstrapdash</span>. All rights reserved.
        </div>
        <div>
            Hand-crafted & made with <img src={Heart} height="15px" className="heart" alt="User" />
        </div>
    </div>
  );
}
