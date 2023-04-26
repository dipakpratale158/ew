import { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const ContactUs = ()  => {
  const nameRef=useRef('')
  const emailRef=useRef('')
  const numberRef=useRef('')
  
  const submitHandler =(e)=>{
    e.preventDefault();
    const data = {
      name:nameRef.current.value,
      email:emailRef.current.value,
      mobilenumber:numberRef.current.value

    }
    console.log(data)

     fetch('https://ecomerce-website-contactus-default-rtdb.firebaseio.com/contactInfo.json',{
      method:'POST',
      body:JSON.stringify(data),
      headers:{
        'Content-Type':'application/json'
      }
})

    nameRef.current.value='';
    emailRef.current.value='';
    numberRef.current.value = '';

  }

  return (
    <div style={{margin:'5%',paddingBottom:'10%'}}>
       <Form onSubmit={submitHandler}>
       <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="enter name" ref={nameRef}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" ref={emailRef} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control type="number" placeholder="mobile number" ref={numberRef} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    
    </div>
  )
}

export default ContactUs;