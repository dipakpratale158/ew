import React, { useContext, useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../store/AuthContext';


function SignUp() {
    const authCtx = useContext(AuthContext)
    const history = useNavigate(); 
    const emailInputref = useRef();
    const passwordInputref = useRef();
    const newpasswordInputref = useRef();

    const submitHandler = (e)=>{
        e.preventDefault();
        const enteredEmail = emailInputref.current.value
        const enteredpassword = passwordInputref.current.value
        const newenteredpassword = newpasswordInputref.current.value

       localStorage.setItem('userEmail', enteredEmail)
        //console.log(enteredEmail,enteredpassword)

        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAqoDBXkEaYGVlxRqUL3QVoVDfW-kFExz0',{
            method:'POST',
            body:JSON.stringify({
                email:enteredEmail,
                password:enteredpassword,
                newpassword:newenteredpassword,

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
            alert("Successfuly Signed Up")
            
            localStorage.setItem('token',data.idToken)
            history('/login')
        }).catch((err)=>{
            alert(err.message)
        })

    }
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
    <div style={{margin: '5%', maxWidth: '500px', border: '2px solid #4CAF50', borderRadius: '10px', padding: '2rem', backgroundColor: '#F5F5FF'}}>
      <h1 style={{textAlign:'center',fontFamily:'MV Boli', marginBottom: '2rem'}}>Sign Up</h1>
        <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email"  ref={emailInputref} style={{backgroundColor:'#F8F8FF', border:'none', borderRadius:'5px'}}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" ref={passwordInputref} style={{backgroundColor:'#F8F8FF', border:'none', borderRadius:'5px'}}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>New Password</Form.Label>
          <Form.Control type="password" placeholder="newPassword" ref={newpasswordInputref} style={{backgroundColor:'#F8F8FF', border:'none', borderRadius:'5px'}}/>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" style={{color:'#333333'}} />
        </Form.Group>
       <Button variant="success" type="submit" style={{backgroundColor:'#4CAF50', border:'none', borderRadius:'5px', width:'100%'}}>
          Sign Up
        </Button>
        <div style={{textAlign:'center', marginTop: '1rem'}}>
          <Link to="/login">Log In</Link>
        </div>
      </Form>
    </div>
  </div>
  )
}

export default SignUp;