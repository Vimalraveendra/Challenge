import {useState,useEffect} from 'react';
import './App.css';

import HotelCollections from '../Components/HotelCollections/HotelCollections';

const App=()=> {
  const [hotels,setHotels]=useState([])
  const [adults,setAdults]=useState(0);
  const [children,setChildren]=useState(0);

  

  useEffect(()=>{
    const url=`https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG`
    const getHotels= async()=>{
      const response= await fetch(url)
      const data = await response.json();
      setHotels(data)
    }
    getHotels();
  },[])
  console.log("hotes",hotels)
  return (
    <div className="App">
     <h1>Challenge</h1>
     <HotelCollections
       hotels={hotels}
        adults={adults}
        children={children}
       />
    </div>
  );
}

export default App;
