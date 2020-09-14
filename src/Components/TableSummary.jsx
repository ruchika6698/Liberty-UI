import React from "react";
import "../SCSS/Table.scss";
import Table from 'react-bootstrap/Table'
import Button from "react-bootstrap/Button";

export default function TableSummary() {
  return (
    <div>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Assignee</th>
            <th>Task Details</th>
            <th>Payment Method</th>
            <th>Payment Status</th>
            <th>Amount</th>
            <th>Tracking Number</th>
          </tr>
        </thead>
        <br/>
        <tbody>
          <tr>
            <th>#320</th>
            <th>Mark C.Diaz</th>
            <th>Support of thteme</th>
            <th>Credit card</th>
            <th>
              <Button variant="success">Approved</Button>{" "}
            </th>
            <th>$12,245</th>
            <th>JPBBN435893458</th>
          </tr>
          <tr>
            <th>#321</th>
            <th>Jose D</th>
            <th>Verify your email address !</th>
            <th>Internet banking</th>
            <th>
              <Button background-color="orange">Pending</Button>{" "}
            </th>
            <th>$12,245</th>
            <th>BDYBN435893325</th>
          </tr>
          <tr>
            <th>#322</th>
            <th>Philips T</th>
            <th>Item support message send</th>
            <th>Credit card</th>
            <th>
              <Button variant="success">Approved</Button>{" "}
            </th>
            <th>$12,245</th>
            <th>JSNTN435884258</th>
          </tr>
          <tr>
            <th>#323</th>
            <th>Luke Pixel</th>
            <th>New submission on website</th>
            <th>Cash on delivery</th>
            <th>
              <Button variant="danger">Rejected</Button>{" "}
            </th>
            <th>$12,245</th>
            <th>JPABT435893678</th>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
