import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col, Container
} from 'reactstrap'




export default class LocalClint extends Component {
    render() {
        return (
            <>
             <h1 style={{textAlign:"center", color:"green"}}>Our Happy Clients</h1>
         <div style={{margin:"0px", padding:"30px" }}>
   <Container >       
    <Row style={{padding:"10px"}}>
      <Col md={3}>
      <Card style={{  border: "1px solid black",  margin:"10px"}}>
        <CardImg  style={{width:"100px", height:"100px", borderRadius:"70%" , padding:"-20px" , marginLeft:"60px", lineHeight:"100px"}} top width="50%" src="images/pankajsali.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Pankaj Sali </CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">~Senior System Engineer @ Infosys</CardSubtitle>
          <CardText>It has been a pleasure working with h1 Developer. I appreciate your dedication to the projects that you are on. It is nice from customer point of view .</CardText>
        </CardBody>
      </Card> 
      </Col>




      <Col md={3}>
      <Card style={{ border: "1px solid black",  margin:"10px"}}>
        <CardImg style={{width:"100px", height:"100px", borderRadius:"70%" , padding:"-20px" , marginLeft:"60px", lineHeight:"100px"}} top width="100%" src="images/tejalgharte.JPG" alt="Card image cap" />
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
      <Card style={{ border: "1px solid black",  margin:"10px"}}>
        <CardImg style={{width:"100px", height:"100px", borderRadius:"70%" , padding:"-20px" , marginLeft:"60px", lineHeight:"100px"}} top width="100%" src="images/bipasapatra.JPG" alt="Card image cap" />
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
      <Card style={{ border: "1px solid black",  margin:"10px"}}>
        <CardImg style={{width:"100px", height:"100px", borderRadius:"70%" , padding:"-20px" , marginLeft:"60px", lineHeight:"100px"}} top width="100%" src="images/shubhamlodhe.JPG" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Shubham Londhe</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">~Senior Web Developer/ Trainer @Vamstar</CardSubtitle>
          <CardText>Guruprasad doing good job with us, i already announced gift for him on youtube for his good work</CardText>
          <a href="https://www.youtube.com/watch?v=yBJFAqzm2B4"><Button>Watch Now</Button></a> 
        </CardBody>
      </Card>
      
      </Col>




      <Col md={3}>
      <Card style={{ border: "1px solid black",  margin:"10px"}}>
        <CardImg style={{width:"100px", height:"100px", borderRadius:"70%" , padding:"-20px" , marginLeft:"60px", lineHeight:"100px"}} top width="100%" src="images/Capture.JPG" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Piyush Baviskar</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">~Student @ CDAC Mumbai</CardSubtitle>
          <CardText>H1 Developer (Guruprasad) help me to sort things in my learning period he actually done the great job for me Thank you so much !!</CardText>
        </CardBody>
      </Card>    
      </Col>


      <Col md={3}>
      <Card style={{ border: "1px solid black",  margin:"10px"}}>
        <CardImg style={{width:"100px", height:"100px", borderRadius:"70%" , padding:"-20px" , marginLeft:"60px", lineHeight:"100px"}} top width="100%" src="images/ashwini.JPG" alt="Card image cap" />
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






































// import React, {Component} from 'core-js/library/fn/reflect/es7/metadata'
// import { Card, CardImg, CardText, CardBody,
//   CardTitle, CardSubtitle, Button } from 'reactstrap'

//   class LocalClint extends Component {
//     render() {
//       return (
//         <div>
//              <Card>
//         <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
//         <CardBody>
//           <CardTitle tag="h5">Card title</CardTitle>
//           <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
//           <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
//           <Button>Button</Button>
//         </CardBody>
//       </Card>
//         </div>
//       )
//     }
//   }

//   export default LocalClint;




























































// import React, { Component } from 'react'
// import { NavLink } from "react-router-dom";
// import { Card, CardImg, CardText, CardBody,  CardTitle, CardSubtitle, Button, Row, Col, Container } from 'reactstrap'
// import Card from 'react-bootstrap'


// export default class LocalClint extends Component {
//     render() {
//         return (
//             <>
//              <h1 style={{textAlign:"center", color:"green"}}>Our Happy Clints</h1>
//          <div style={{margin:"0px", padding:"30px" }}>
//    <Container >       
//     <Row style={{padding:"10px"}}>
//       <Col md={3}>
//       <Card   style={{height:"350px", width:"300" , border: "1px solid black"}}>
//         <CardImg  style={{width:"100px", height:"100px", borderRadius:"70%" , padding:"-20px" , marginLeft:"60px", lineHeight:"100px"}} top width="50%" src="pankajsali.jpg"  />
//         <CardBody>
//           <CardTitle tag="h5">Pankaj  </CardTitle>
//           <CardSubtitle tag="h6" className="mb-2 text-muted">~Senior System Engineer @ Infosys</CardSubtitle>
//           <CardText>It has been a pleasure working with h1 Developer. I appreciate your dedication to the projects that you are on. It is nice from customer point of view .</CardText>
//         </CardBody>
//       </Card> 
//       </Col>




//       <Col md={3}>
//       <Card style={{height:"350px", width:"300"}}>
//         <CardImg style={{width:"100px", height:"100px", borderRadius:"70%" , padding:"-20px" , marginLeft:"60px", lineHeight:"100px"}} top width="100%" src="images/tejalgharte.jpg" alt="Card image cap" />
//         <CardBody>
//           <CardTitle tag="h5">Tejal Gharte</CardTitle>
//           <CardSubtitle tag="h6" className="mb-2 text-muted">~Software Engineer @Atos-Syntel</CardSubtitle>
//           <CardText>h1 Developer helped me bring my art and craft (side business) website into the 21st century. With their development expertise thank you
//             {/* and I can now keep my website up-to-date myself without relying on an expensive designer.  I immediately saw an improvement in my search engine results and no longer shy away from referring leads to research my site. */}
//             </CardText>
//         </CardBody>
//       </Card>  
//       </Col>



//       <Col md={3}>
//       <Card style={{height:"350px", width:"300"}}>
//         <CardImg style={{width:"100px", height:"100px", borderRadius:"70%" , padding:"-20px" , marginLeft:"60px", lineHeight:"100px"}} top width="100%" src="images/bipasapatra.jpg" alt="Card image cap" />
//         <CardBody>
//           <CardTitle tag="h5">Bipasa Patra</CardTitle>
//           <CardSubtitle tag="h6" className="mb-2 text-muted">~HOD @G.H.Raisoni College of Engineering</CardSubtitle>
//           <CardText>We have been very happy with our paper publication ! It looks professional Our experience with the paper publication with Guruprasad has been great.</CardText>
//         </CardBody>
//       </Card>
      
//       </Col>
//       </Row> 




      {/* ________________________________________________________________________________ */}


      {/* <Row style={{padding:"10px"}}>
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
 */}



//       <Card style={{ width: '18rem', border: "1px solid black", padding:"10px", margin:"20px" }}>
//   <CardImg style={{width: "250px", height: "200px"}} variant="top" src="https://5.imimg.com/data5/FR/AI/MY-18248335/e-commerce-website-500x500.png" />
//   <CardBody>
//     <CardTitle><b>Eommerce Website</b></CardTitle>
//     <CardText>
//     Sell and market your products to customers on the move. With an advanced, built-in mobile editor, your online store looks great on any device—desktop, tablet and mobile.


//     </CardText>
//     <Button variant="primary">Open in New Tab</Button>
//   </CardBody>
// </Card>
 



//       </Container>       
//     </div>






//             </>
//         )
//     }
// }



















































// import React, { Component } from 'react'
// import Card from 'react-bootstrap/Card'
// import CardGroup  from 'react-bootstrap/Card'
// // import Row from 'reactstrap'

// export default class LocalClint extends Component {
//     render() {
//         return (
//             <>
//             <div className="col-md-3">
//             <h1 style={{color:"green" , rotate:"revert", motion:"10%"}}>Domestic Clints</h1>
         
//                 <CardGroup  >
//   <Card style={{border:"2px solid black", margin:"30px", height:"400px", width:"300px" , display:"float"}}>
//     <Card.Img  style={{width:"100px", height:"100px", borderRadius:"50%"}} variant="top" src="images/pankajsali.jpg" />
//     <Card.Body>
//       <Card.Title>Pankaj Sali ~Senior System Engineer @ Infosys</Card.Title>
//       <Card.Text>
//       It has been a pleasure working with h1 Developer. I appreciate your dedication to the projects that you and your team are on. It is nice from the customers stand point to be able to get in touch with you  and you  always made yourselves available. You did a great job for us and I would recommend you to anyone.
//       </Card.Text>
//     </Card.Body>
//     <Card.Footer>
//       <small className="text-muted">Last updated 3 mins ago</small>
//     </Card.Footer>
//   </Card>
//   <Card style={{border:"2px solid black", margin:"30px", height:"400px", width:"300px" , display:"float"}}>
//     <Card.Img  style={{width:"100px", height:"100px", borderRadius:"50%"}} variant="top" src="images/tejalgharte.JPG" />
//     <Card.Body>
//       <Card.Title>Tejal Gharte ~ Software Engineer @ Atos - Syntel</Card.Title>
//       <Card.Text>
//       h1 Developer helped me bring my art and craft (side business) website into the 21st century. With their development expertise and I can now keep my website up-to-date myself without relying on an expensive designer.  I immediately saw an improvement in my search engine results and no longer shy away from referring leads to research my site.
//       </Card.Text>
//     </Card.Body>
//     <Card.Footer>
//       <small className="text-muted">Last updated 45 mins ago</small>
//     </Card.Footer>
//   </Card>
//   <Card style={{border:"2px solid black" , margin:"30px", height:"430px", width:"300px" , display:"float"}}>
//     <Card.Img  style={{width:"100px", height:"100px", borderRadius:"50%"}} variant="top" src="images/bipasapatra.JPG" />
//     <Card.Body>
//       <Card.Title>Bipasa Patra ~ HOD @ G.H.Raisoni College of Engineering </Card.Title>
//       <Card.Text>
//       We have been very happy with our paper publication ! It looks professional and very easy to navigate. Our experience with the paper publication with Guruprasad has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our paper  is doing. I would recommend Guruprasad to anyone looking for paper publication !
//       </Card.Text>
//     </Card.Body>
//     <Card.Footer>
//       <small className="text-muted">Last updated 55 mins ago</small>
//     </Card.Footer>
//   </Card>
// </CardGroup>
// </div>
//             </>
//         )
//     }
// }



// https://thriveagency.com/about/web-design-reviews/
