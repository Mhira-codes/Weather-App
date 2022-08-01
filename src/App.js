

import './App.css';
import Input from './components/Input';
import {useEffect} from "react"
import axios from 'axios';



//  9e2e1ce388b4241fdb4d7c7f3746c434

 

function App() {

const API_KEY ="9e2e1ce388b4241fdb4d7c7f3746c434" ;
const fetchData= async ()=> {
 const response = await axios.get("https://api.openweathermap.org/data/2.5/weather?q={tokyo}&appid={API key}")
const data = await response.data

console.log(data)
}




useEffect(()=> {
 fetchData()
},[])


 
  return (
    <div className="App">
<div className='weatherContainer'>
<Input/>
<div className='weather_sub_container'>
<div className='weather_title'>
  <h1>Weather in Tokyo</h1>
</div>
<div className='weather_temperature'> 
<h2>15.45 C</h2>
</div>
<div className='weather_message'>
  <span>🌥</span>
  <h3 className='cloud_description'>Partly cloudy</h3>
</div>
<div className='weather_description'>
<div className='first_column'>
<h3>Humidity: 45%</h3>
<h3>Wind speed: 3.66 m/s</h3>
</div>
<div className='second_column'>
<h3>JP</h3>
<h4>3/4/2022, 4:22PM</h4>
</div>
</div>
</div>


</div>

    </div>
  );
}

export default App;
