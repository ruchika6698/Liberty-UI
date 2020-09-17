import React from "react";
import "../SCSS/Table.scss";

export default function TableSummary(props) {
  return (
    <div className="tableContainer">
      <table>
          <tr className="tableHead">
            <th>ID</th>
            <th>Assignee</th>
            <th>Task Details</th>
            <th>Payment Method</th>
            <th>Payment Status</th>
            <th>Amount</th>
            <th>Tracking Number</th>
          </tr>
          
          {props.tasks.map((info, index) => {
            return<tr>
              <td>{info.ID}</td>
                <td>{info.Assignee}</td>
                <td>{info.TaskDetails}</td>
                <td>{info.PaymentMethod}</td>
                <td><div className={(info.PaymentStatus === "Approved")?("approved"):("danger")} >{info.PaymentStatus}</div></td>
                <td>{info.Amount}</td>
                <td>{info.TrackingNumber}</td>
              </tr>
            })
          }
      </table>
    </div>
  );
}
