import Navbar from './components/Navbar';
import './App.css';
import { useEffect,useState } from "react";
import Countries from './components/Countries';
import CovidTable from './components/CovidTable';


function App() {
  const[countries,setcountries] = useState([])

  //displaying the countries list
  useEffect( function(){
    fetch("https://api.covid19api.com/countries").then((response)=>response.json()).then((data) => {
      console.log(data)
      setcountries(data)
    })
    
  },[])
  
  return (
    <>
   <Navbar/>
   <Countries countries = {countries}/>
     <CovidTable countries={countries} />

   </>
   

  )

}


export default App;



