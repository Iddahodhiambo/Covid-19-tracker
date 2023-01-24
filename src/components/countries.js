import CountryDetails from "./Countrydetails"

function Countries ({countries}) {
       return( 
        countries.map(country =>(
         <CountryDetails
        Countries={country.Country}/>)))

        
}
    


export default Countries

