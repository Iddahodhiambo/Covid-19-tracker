import { useEffect,useState } from "react";

import Summarydetails from "./Summarydetails";
import Dayone from "./Dayone";
  

function Summary({summary}) {

    const [count, setCount] = useState(0);

    useEffect(() => {
      let counter = count;
      const interval = setInterval(() => {
        if (counter >= summary.length) {
          clearInterval(interval);
        } else {
          setCount(count => count + 1);
          counter++; // local variable that this closure will see
        }
      }, 1500);
      return () => clearInterval(interval); 
    }, [summary]);


    let dayOneCases = summary.slice(0, count).map((country) => {
        return <Dayone key={country.ID} country={country} />
    })

        return(
            
        <div>
            <table>
                <tbody>
                <tr>
                    <th>Country</th>
                    <th>Day one cases</th>
                </tr>
                {dayOneCases}
                </tbody>
            </table>
        </div>
            
            
        )
    

}



export default Summary;

