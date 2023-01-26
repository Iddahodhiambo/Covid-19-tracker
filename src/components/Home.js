import React from "react";
import InfoBox from "./InfoBox";



function Home() {

    return(
    <div className="mai>nSection">
  
      <h1>What is COVID-19 ?</h1>
      Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.
      Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment. However, some will become seriously ill and require medical attention.
      <p>The virus can spread from an infected person’s mouth or nose in small liquid particles when they cough, sneeze, speak, sing or breathe. These particles range from larger respiratory droplets to smaller aerosols.
         You can be infected by breathing in the virus if you are near someone who has COVID-19, or by touching a contaminated surface and then your eyes, nose or mouth. The virus spreads more easily indoors and in crowded settings.
      </p>
    <InfoBox/>
    </div>
    )
}

export default Home;