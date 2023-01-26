//import { FormControl } from '@mui/material';
import React,{useState} from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/navbar';
//import Search from './components/Search';
import Countries from './components/Countries';
import Analysis from './components/Analysis'
import Footer from './components/Footer';
 import {Switch,Route} from 'react-router-dom';


function App() {

  const[page,SetPage] = useState("/")
  
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
               <Route path="/countries">
                    <Countries />
              </Route>
              <Route path="/analysis">
                    <Analysis />
              </Route>
              
              {/* <Route path="*">
                    <h1>404 not found</h1>
                </Route> */}
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
