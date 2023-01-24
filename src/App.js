import Navbar from './components/navbar';
import './App.css';
import { useEffect,useState } from "react";
import Countries from './components/countries';


function App() {
  const[countries,setcountries] = useState([])
  //displaying countries list
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
   </>
  )

}


export default App;
