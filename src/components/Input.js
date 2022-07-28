import './input.css'
import { BiSearch } from "react-icons/bi"

const Input = () => {
  return (
    <div className='inputForm'>
        <input  type={'text'} placeholder="Enter a city name"
        value=''
        onChange={()=>{}}/>
        <div>    <BiSearch className='searchIcon'/></div>
    
    </div>
  )
}

export default Input