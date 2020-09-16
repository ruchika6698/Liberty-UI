import React from "react";
import "../SCSS/UpdateChart.scss";
import Card from "react-bootstrap/Card";
import clock from "./../Assets/clock.png";
import {Bar} from 'react-chartjs-2'

export default function UpdateChart() {

  const arbitraryStackKey = "stack1"
        const data = {
            labels:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
            datasets:[
                {
                    stack: arbitraryStackKey,
                    label: 'data1',

                data: [3.5, 4, 1, 5, 3,7,3.5],
                borderColor:['#6970EA'],
                borderWidth:['thin'],
                backgroundColor:['#464DE4','#464DE4','#464DE4','#464DE4','#464DE4','#464DE4','#464DE4'],
                pointBackgroundColor:['#D9E1FD'],
                pointBorderColor:['white']

              
            },
                {
                  stack: arbitraryStackKey,
                  label: 'data1',
                  data: [4.5,4,7,3,5,1,4.5],
                  borderColor:['black'],
                  borderWidth:['thin'],
               
                  pointBackgroundColor:['#D9E1FD'],
                  pointBorderColor:['white']
                }
            ]
        }
const option={
    
    legend: {
        display: false
      },
        scales:{
            xAxes:[{
                stacked: true,
                barPercentage: 0.4,
                gridLines: {
                    display: false,
                    drawBorder: false,
                  },
            }],
           yAxes:[{
            stacked: true,
            ticks: {
                backdropColor : "rgba(255,255,255,0)",
                max: 10,
            min: 0,
                stepSize: 0.5,
                display: false //this will remove only the label
            },
               
                gridLines: {
                    display: false,
                    drawBorder: false,
                  },       
           }]
        }
  }

  return (
    <div className="Chart">
      <div>
        <Card className="currentChart">
          <div className="chartCard">
            <div className="cardText">The Current Chart</div>
            <div >
                <Bar data={data} options={option}  height="100px" style={{width:'100%'}}/>
  
            </div>
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
