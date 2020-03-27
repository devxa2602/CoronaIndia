import React, { Component } from 'react'
import {Line} from 'react-chartjs-2';
export class DailyStateChart extends Component {
    state={
        day:[],
        total:[],
        indian:[],
        foreign:[],
        discharged:[],
        death:[]
    }
    componentDidMount(){
        const url=' https://api.rootnet.in/covid19-in/stats/daily';
        fetch(url,{
          method:"GET"
        })
        .then(response=>response.json())
        .then(data=>this.setState({
          day:data.data.map((el)=>el.day),
          total:data.data.map((el)=>el.summary).map((day)=>Object.keys(day).map((key)=>day[key])).map((el)=>el[0]),
          indian:data.data.map((el)=>el.summary).map((day)=>Object.keys(day).map((key)=>day[key])).map((el)=>el[1]),
          foreign:data.data.map((el)=>el.summary).map((day)=>Object.keys(day).map((key)=>day[key])).map((el)=>el[2]),
          discharged:data.data.map((el)=>el.summary).map((day)=>Object.keys(day).map((key)=>day[key])).map((el)=>el[3]),
          death:data.data.map((el)=>el.summary).map((day)=>Object.keys(day).map((key)=>day[key])).map((el)=>el[4])}
          ,()=>console.log(this.state)))
      }
     

    render() {
        const data = {
            labels: this.state.day,
            datasets: [
              {
                label: 'Total cases',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: '#6610f2',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#6610f2',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                
                data: this.state.total
              },
              {
                label: 'Indians',
                fill: false,
                lineTension: 0.1,
                backgroundColor: '#e83e8c',
                borderColor: '#e83e8c',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#e83e8c',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                
                data: this.state.indian
              },
              {
                label: 'Foreigner',
                fill: false,
                lineTension: 0.1,
                backgroundColor: '#fd7e14',
                borderColor: '#fd7e14',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fd7e14',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: this.state.foreign
              },
              {
                label: 'Discharged',
                fill: false,
                lineTension: 0.1,
                backgroundColor: '#28a745',
                borderColor: '#28a745',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#28a745',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: this.state.discharged
              },
              {
                label: 'Deaths',
                fill: false,
                lineTension: 0.1,
                backgroundColor: '#dc3545',
                borderColor: '#dc3545',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#dc3545',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: this.state.death
              }
            ]
          };
          
        return (
            <div class="col-xl-12  py-1">
                 <div class="card mb-4">
                        <div class="card-header"><i class="fas fa-chart-bar mr-1"></i>Daily Stats Comparison</div>
                                <div class="card-body"> 
                                <Line id="chBar"
                                data={data} 
                                options={{
                                        responsive: true,
                                        scales: {
                                          xAxes: [{
                                            ticks: {
                                              beginAtZero: false,
                                            }
                                          }]
                                        },
                                        legend: {
                                            display: false
                                         },
                                       
                                        tooltips: {
                                            mode: 'label'
                                          }} }/>
                                    </div>
                </div>
             </div>
        )
    }
}

export default DailyStateChart
