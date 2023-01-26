import CountryDetails from "./CountryDetails"
import Select from 'react-select'
import React, { useState } from "react"

function Countries ({countries}){
    const [category, setCategory] = useState("All")
    let countriesToDisplay = countries
    .filter(
      (countryStats) => category === 'All' || countryStats.Country === category
      )
  
    let countriesList = countriesToDisplay.map((country) => {
      return <CountryDetails key={country.ID} country={country} />
    });
  
    const options = countries.map((country) => {
      return {label: country.Country, value: country.Country}
    });
  
    //Change country category
    function handleCountryChange(country) {
      setCategory(country)
    }
  
    return(
        <div>
            <h3>Select a country to see it's statistics</h3>
          <Select 
            className="select"
            options={options} 
            onChange={ opt=> handleCountryChange(opt.label)} />
          <table>
            <tbody>
              <tr>
                <th>Country Name</th>
                <th>Total Confirmed</th>
                <th>Total Death</th>
              </tr>
              {countriesList}
            </tbody>
          </table>
        </div>
      )
  
}



export default Countries
