import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/Card'

export default class LocalClint extends Component {
    render() {
        return (
            <>
            <h1 style={{color:"green" , rotate:"revert", motion:"10%"}}>Domestic Clints</h1>
                <CardGroup  >
  <Card style={{border:"2px solid black", margin:"30px", height:"400px", width:"300px" , display:"float"}}>
    <Card.Img  style={{width:"100px", height:"100px", borderRadius:"50%"}} variant="top" src="images/pankajsali.jpg" />
    <Card.Body>
      <Card.Title>Pankaj Sali ~Senior System Engineer @ Infosys</Card.Title>
      <Card.Text>
      It has been a pleasure working with h1 Developer. I appreciate your dedication to the projects that you and your team are on. It is nice from the customers stand point to be able to get in touch with you  and you  always made yourselves available. You did a great job for us and I would recommend you to anyone.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card style={{border:"2px solid black", margin:"30px", height:"400px", width:"300px" , display:"float"}}>
    <Card.Img  style={{width:"100px", height:"100px", borderRadius:"50%"}} variant="top" src="images/tejalgharte.JPG" />
    <Card.Body>
      <Card.Title>Tejal Gharte ~ Software Engineer @ Atos - Syntel</Card.Title>
      <Card.Text>
      h1 Developer helped me bring my art and craft (side business) website into the 21st century. With their development expertise and I can now keep my website up-to-date myself without relying on an expensive designer.  I immediately saw an improvement in my search engine results and no longer shy away from referring leads to research my site.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 45 mins ago</small>
    </Card.Footer>
  </Card>
  <Card style={{border:"2px solid black" , margin:"30px", height:"430px", width:"300px" , display:"float"}}>
    <Card.Img  style={{width:"100px", height:"100px", borderRadius:"50%"}} variant="top" src="images/bipasapatra.JPG" />
    <Card.Body>
      <Card.Title>Bipasa Patra ~ HOD @ G.H.Raisoni College of Engineering </Card.Title>
      <Card.Text>
      We have been very happy with our paper publication ! It looks professional and very easy to navigate. Our experience with the paper publication with Guruprasad has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our paper  is doing. I would recommend Guruprasad to anyone looking for paper publication !
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 55 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
            </>
        )
    }
}



// https://thriveagency.com/about/web-design-reviews/