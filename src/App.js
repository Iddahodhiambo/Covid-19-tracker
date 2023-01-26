import Navbar from './components/navbar';
import './App.css';
import { useEffect,useState } from "react";
import { Route, Routes } from 'react-router-dom';
import Countries from './components/countries';
import Home from './components/Home';
import Graphs from './components/graph';
// import Summary from './components/summary';


function App() {
  const[summary,setSummary] = useState([]);

  // fetch country data
  useEffect(() => {
    fetch("https://api.covid19api.com/summary")
      .then((res) => res.json())
      .then((r) => setSummary(r))
  },[])

  console.log(summary)
  
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/countries' element={<Countries countries={summary.Countries} />} />
        <Route path='/graphs' element={<Graphs/>} />


      </Routes>
      {/* <Countries countries={summary.Countries}/> */}
    </div>
  )

}


export default App;
