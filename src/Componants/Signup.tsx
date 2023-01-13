import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './SignUp.css'
// defing the type of object 
type obj = {
  name: string
  email: string
  username: string
  password: string
  number: string
  img:string
}
export default function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState('')
  const [number, setNumber] = useState('')
  const [logarr, setLogarr] = useState<any | []>([])
  const [img, setImg] = useState("");
  // functions for taking the value from input boxes
  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const usernameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }
  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }
  const numberHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value)
  }
  const SignUpButtonHandler = () => {
    // validation
    var atposition = email.indexOf("@");
    var dotposition = email.lastIndexOf(".");
    if (name === "") {
      alert("name should not be empty")
    }
    else if (!isNaN(name as any)) {
      alert("Name Should not be integer");
    }
    else if (email === "") {
      alert("Plese enter your email");
    }
    else if ((atposition < 1 || email.lastIndexOf(".") < atposition + 2 || dotposition + 2 >= email.length)) {
      alert("please enter valid email");
    }
    else if (username === "") {
      alert("Please enter your username");
    }
    else if (password as string === "") {
      alert("please enter password");
    }
    else if (number as string === "") {
      alert("Enter mobile number")
    }
    else if (isNaN(number as any)) {
      alert("number should be integer")
    }
    else {
      var obj: obj = {
        name: name,
        email: email,
        username: username,
        password: password,
        number: number,
        img:img,
      }
      logarr.push(obj)
      let arr = JSON.stringify(logarr)
      // set the values in local storage
      sessionStorage.setItem("data", arr);
      alert("Created account succesfully Now please login")
      navigate('/Login')
    }
  }
  // back to login page
  const Loginhere = () => {
    navigate('/Login')
  }
  const ChooseImgHandler=(event: any)=>{
    let p1 = URL.createObjectURL(event.target.files[0]);
    setImg(p1);
  }
  return (
    <div>
      <div className="LoginPage" >
        <h1>Sign Up</h1>
        <hr />
        <p><img className="Image" src={img} alt="" /></p>
        <input type="file" onChange={ChooseImgHandler} />
        <input type="text" name="name" placeholder="Full name" onChange={nameHandler} />
        <input type="text" placeholder="Enter Email" name="email" onChange={emailHandler} />
        <input type="text" name="username" placeholder="Enter username" onChange={usernameHandler} />
        <input
          type="password"
          placeholder="Enter Password"
          name="psw" onChange={passwordHandler}
          minLength={4} maxLength={20}
        />
        <input type="text" name="number" placeholder="Enter your number" onChange={numberHandler} maxLength={10} minLength={10} />
        <button className="SignUpBUtton" onClick={SignUpButtonHandler}>Sign Up</button>
        <p className="LoginSignUpLink" onClick={Loginhere}> Already have account <b > LoginHere</b></p>
      </div>
    </div>
  )
}
