import { useEffect,useState } from "react";

import Summarydetails from "./Summarydetasils";
  

function Summary() {
const [summary,setsummary] = useState([])


useEffect(function () {
  fetch("https://api.covid19api.com/summary").then((response)=> response.json()).then((data) => {
            
            setsummary(data)
            
        })
},[])
    console.log(summary)

//    let summarylist = summary.map(Country => {
    
//     return<Summarydetails Country = {Country.Country}
            
//             Cases = {Country.NewConfirmed}/>
        
//         })
        return(
            <>
            {/* {summarylist} */}
            <h2>Hello world</h2>
            
            </>
        )
    

}



export default Summary;