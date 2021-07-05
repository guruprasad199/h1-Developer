// import '../../App.css';

import React, { Component } from 'react'
import { Button, FormGroup, FormControl, ControlLabel, Form, Col } from "react-bootstrap";
export class SignUp extends Component {
  render() {
    return (
      <>
      <h1>Sign Up</h1>
<Form style={{border: "2px solid black", padding:"50px", margine:"0px" , backgroundColor:"aqua"}}>
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

export default SignUp




// import React, { useState } from "react";
// // import "./App.css";
// import { useSpring, animated } from "react-spring";

// function SignUp() {
//   const [registrationFormStatus, setRegistartionFormStatus] = useState(false);
//   const loginProps = useSpring({ 
//     left: registrationFormStatus ? -500 : 0, // Login form sliding positions
//   });
//   const registerProps = useSpring({
//     left: registrationFormStatus ? 0 : 500, // Register form sliding positions 
//   });

//   const loginBtnProps = useSpring({
//     borderBottom: registrationFormStatus 
//       ? "solid 0px transparent"
//       : "solid 2px #1059FF",  //Animate bottom border of login button
//   });
//   const registerBtnProps = useSpring({
//     borderBottom: registrationFormStatus
//       ? "solid 2px #1059FF"
//       : "solid 0px transparent", //Animate bottom border of register button
//   });

//   function registerClicked() {
//     setRegistartionFormStatus(true);
//   }
//   function loginClicked() {
//     setRegistartionFormStatus(false);
//   }

//   return (
//     <div className="login-register-wrapper">
//       <div className="nav-buttons">
//         <animated.button
//           onClick={loginClicked}
//           id="loginBtn"
//           style={loginBtnProps}
//         >
//           Login
//         </animated.button>
//         <animated.button
//           onClick={registerClicked}
//           id="registerBtn"
//           style={registerBtnProps}
//         >
//           Register
//         </animated.button>
//       </div>
//       <div className="form-group">
//         <animated.form action="" id="loginform" style={loginProps}>
//           <LoginForm />
//         </animated.form>
//         <animated.form action="" id="registerform" style={registerProps}>
//           <RegisterForm />
//         </animated.form>
//       </div>
//       <animated.div className="forgot-panel" style={loginProps}>
//         <a herf="#">Forgot your password</a>
//       </animated.div>
//     </div>
//   );
// }

// function LoginForm() {
//   return (
//     <React.Fragment>
//       <label for="username">USERNAME</label>
//       <input type="text" id="username" />
//       <label for="password">PASSWORD</label>
//       <input type="text" id="password" />
//       <input type="submit" value="submit" className="submit" />
//     </React.Fragment>
//   );
// }

// function RegisterForm() {
//   return (
//     <React.Fragment>
//       <label for="fullname">full name</label>
//       <input type="text" id="fullname" />
//       <label for="email">email</label>
//       <input type="text" id="email" />
//       <label for="password">password</label>
//       <input type="text" id="password" />
//       <label for="confirmpassword">confirm password</label>
//       <input type="text" id="confirmpassword" />
//       <input type="submit" value="submit" class="submit" />
//     </React.Fragment>
//   );
// }

// export default SignUp;



