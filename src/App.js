import React, { Component } from 'react';
import './App.css';
import Navigationbar from './Components/Navigationbar'
import Usersfeed from './Components/Usersfeed'
import Chart from './Components/Chart'
import TableSummary from './Components/TableSummary'
import UpdateChart from './Components/UpdateChart'
import ManageTicket from './Components/ManageTicket'
import Footer from './Components/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <div className="navigationBar">
          <Navigationbar/>
        </div>
        <div className="liberty">
          <Usersfeed/>
          <br/>
          <Chart/>
          <br/>
          <TableSummary/>
          <br/>
          <UpdateChart/>
          <br/>
          <ManageTicket/>
          <br/>
          <br/>
          <hr width="72%" color="#D5DCEC"/>
          <Footer/>
          <br/>
          <br/>
        </div>
        
      </div>
    );
  }
}
export default App;