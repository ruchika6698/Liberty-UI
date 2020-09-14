import React from "react";
import "../SCSS/UpdateChart.scss";
import Card from "react-bootstrap/Card";
import clock from "./../Assets/clock.png";

export default function UpdateChart() {
  return (
    <div className="Chart">
      <div>
        <Card className="currentChart">
          <div className="chartCard">
            <div className="cardText">The Current Chart</div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <hr width="100%" color="#D5DCEC" />
            <div className="projectStatus">
              <br />
              <span className="project">Projects Status</span>
              <div className="pcsDiv">
                {" "}
                <span className="projectDigit">76,533</span>
                <span className="pcs">PCS</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
      <div className="updateChart">
        <Card className="updates">
          <div className="chartCard">
            <div className="cardText">Updates</div>
            <div className="updateInfo">
              <div>
                <div className="dotstyle">o</div>
                <div className="linesss"></div>
                <div className="dotstyle">o</div>
                <div className="linesss"></div>
                <div className="dotstyle">o</div>
                <div className="linesss"></div>
              </div>
              <div>
                <div className="userConfirmation">User confirmation</div>
                <div className="userUpdate">Donec rutrum congue leo eget malesuada.</div>
                <div className="alert"><img src={clock} height="20px" alt="clock" /> 7 months ago.</div>
                <br/>
                <div className="evaluation">Continuous evaluation</div>
                <div className="userUpdate">Vivamus suscipit tortor eget felis porttitor volutpat.</div>
                <div className="alert"><img src={clock} height="20px" alt="clock" /> 7 months ago.</div>
                <br/>
                <div className="evaluation">Promotion</div>
                <div className="userUpdate">Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</div>
                <div className="alert"><img src={clock} height="20px" alt="clock" /> 7 months ago.</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
