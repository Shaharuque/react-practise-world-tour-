import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './components/countries/Countries';
//import Person from './components/person/Person';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      {/*<LoadCountries></LoadCountries> */}
      <Header></Header>
      <Countries></Countries>
      {/*<Person></Person>*/}
      <Footer></Footer>
      
    </div>
  );
}

// //component
// function LoadCountries(){
//   const [countries,setCountries]=useState([])

//   useEffect(()=>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res=>res.json())
//     .then(data=>setCountries(data))
//   },[])
//   //console.log(countries)
//   return(
//     <div>
//       <h1>Visiting all countries in the World</h1>
//       <div>
//         <h3>Countries Informations:</h3>
//         {
//           countries.map(country=><ShowCountries name={country.name.common} borders={country.borders} flag={country.flags.png}></ShowCountries>)
//         }
//       </div>
//     </div>
//   )
// }

// //component
// function ShowCountries(props){
//   //console.log(props)
//   const Borders=props.borders
//   console.log(Borders)  //array type 
//   return(
//     <div className='each-country-div'>
//       <h4>Name: {props.name}</h4>
//       <h4>Borders:
//       {
//         //Kono kono country ar Borders thaktey nao parey tai ternary operator use korey conditional korey disi
//        (Borders? Borders.join(','):'no border line found')
//       }
//       </h4>
//       <img src={props.flag} alt="" />
//     </div>
//   )
// }

export default App;
