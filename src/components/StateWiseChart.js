import React from 'react'

function StateWiseChart(props) {
    return (
        <div class="col-xl-12">
        <div class="card mb-4">
            <div class="card-header"><i class="fas fa-chart-bar mr-1"></i>New Cases Chart</div>
            {/* <div class="card-body"><canvas id="myBarChart" width="100%" height="40"></canvas></div> */}
        <div class="card-body">{props.chart}</div>
        </div>
    </div>
    )
}

export default StateWiseChart
