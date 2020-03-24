import React from 'react'

function StateTable(props) {
 let show =null;
 if(props.regional.length!==0){
     let table=props.regional.map((row)=>Object.keys(row).map((key,index)=>(row[key])))
 show=table.map((row,index)=>(<tr key={index} >
     {row.map((el,index)=>(<td>{el}</td>))}
 </tr>))
 }
    return (
        <div class="card mb-4">
                         <div class="card-header"><i class="fas fa-table mr-1"></i>DataTable Example</div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                        <thead>
                                            <tr>
                                                <th>State</th>
                                                <th>Indians</th>
                                                <th>Foreigners</th>
                                                <th>Cured</th>
                                                <th>Deaths</th>
                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <tr>
                                                <th>State</th>
                                                <th>Indians</th>
                                                <th>Foreigners</th>
                                                <th>Cured</th>
                                                <th>Deaths</th>
                                            </tr>
                                        </tfoot>
                                             <tbody>
                                           {show}
                                            </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
    )
}

export default StateTable
