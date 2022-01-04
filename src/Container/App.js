import {useState,useEffect} from 'react';
import './App.css';

const App=()=> {
  const [hotels,setHotels]=useState([])

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
    </div>
  );
}

export default App;
