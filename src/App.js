//import { FormControl } from '@mui/material';
import React,{useState,useEffect} from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/navbar';
//import Search from './components/Search';
import Countries from './components/Countries';
import Analysis from './components/Analysis'
import Footer from './components/Footer';
import {Switch,Route} from 'react-router-dom';
import Summary from './components/summary';


 


function App() {

  const[page,SetPage] = useState("/")

  const[summary,setSummary] = useState([]);

  // fetch country data
  useEffect(() => {
    fetch("https://api.covid19api.com/summary")
      .then((res) => res.json())
      .then((r) => setSummary(r))
  },[])

  console.log(summary)

  
  return (
    <div className='App'>       
      <div>
        <Navbar onChangePage={SetPage} />
          <Switch>
              <Route exact path="/">
                    <Home />
              </Route>
              {/* <Route path="/search">
                    <Search />
              </Route>
               */}
               <Route path="/countries" >
                    <Countries countries={summary.Countries} />
              </Route>
              <Route path="/analysis">
                    <Analysis />
              </Route>
              
               <Route path="/summary">
                 <Summary summary={summary.Countries} />} />
                </Route> 
            </Switch>
            <Footer/>
        </div>


    
  
    {/* <FormControl className='app__header'/> 
    <Select variant='outlined' value="dummy">
    </Select> */}
    {/* <LineGraph/> */}
    </div>
      )
  }
export default App;
