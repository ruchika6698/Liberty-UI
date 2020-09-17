import React from "react";
import "../SCSS/UpdateChart.scss";
import Card from "react-bootstrap/Card";
import clock from "./../Assets/clock.png";
import {Bar} from 'react-chartjs-2'

export default function UpdateChart(props) {

  const arbitraryStackKey = "stack1"
  const stackeone=props.ChartRowData.stackOne
  const stacktwo=props.ChartRowData.stackTwo
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
                  data: stackeone,
                  borderColor:['black'],
                  borderWidth:['thin'],
               
                  pointBackgroundColor:['#D9E1FD'],
                  pointBorderColor:['white']
                },
                {
                    stack: arbitraryStackKey,
                    label: 'data1',
                    data:stacktwo,
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
                <span className="projectDigit">{props.ChartRowData.projectStatus}</span>
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
              {props.timeline.map((timeline, index) => {
              return (
                <div key={index}>
                  <div className="userConfirmation"> {timeline.subject}</div>
                  <div className="userUpdate">{timeline.description}</div>
                  <div className="alert"><img src={clock} height="20px" alt="clock" className="clock"/>{timeline.time}</div>
                </div>
              );
              })}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
