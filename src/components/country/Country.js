//each country

import React from 'react';
import './Country.css'

const Country = (props) => {
    //console.log(props)
    //object destructring korey more efficiently data access kortey pari
    const {region,name,population,capital,flags,borders}=props.country
    //console.log(name)  //will get a object inside 'name'
    //console.log(borders) //will get a array inside 'borders'

    return (
        //bootstrap style use kora hoisey(bangla niyom a bootstrap use kora hoisey)
        <div className='div-style bg-success col-md-4'>  

            <div>
            <img className='img-style' src={flags.png} alt="" />
            </div>
            <h4>Country name: {name.common}</h4>
            <p>Capital: {capital}</p>
            <p>Population:{population}</p>
            <p>Region: {region}</p>
            <p>Borders: {borders? borders.join(','):'no data found about borders'}</p>

            {/*<div>
            <img src={props.country.flags.png} alt="" />
            </div>
            <h4>Country name: {props.country.name.common}</h4>
            <p>Population:{props.country.population}</p>
            <p>Region: {props.country.region}</p>
            <p>Capital:{props.country.capital}</p>
    <p>Borders:{bordersArray? bordersArray.join(','):'no data found about borders'}</p>*/}
            {/*
            <div>
                <img src={props.flag} alt="" />
            </div>
            <h4>Country name: {props.countryName}</h4>
            <p>Population:{props.population}</p>
            <p>Region: {props.region}</p>*/}
        </div>
    );
};

export default Country;