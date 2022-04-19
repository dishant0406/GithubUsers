import React from 'react'
import './Login.css'
import loginimage from '../../../assets/github.png'

const Login = () => {
  return (
    <div className='login'>
      <div className='logincontainer'>
        <div className='logintext'>
        <h2>
          See All the Work done by the User on Github
        </h2>
        <h3>
          Search using the username and get details
        </h3>
        <button class="loginbtn">
          Login
        </button>
        </div>
        <div className='loginimg'>
          <img src={loginimage}/>
        </div>
      </div>
    </div>
  )
}

export default Login