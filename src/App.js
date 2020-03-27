import React, { Component } from 'react'
import Navbar from './components/navbar';
import Card from './components/card';
import './App.css';
import StateTable from './components/StateTable';
import StateGraph from './components/StateGraph';
import DailyStateChart from './components/DailyStateChart';
import Footer from './components/Footer';
export class App extends Component {
  state={
    success:false,
    data:{},
    regional:[]
  }
//  createChartData=(object)=>{
//    var ChartData=null;
//     Object.keys(object).map(function(key, index) {
//      return(
//        ChartData={
//         labels: [...key],
//         datasets: [{
//           label: 'My data',
//           data:[10,25,26,18,18],
//           backgroundColor: '#112233'
//         }]
//        }
//      )
//      })
//   }
  componentDidMount(){
      const url=' https://api.rootnet.in/covid19-in/stats/latest';
      fetch(url,{
        method:"GET"
      })
      .then(response=>response.json())
      .then(data=>this.setState({
        data:data.data.summary,
        success:data.success,
        regional:data.data.regional},()=>console.log(this.state)))
    }
    
  render() {
    return (
      <div>
        <header>
        <Navbar/>
          <div className="jumbotron bg-cover ">
            <div className="container ">
                <h1 className="display-4">Go! Corona Go!!!</h1>
                <p className="lead">This is dashboard website for Covid-19 stats of India.</p>
                <hr className="my-4"/>
                <p>It uses amod/api-covid-19 api for data.</p>
            </div>
         </div>
        </header>
      
      <section className="content" >
        <div className="container ">
                <Card value={Object.keys(this.state.data).map((key,index)=>this.state.data[key])}/>
                  <div class="row my-2">
                    <StateGraph regional={this.state.regional}/>
                    {/* <StateWiseChart chart={chart}/> */}
                    <DailyStateChart/>
                  </div>
                <StateTable regional={this.state.regional}/>
              
              </div>
        </section>
        <Footer/>
      </div>
    
    )
  }
}

export default App

