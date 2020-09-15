import React from "react";
import "../SCSS/Usersfeed.scss";
import newUsers from "./../Assets/newUsers.png";
import newFeedback from "./../Assets/newFeedback.png";
import Employees from "./../Assets/Employees.png";
import TotalSales from "./../Assets/TotalSales.png";

export default function Usersfeed() {

  return (
    <div className="userfeed">
        <div className="firstFeed">
        <div className="feedColumn">
            <img
                className="icons"
                src={newUsers}
                alt="logo"
            />
            <div className="users">
                <div className="title">
                 New Users
                </div>
                <div className="data">
                 65,650
                </div>
            </div>
        </div>
        
        <div className="feedColumn">
            <img
                className="icons"
                src={newFeedback}
                alt="logo"
            />
            <div className="users">
                <div className="title">
                 New Feedbacks
                </div>
                <div className="data">
                 32,604
                </div>
            </div>
        </div>
        </div>

        <div className="firstFeed">
        <div className="feedColumn">
            <img
                className="icons"
                src={Employees}
                alt="logo"
            />
            <div className="users">
                <div className="title">
                 Employees
                </div>
                <div className="data">
                 17,583
                </div>
            </div>
        </div>

        <div className="feedColumn">
            <img
                className="icons"
                src={TotalSales}
                alt="logo"
            />
            <div className="users">
                <div className="title">
                 Total Sales
                </div>
                <div className="data">
                 61,119
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}