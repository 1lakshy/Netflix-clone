import React,{useState} from 'react'
import "./Input.css"
import { useDispatch } from 'react-redux';
import { setAuth } from '../../../store/authSlice';

const Input = ({text}) => {
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const dispatch = useDispatch();

// console.log(email+password)
// dispatch(setAuth({ email: email, password:password }));
  return (
    <div className="form">
    <input
    style={{color:'#000'}}
      type="text"
      id={text}
      className="form__input"
      autoComplete="off"
      placeholder=" "
      onChange={(e)=>{text=== "Email" ? setEmail(e.target.value) :  setPassword(e.target.value)}}
    />
    <label htmlFor={text} className="form__label">{text}</label>
    {/* <button
          className="authBtn"
          onClick={() => {
            dispatch(setAuth({ email: email, password:password }));
          }}
        >
          Save
        </button> */}
  </div>
  )
}

export default Input