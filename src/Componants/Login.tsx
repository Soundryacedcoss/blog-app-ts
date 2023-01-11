import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
export const Login = () => {
  const navigate = useNavigate();
  const [userlogname, setuserLogname] = useState('');
  const [pass, setPass] = useState('');
  const LoginButtonHandler = () => {
   let userlogdata = localStorage.getItem("data")
    let userlogdata1 = JSON.parse(userlogdata as string)
    for (var i = 0; i < userlogdata1.length; i++) {
      // checking the data which is taken from user
      if (userlogname === userlogdata1[i].username && pass === userlogdata1[i].password) {
        navigate('/PostBlog');
      }
      else if (userlogname !== userlogdata1[i].username) {
        alert("Wrong username");
      }
      else if (pass !== userlogdata1[i].password) {
        alert("wrong password");
      }
    }
  }
  // function for taking the value from input boxes
  const userNameHandler = (e:any) => {
    setuserLogname(e.target.value)
  }
  const passwHandler = (e:any) => {
    setPass(e.target.value)
  }
  // Back to sighn up page
  const SignUpHere = () => {
    navigate('/')
  }
  // Back to home
  const BackHAndler = () => {
    navigate('/')
  }
  return (
    <div className='PageDiv'>
      <button onClick={BackHAndler} className="btn btn-info ms-3 mt-3">
        Back To Home
      </button>
      <div className="LoginPage">
        <h2>Login Here</h2>
        <input type="text" placeholder="Enter Username" name="uname" onChange={userNameHandler} required />
        <input type="password" placeholder="Enter Password" name="psw" onChange={passwHandler} required />
        <button onClick={LoginButtonHandler} className='SignUpBUtton' type="submit">Login</button>
        <p className="LoginSignUpLink" onClick={SignUpHere}>Don't Have Account <b>Register Now</b></p>
      </div>
    </div>
  )
}
