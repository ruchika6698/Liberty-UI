import React from "react";
import "../SCSS/Chart.scss";
import Maria from "./../Assets/Maria.jpg";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {Line} from 'react-chartjs-2'

export default function Usersfeed(props) {

    const todaygraphs=props.productSupport.TodaysGraph
    const yesterdaygraph=props.productSupport.yesterdayGraph
    const data = {
        
            labels:['2013','2014','2014','2015','2016','2017','2018'],
            datasets:[
                {
                label:'month',

                data: todaygraphs,
                borderColor:['#4D54E5'],
                borderWidth:['thin'],
                backgroundColor:['#ADB4F5'],
                pointBackgroundColor:['#4D54E5'],
                pointBorderColor:['#4D54E5']

              
            },
                {
                    data: yesterdaygraph,
                    borderColor:['#4D54E5'],
                    borderWidth:['thin'],
                    backgroundColor:['#D9E1FD'],
                    pointBackgroundColor:['#D9E1FD'],
                    pointBorderColor:['#4D54E5']
                }
            ]
        }
    const option={
    
        legend: {
            display: false
        },
        scales:{
            xAxes:[{
                ticks: {
                    backdropColor : "rgba(255,255,255,0)",
                   
                    display: false //this will remove only the label
                },
                gridLines: {
                    display: false,
                    drawBorder: false,
                  },
            }],
           yAxes:[{
            ticks: {
                backdropColor : "rgba(255,255,255,0)",
                max: 10,
            min: 0,
                stepSize: 1,
                display: false //this will remove only the label
            },
               
                gridLines: {
                    display: false,
                    drawBorder: false,
                  },
               
           }]
        }    
    }

    const salesFirstGraph=props.sales.salesfirstGraph 
    const salesSecondGraph=props.sales.salesSecondGraph

    const data1 = {
        labels:['2006','2007','2008','2009','2010','2011'],
        datasets:[
            {
                data: salesFirstGraph,
                borderColor:['#6970EA'],
                backgroundColor:['white'],
   
                pointBackgroundColor:['#A8BBFF'],
                pointBorderColor:['white']
            },
            {
                data: salesSecondGraph,
                borderColor:['#D9E1FD'],
            
                backgroundColor:['white'],
                pointBackgroundColor:['#30335C'],
                pointBorderColor:['white']
           }
        ]
    }
    const options={

        legend: {
            display: false
        },
        scales:{
        xAxes:[{
        
            gridLines: {
                display: false,
                drawBorder: false,
            },
        }],
        yAxes:[{
        ticks: {
            max: 100,
            min: 0,
            stepSize: 25,
            Display: false //this will remove only the label
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
        <div className="userCard">
            <Card className="card">
                <div className="miniCard">
                    <img src={Maria} height="100px" className="mariapic" alt="Maria" />
                    <div className="text">{props.employee.name}</div>
                    <div className="developer">{props.employee.position}</div>
                    <br/>
                    <span className="paragraph">{props.employee.description}</span>
                    <br/>
                    <Button className="button">Follow</Button>{' '}
                    <br/>
                    <hr width="100%" color="#D5DCEC"/>
                    <div className="details">
                        <div className="digit">
                            <div className="firstRow">{props.employee.postsMade}</div>
                            <div className="firstRow">{props.employee.followers}</div>
                            <div className="firstRow">{props.employee.likes}</div>
                        </div>
                        <div className="digit">
                            <div className="secondRow">Post</div>
                            <div className="secondRow">Followers</div>
                            <div className="secondRow">Likes</div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
        <div>
            <Card className="card">
                <div >
                    <div className="graphCard">
                    <div className="product">Top Products</div>
                    <div className="value">{props.productSupport.topProducts}</div>
                    <div >{props.productSupport.topProductPercentageChange}</div>
                    <br/>
                    <hr width="100%" color="#D5DCEC"/>
                    <div className="product">Support Cases</div>
                    <div className="value">{props.productSupport.supportCases}</div>
                    <div >{props.productSupport.supportCasesPercentageChange}</div>
                    </div>
                    <div >
                        <Line data={data} options={option}  height="190px" style={{width:'100%'}}/>
                    </div>
                </div>
            </Card>
        </div>
        <div className="cardDiv">
        <Card className="card">
            <div className="graphCard">
                <div className="sales">
                    <div className="campaign">
                        {props.sales.totalSales}
                    </div>
                    <div className="campaign">
                        {props.sales.openCampaign}
                    </div>
                </div>
                <div className="sales">
                    <div className="totalSales">
                        Total sales
                    </div>
                    <div className="totalSales">
                        Open Campaign
                    </div>
                </div>
                <div className>
                    <Line data={data1} options={options} height='250px' style={{ width:'100%'}} />
                </div>
                <br/>
                <div className="sales">
                    <div className="campaign">
                        {props.sales.onlineSales}
                    </div>
                    <div className="campaign">
                        {props.sales.storeSales}
                    </div>
                </div>
                <div className="sales">
                    <div className="totalSales">
                        Online Sales
                    </div>
                    <div className="totalSales">
                        Store Sales
                    </div>
                </div>
            </div>
        </Card>
        </div>
    </div>
  )
}