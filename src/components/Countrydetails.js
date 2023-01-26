 function CountryDetails({country}) {
    return(
        <tr>
            <td>{country.Country}</td>
            <td>{country.TotalConfirmed}</td>
            <td>{country.TotalDeaths}</td>
        </tr>
    )
    
 }
 export default CountryDetails