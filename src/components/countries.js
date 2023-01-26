import CountryDetails from "./Countrydetails"

function Countries ({countries}){

  let countriesList = countries.map((country) => {
    return <CountryDetails key={country.ISO2} country={country} />
  })

  return(
    <div>
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

