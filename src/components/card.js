import React from 'react'

function card(props) {
    return (
        <div className='container'>
        <div class=" card-deck ">
            <div class="card bg-secondary text-white mb-4">
                <div class="card-body ">
                    <h4 class="text-white text-center">
                        Total Cases
                    </h4></div>
                <div class="card-footer">
    <h2 class="text-white text-center"> {props.value[0]}</h2>
                </div>
            </div>
     
            <div class="card bg-warning text-white mb-4">
                <div class="card-body ">
                    <h4 class="text-white text-center">
                        Indians
                    </h4></div>
                <div class="card-footer">
                <h2 class="text-white text-center">{props.value[1]}</h2>
                </div>
            </div>
            <div class="w-100 d-none d-sm-block d-md-none"></div>
            <div class="card bg-primary text-white mb-4">
                <div class="card-body ">
                    <h4 class="text-white text-center">
                        Foreigners
                    </h4></div>
                <div class="card-footer">
                <h2 class="text-white text-center">{props.value[2]}</h2>
                </div>
            </div>
            <div class="w-100 d-none d-md-block d-lg-none"></div>
            <div class="card bg-success text-white mb-4">
                <div class="card-body ">
                    <h4 class="text-white text-center">
                        Recovered
                    </h4></div>
                <div class="card-footer">
                <h2 class="text-white text-center">{props.value[3]}</h2>
                </div>
            </div>
            <div class="w-100 d-none d-sm-block d-md-none"></div>
         <div class="w-100 d-none d-lg-block d-xl-none"></div>
            <div class="card bg-danger text-white mb-4">
                <div class="card-body ">
                    <h4 class="text-white text-center">
                        Death
                    </h4></div>
                <div class="card-footer">
                <h2 class="text-white text-center"> {props.value[4]}</h2>
                </div>
            </div>
    </div>
    </div>
       
    )
}

export default card
