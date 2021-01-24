import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { signin } from '../actions/userActions'
import MessageBox from '../components/MessageBox'

export default function SigninScreen(props) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const redirect = props.location.search 
      ? props.location.search.split('=')[1]
      : '/' ;

  const userSignin = useSelector(state => state.userSignin)
  const { userInfo, loading, error } = userSignin

  const dispatch = useDispatch()
  const submitHandler=(e)=> {
      e.preventDefault();
      // Signin action
      dispatch(signin(email, password))
  };
  useEffect(()=>{
    if(userInfo) {
      props.history.push(redirect)
    }
  },[props.history, userInfo, redirect]);

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Sign In</h1>
        </div>
        {loading && <loadingBox></loadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="Enter email" required 
          onChange={ (e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter password" required 
          onChange={ (e) => setPassword(e.target.value)} />
        </div>
        <div>
          <label />
          <button className="primary" type="submit">Sign In</button>
        </div>
        <div>
          <label />
          <div>
          New customer? <Link to={`/register?redirect=${redirect}`}>Create your account</Link>
          </div>
        </div>
      </form>
    </div>
  )
}
