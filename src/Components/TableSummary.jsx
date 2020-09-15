import React from "react";
import "../SCSS/Table.scss";
import Button from "react-bootstrap/Button";

export default function TableSummary() {
  return (
    <div className="tableContainer">
      <table>
        <thead>
          <tr className="tableHead">
            <th>ID</th>
            <th>Assignee</th>
            <th>Task Details</th>
            <th>Payment Method</th>
            <th>Payment Status</th>
            <th>Amount</th>
            <th>Tracking Number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#320</td>
            <td>Mark C.Diaz</td>
            <td>Support of thteme</td>
            <td>Credit card</td>
            <td>
              <Button className="approved">Approved</Button>{" "}
            </td>
            <td>$12,245</td>
            <td>JPBBN435893458</td>
          </tr>
          <tr>
            <td>#321</td>
            <td>Jose D</td>
            <td>Verify your email address !</td>
            <td>Internet banking</td>
            <td>
              <Button className="pending">Pending</Button>{" "}
            </td>
            <td>$12,245</td>
            <td>BDYBN435893325</td>
          </tr>
          <tr>
            <td>#322</td>
            <td>Philips T</td>
            <td>Item support message send</td>
            <td>Credit card</td>
            <td>
              <Button className="approved">Approved</Button>{" "}
            </td>
            <td>$12,245</td>
            <td>JSNTN435884258</td>
          </tr>
          <tr>
            <td>#323</td>
            <td>Luke Pixel</td>
            <td>New submission on website</td>
            <td>Cash on delivery</td>
            <td>
              <Button className="danger">Rejected</Button>{" "}
            </td>
            <td>$12,245</td>
            <td>JPABT435893678</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
