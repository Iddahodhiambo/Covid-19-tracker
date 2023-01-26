import React, { useEffect, useState } from 'react'

function Dayone({country}) {
    const [dayOne, setDayOne] = useState(0);

    useEffect(() => {
        fetch(`https://api.covid19api.com/dayone/country/${country.Slug}/status/confirmed`)
          .then((res) => res.json())
          .then((r) => setDayOne(r[0].Cases))
      },[]);

      console.log(dayOne)

  return (
    <tr>
        <td>{country.Country}</td>
        <td>{dayOne}</td>
    </tr>
  )
}

export default Dayone