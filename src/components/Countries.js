import React from "react";
//import { useState } from "react";


function Countries() {
    
    return (
        <div>The countries list</div>
            )
}

fetch('https://api.npoint.io/57e11db613c05d4c58dc/Countries/')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // do something with the data
  })
  .catch(error => {
    console.error('Error:', error);
  });

  export default Countries