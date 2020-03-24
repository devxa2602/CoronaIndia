import React from 'react'
import {Bar} from 'react-chartjs-2';


function StateGraph(props) {
    let data=null;
if(props.regional.length!==0){
     data = {
        labels: props.regional.map((row)=>Object.keys(row).map((keys,index)=>(row[keys]))).map((row)=>(row[0])),
        datasets: [
          {
            label: 'States',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: props.regional.map((row)=>Object.keys(row).map((keys,index)=>(row[keys]))).map((row)=>(row[1]))
          }
        ]
      };
}
    return (
        <div class="col-xl-12 " >
        <div class="card mb-4">
            <div class="card-header"><i class="fas fa-chart-bar mr-1"></i>State Wise Case Distribution</div>
        <div class="card-body"id="myBarChart"> 
                <Bar data={data}
                style={{
                    position: 'absolute',
                        left: '0px',
                        top: '0px',
                        right: '0px',
                        bottom: '0px',
                        overflow: 'hidden',
                        pointerEvents: 'none',
                        visibility: 'hidden',
                        zIndex: -1}}
                 options={{
                    responsive: true,
                  
                    legend: {
                        display: false
                     }}}
                />
          </div>
        </div>
    </div>
    )
}

export default StateGraph
