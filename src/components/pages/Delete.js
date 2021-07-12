import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col, Container
} from 'reactstrap'
// import Card from 'react-bootstrap'


export default class Delete extends Component {
    render() {
        return (
            <>
             <h1 style={{textAlign:"center", color:"green"}}>Our Happy Clints</h1>
         <div style={{margin:"0px", padding:"30px" }}>
   <Container >       
    <Row style={{padding:"10px"}}>
      <Col md={3}>
      <Card style={{height:"350px", width:"300"}}>
        <CardImg  style={{width:"100px", height:"100px", borderRadius:"70%" , padding:"-20px" , marginLeft:"60px", lineHeight:"100px"}} top width="50%" src="pankajsali.jpg"  />
        <CardBody>
          <CardTitle tag="h5">Pankaj  </CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">~Senior System Engineer @ Infosys</CardSubtitle>
          <CardText>It has been a pleasure working with h1 Developer. I appreciate your dedication to the projects that you are on. It is nice from customer point of view .</CardText>
        </CardBody>
      </Card> 
      </Col>




      <Col md={3}>
      <Card style={{height:"350px", width:"300"}}>
        <CardImg style={{width:"100px", height:"100px", borderRadius:"70%" , padding:"-20px" , marginLeft:"60px", lineHeight:"100px"}} top width="100%" src="images/tejalgharte.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Tejal Gharte</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">~Software Engineer @Atos-Syntel</CardSubtitle>
          <CardText>h1 Developer helped me bring my art and craft (side business) website into the 21st century. With their development expertise thank you
            {/* and I can now keep my website up-to-date myself without relying on an expensive designer.  I immediately saw an improvement in my search engine results and no longer shy away from referring leads to research my site. */}
            </CardText>
        </CardBody>
      </Card>  
      </Col>



      <Col md={3}>
      <Card style={{height:"350px", width:"300"}}>
        <CardImg style={{width:"100px", height:"100px", borderRadius:"70%" , padding:"-20px" , marginLeft:"60px", lineHeight:"100px"}} top width="100%" src="images/bipasapatra.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Bipasa Patra</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">~HOD @G.H.Raisoni College of Engineering</CardSubtitle>
          <CardText>We have been very happy with our paper publication ! It looks professional Our experience with the paper publication with Guruprasad has been great.</CardText>
        </CardBody>
      </Card>
      
      </Col>
      </Row> 




      {/* ________________________________________________________________________________ */}


      <Row style={{padding:"10px"}}>
      <Col md={3}>
      <Card style={{height:"350px", width:"300"}}>
        <CardImg style={{width:"100px", height:"100px", borderRadius:"70%" , padding:"-20px" , marginLeft:"60px", lineHeight:"100px"}} top width="100%" src="images/shubhamlodhe.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Shubham Londhe</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">~Senior Web Developer/ Trainer @Vamstar</CardSubtitle>
          <CardText>Guruprasad doing good job with us, i already announced gift for him on youtube for his good work</CardText>
          <a href="https://www.youtube.com/watch?v=yBJFAqzm2B4"><Button>Watch Now</Button></a> 
        </CardBody>
      </Card>
      
      </Col>




      <Col md={3}>
      <Card style={{height:"350px", width:"300"}}>
        <CardImg style={{width:"100px", height:"100px", borderRadius:"70%" , padding:"-20px" , marginLeft:"60px", lineHeight:"100px"}} top width="100%" src="images/Capture.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Piyush Baviskar</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">~Student @ CDAC Mumbai</CardSubtitle>
          <CardText>H1 Developer (Guruprasad) help me to sort things in my learning period he actually done the great job for me Thank you so much !!</CardText>
        </CardBody>
      </Card>    
      </Col>


      <Col md={3}>
      <Card style={{height:"350px", width:"300"}}>
        <CardImg style={{width:"100px", height:"100px", borderRadius:"70%" , padding:"-20px" , marginLeft:"60px", lineHeight:"100px"}} top width="100%" src="images/ashwini.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Ashwini Sawant</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">~Assistant System Engineer @Tata Consultancy Services(TCS)</CardSubtitle>
          <CardText>It is nice from the customers stand point to be able to get in touch with you  and you always made yourselves available.</CardText>
        </CardBody>
      </Card> 
      </Col>
      </Row> 

      </Container>       
    </div>


            </>
        )
    }
}


