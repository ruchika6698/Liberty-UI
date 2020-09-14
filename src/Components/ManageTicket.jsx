import React from "react";
import "../SCSS/ManageTicket.scss";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import UserIcon from "./../Assets/UserIcon.jpg";
import Stella from "./../Assets/Stella.jpg";
import John from "./../Assets/John.jpg";

export default function UpdateChart() {
  return (
    <div className="ManageTicket">
        <Card className="manageCard">
          <div className="manageDiv">
            <span className="ticketText">Manage Tickets</span>
            <div className="userDetail">
                <br/>
                <img src={UserIcon} height="50px" className="avatarImage" alt="User" />
                <div className="userTicket">
                    <div className="ticket">James : [#23047] Donec rutrum congue leo eget malesuada.</div>
                    <div className="ticketMessage">Donec rutrum congue leo eget malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim vivamus.</div>
                    <div className="status">
                        <span>Last responded :3 hours ago</span>
                        <span className="dueIn">Due in : 2 Days</span>
                    </div>
                </div>
                <Button className="manageButton">Manage</Button>{' '}
            </div>
            <hr width="100%" color="#D5DCEC"/>
            <div className="userDetail">
                <br/>
                <img src={Stella} height="50px" className="avatarImage" alt="User" />
                <div className="userTicket">
                    <div className="ticket">Stella : [#23135] Curabitur aliquet quam id dui posuere blandit.</div>
                    <div className="ticketMessage">Pellentesque in ipsum id orci porta dapibus. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl.</div>
                    <div className="status">
                        <span>Last responded : 3 hours ago</span>
                        <span className="dueIn">Due in : 2 Days</span>
                    </div>
                </div>
                <Button className="manageButton">Manage</Button>{' '}
            </div>
            <hr width="100%" color="#D5DCEC"/>
            <div className="userDetail">
                <br/>
                <img src={John} height="50px" className="avatarImage" alt="User" />
                <div className="userTicket">
                    <div className="ticket">John Doe : [#23246] Mauris blandit aliquet elit, eget tincidunt nibh pulvinar.</div>
                    <div className="ticketMessage">Nulla quis lorem ut libero malesuada feugiat. Proin eget tortor risus. Lorem ipsum dolor sit amet.</div>
                    <div className="status">
                        <span>Last responded : 3 hours ago</span>
                        <span className="dueIn">Due in : 2 Days</span>
                    </div>
                </div>
                <Button className="manageButton">Manage</Button>{' '}
            </div>
          </div>
        </Card>
    </div>
  );
}
