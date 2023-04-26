import React, { useContext, useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../store/AuthContext';


function LogIn() {
    const authCtx = useContext(AuthContext)
    const history = useNavigate(); 
    const emailInputref = useRef();
    const passwordInputref = useRef();

    const submitHandler = (e)=>{
        e.preventDefault();
        const enteredEmail = emailInputref.current.value
        const enteredpassword = passwordInputref.current.value
        localStorage.setItem('userEmail', enteredEmail)
        const replcedmail = enteredEmail.replace('@','').replace('.','')

        //console.log(enteredEmail,enteredpassword)

        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA8_s81px03_ZgvH0948868T6K6XoBBXMw',{
            method:'POST',
            body:JSON.stringify({
                email:enteredEmail,
                password:enteredpassword,
                returnSecureToken:true
            }),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then((res)=>{
            if(res.ok){
                return res.json()
            }else{
                res.json().then((data)=>{//this also return a promise
                    let errormessage = 'authenication Failed'
                    // if(data&&data.error&&data.error.message){
                    //     errormessage = data.error.message

                    // }
                    throw new Error(errormessage)
                })
            }
        }).then((data)=>{
            authCtx.Login(data.idToken)
            localStorage.setItem('token',data.idToken)
            console.log(data.idToken)
            localStorage.setItem('xyz',replcedmail)

            
            localStorage.setItem('token',data.idToken)
            history('/store')
        }).catch((err)=>{
            alert(err.message)
        })

    }
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
    <div style={{width: '50%', border: '2px solid #4CAF50', borderRadius: '10px'}}>
      <h1 style={{textAlign:'center', fontFamily:'MV Boli'}}>Log In</h1>
      <Form onSubmit={submitHandler} style={{backgroundColor:'#F5F5FF', padding:'2rem', borderRadius:'10px'}}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{color:'#333333'}}>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email"  ref={emailInputref} style={{backgroundColor:'#F8F8FF', border:'none', borderRadius:'5px'}} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label style={{color:'#333333'}}>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" ref={passwordInputref} style={{backgroundColor:'#F8F8FF', border:'none', borderRadius:'5px'}} />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" style={{color:'#333333'}} />
        </Form.Group>
  
        <Button variant="success" type="submit" style={{backgroundColor:'#4CAF50', border:'none', borderRadius:'5px'}}>
          Log In
        </Button>
      </Form>
    </div>
  </div>
  )
}

export default LogIn;