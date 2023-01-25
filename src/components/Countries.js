import React from "react";
import Countries from "";

const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://api.covid19api.com/countries", {
      "method": "GET",
      "headers": {
        'X-RapidAPI-Key': '8cb05c0c99msh54bd09dc4e0a425p1571ddjsnf812c3d83eac',
        'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data.response);
      setCountries(data.response);
    })
    .catch(err => {
      console.error(err);
    });
  }, []);

  