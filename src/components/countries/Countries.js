//all countries 

import React, { useEffect, useState } from 'react';
import Country from '../country/Country';
//connection with component's css file
import './Countries.css'

const Countries = () => {
    //1.state load and initial value of 'countries' state define
    const [countries,setCountries]=useState([])

    //2.useEffect() using to fetch data from api and using setCountries change the 'countries' state value
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))  //setting countries new state or value with the help of setCountries
    },[])

    return (
        <div>
          <h2 className='text-style'>World Map Tour</h2>  
          <h3 className='text-style'>Total country found: {countries.length}</h3>

          <div /*lassName='coutries-container'*/ className='row g-5'>
            {
            countries.map(country=><Country 
              // Pass multiple data together to a child component(Country)
              country={country}
              key={country.cca3}    //unique key to avoid warning
              
            /*  countryName={country.name.common} 
              population={country.population}
              flag={country.flags.png} 
              region={country.region}*/
            >
              </Country>)
            }
          </div>
        </div>
    );
};

export default Countries;