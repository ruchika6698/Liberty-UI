import React from 'react';
import './App.css';
import Navigationbar from './Components/Navigationbar'
import Usersfeed from './Components/Usersfeed'
import Chart from './Components/Chart'
import TableSummary from './Components/TableSummary'
import UpdateChart from './Components/UpdateChart'
import ManageTicket from './Components/ManageTicket'
import { connect } from "react-redux";

function App(props) {
    return (
      <div>
        <div className="navigationBar">
          <Navigationbar/>
        </div>
        <div className="liberty">
          <Usersfeed summaryData={props.summary}/>
          <br/>
          <Chart 
            employee={props.employeeInfo}
            productSupport={props.productSupport}
            sales={props.sales}
          />
          <br/>
          <TableSummary tasks={props.TableData}/>
          <br/>
          <UpdateChart
            timeline={props.timelineData} ChartRowData={props.ChartRowData}
          />
          <br/>
          <ManageTicket JamesticketData={props.JamesticketData} StellaticketData={props.StellaticketData} JohnJamesticketData={props.JohnJamesticketData}/>
          <br/>
          <br/>
          <br/>
          <br/>
        </div>
        
      </div>
    );
}
function mapStateToProps(state) {
  return {
    ...state.dashbaord.data,
  };
}

export default connect(mapStateToProps)(App);