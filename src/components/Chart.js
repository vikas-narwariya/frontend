import React from 'react';
import {Bar} from 'react-chartjs-2';
import {Link} from 'react-router-dom'; 
import  { useState, useEffect } from "react";

const Chart =()=>{

  const [searchTerm, setSearchTerm] = useState("");

  return(
<div> 
  
    <nav className="navbar navbar-light bg-light">
    <div className="container-fluid">
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" onChange={(e) => {setSearchTerm(e.target.value)}}/>
        <button className="btn btn-outline-success" type="submit">Search</button>
        <a className="nav-link active" aria-current="page" ><Link to ="/">TableView</Link> </a>
      </form>
    </div>
  </nav>
 
    
    <div>
    
      
  

     

    
   <Bar data = {{
        labels: ['China', 'Japan', 'Philippines', 'Malaysia', 'Thailand', 'Vietnam'],
        datasets: [{
            label: 'Salary Mean',
            data: [8516.873377976179, 8305.02606060606, 8215.592264150948, 8827.508833333337, 9950.576666666666, 8289.484642857145],
            backgroundColor: [
                'rgb(83, 97, 98)',
                'rgb(94, 139, 126)',
                'rgb(71, 89, 126)',
                'rgb(119, 141, 169)',
                'rgb(121, 163, 177)',
                'rgb(92, 103, 125)'
            ],
            borderColor: [
                'rgb(66, 70, 66)',
                'rgb(47, 93, 98)',
                'rgb(41, 59, 95)',
                'rgb(65, 90, 119)',
                'rgb(69, 98, 104)',
                'rgb(52, 58, 64)'
            ],
            borderWidth: 1
        
    },
  ],}}
  height={400}
  width={600}
  options={{
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          ticks:{
            beginAtZero: true,
          },
        }
      ]
    }
  }}
/>
   

</div>
       
</div> )
 
 }
  export default Chart;