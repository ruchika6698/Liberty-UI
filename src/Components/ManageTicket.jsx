import React from "react";
import "../SCSS/ManageTicket.scss";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import UserIcon from "./../Assets/UserIcon.jpg";
import Stella from "./../Assets/Stella.jpg";
import John from "./../Assets/John.jpg";

export default function UpdateChart(props) {
    
  return (
    <div className="ManageTicket">
        <Card className="manageCard">
          <div className="manageDiv">
            <span className="ticketText">Manage Tickets</span>
            <div className="userDetail">
                <br/>
                <img src={UserIcon} height="50px" className="avatarImage" alt="User" />
                <div className="userTicket">
                    <div className="ticket">{props.JamesticketData.ticketSubject}</div>
                    <div className="ticketMessage">{props.JamesticketData.ticketDescription}</div>
                    <div className="status">
                        <span>Last responded :{props.JamesticketData.lastResponded}</span>
                        <span className="dueIn">Due in :{props.JamesticketData.due}</span>
                    </div>
                </div>
                <Button className="manageButton">Manage</Button>{' '}
            </div>
            <hr width="100%" color="#D5DCEC"/>
            <div className="userDetail">
                <br/>
                <img src={Stella} height="50px" className="avatarImage" alt="User" />
                <div className="userTicket">
                    <div className="ticket">{props.StellaticketData.ticketSubject}</div>
                    <div className="ticketMessage">{props.StellaticketData.ticketDescription}</div>
                    <div className="status">
                        <span>Last responded :{props.StellaticketData.lastResponded}</span>
                        <span className="dueIn">Due in :{props.StellaticketData.due}</span>
                    </div>
                </div>
                <Button className="manageButton">Manage</Button>{' '}
            </div>
            <hr width="100%" color="#D5DCEC"/>
            <div className="userDetail">
                <br/>
                <img src={John} height="50px" className="avatarImage" alt="User" />
                <div className="userTicket">
                    <div className="ticket">{props.JohnJamesticketData.ticketSubject}</div>
                    <div className="ticketMessage">{props.JohnJamesticketData.ticketDescription}</div>
                    <div className="status">
                        <span>Last responded :{props.JohnJamesticketData.lastResponded}</span>
                        <span className="dueIn">Due in :{props.JohnJamesticketData.due}</span>
                    </div>
                </div>
                <Button className="manageButton">Manage</Button>{' '}
            </div>
          </div>
        </Card>
    </div>
  );
}
