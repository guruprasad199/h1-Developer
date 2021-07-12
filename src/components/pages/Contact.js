// import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// // import ".components/pages/Contact.css";

// export default function Contact() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   function validateForm() {
//     return email.length > 0 && password.length > 0;
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//   }

//   return (
//     <div className="Login">
//       <Form onSubmit={handleSubmit}>
//         <Form.Group size="lg" controlId="email">
//           <Form.Label>Email</Form.Label>
//           <Form.Control
//             autoFocus
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </Form.Group>
//         <Form.Group size="lg" controlId="password">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </Form.Group>
//         <Button block size="lg" type="submit" disabled={!validateForm()}>
//           Login
//         </Button>
//       </Form>
//     </div>
//   );
// }





// import '../../App.css';

import React, { Component } from 'react'
import { Button, FormGroup, FormControl, ControlLabel, Form, Col } from "react-bootstrap";
export class Contact extends Component {
  render() {
    return (
      <>
      <h1>Sign Up</h1>
<Form style={{border: "2px solid black", padding:"50px", margine:"0px" , backgroundColor:"rgb(181, 101, 167)"}}>
  <Form.Row style={{padding:"10px"}}>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group style={{padding:"20px"}} as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Form.Row>
  <Form.Group style={{padding:"20px"}} controlId="formGridAddress1">
    <Form.Label >Mobile number</Form.Label>
    <Form.Control placeholder="9090****" />
  </Form.Group>
  <Form.Row style={{padding:"20px"}}>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group style={{padding:"20px"}} as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Choose...</option>
        <option>Maharashtra</option>
        <option>Gujrat</option>
        <option>Uttar pradesh</option>
        <option>Madhya pradesh</option>


      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button style={{padding:"10px", margine:"20px", color:"white", backgroundColor:"green"}} variant="primary" type="submit">
    Submit
  </Button>
</Form>
      </>
     )
   }
 }

export default Contact;
