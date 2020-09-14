import React from "react";
import "../SCSS/Chart.scss";
import Maria from "./../Assets/Maria.jpg";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Usersfeed() {

  return (
    <div className="Chart">
        <div className="userCard">
            <Card className="card">
                <div className="miniCard">
                    <img src={Maria} height="100px" className="mariapic" alt="Maria" />
                    <div className="text">Maria Johnson</div>
                    <div className="developer">Developer</div>
                    <br/>
                    <span className="paragraph">Lorem ipsum dolor sit amet, consectetuer</span>
                    <span className="paragraph">adipiscing elit. Aenean commodo ligula eget dolor.</span>
                    <span >Lorem</span>
                    <br/>
                    <Button className="button">Follow</Button>{' '}
                    <br/>
                    <hr width="100%" color="#D5DCEC"/>
                    <div className="details">
                        <div className="digit">
                            <div className="firstRow">5896</div>
                            <div className="firstRow">1596</div>
                            <div className="firstRow">7896</div>
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
                <div className="graphCard">
                    <div className="product">Top Products</div>
                    <div className="value">598,486</div>
                    <div >6.5% change from today</div>
                    <br/>
                    <hr width="100%" color="#D5DCEC"/>
                    <div className="product">Support Cases</div>
                    <div className="value">323,360</div>
                    <div >2.5% change from yesterday</div>

                </div>
            </Card>
        </div>
        <div className="cardDiv">
        <Card className="card">
            <div className="graphCard">
                <div className="sales">
                    <div className="campaign">
                        6,256
                    </div>
                    <div className="campaign">
                        8569
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
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <div className="sales">
                    <div className="campaign">
                        5136
                    </div>
                    <div className="campaign">
                        4596
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