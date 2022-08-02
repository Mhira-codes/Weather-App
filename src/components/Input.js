import './input.css'
import { BiSearch } from "react-icons/bi"

const Input = ({text, submit,func}) => {
  return (
    // !onSubmit in used in forms
    <form className='inputForm' onSubmit={submit}>
       <input  type={'text'} placeholder="Enter a city name"
        onChange={text}/>
        <div onClick={func}>   
           <BiSearch className='searchIcon'/></div>
    
    </form>
  )
}

export default Input