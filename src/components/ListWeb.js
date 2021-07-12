import React, { Component } from 'react'
import  Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import './Footer.css';
// import Footer from '../Footer';
// import Footer from './components/pages/Footer'

export default class ListWeb extends Component {
    render() {
        return (
            <div>
              <div style={{color:"green"}}>
                <h1>Welcome to service page</h1>
                </div>
                <div style={{color:"red"}}><h2>Our company works in following businesses</h2></div>
<div>
                <Card style={{ width: '18rem', border: "1px solid black", padding:"10px", margin:"20px" }}>
  <Card.Img style={{width: "250px", height: "200px"}} variant="top" src="https://5.imimg.com/data5/FR/AI/MY-18248335/e-commerce-website-500x500.png" />
  <Card.Body>
    <Card.Title><b>Eommerce Website</b></Card.Title>
    <Card.Text>
    Sell and market your products to customers on the move. With an advanced, built-in mobile editor, your online store looks great on any device—desktop, tablet and mobile.


    </Card.Text>
    <Button variant="primary">Open in New Tab</Button>
  </Card.Body>
</Card>
</div>
            <div>
                <Card style={{ width: '18rem', border: "1px solid black", padding:"10px", margin:"20px" }}>
  <Card.Img style={{width: "250px", height: "200px"}} variant="top" src="https://cdn.dribbble.com/users/1728196/screenshots/15038675/media/5709ebacba012f549bb09e61dc34a6a5.png?compress=1&resize=400x300" />
  <Card.Body>
    <Card.Title><b>Hotel Website</b></Card.Title>
    <Card.Text>
    hotel website is to own your bookings and avoid paying steep commissions to OTAs. Hotel website features really do vary. Flashy animations and trendy templates might seem fun at first but will do very little to help your property get bookings.

    </Card.Text>
    <Button variant="primary">Open in New Tab</Button>
  </Card.Body>
</Card>


            </div>
            <div>
                <Card style={{ width: '18rem', border: "1px solid black", padding:"10px", margin:"20px" }}>
  <Card.Img style={{width: "250px", height: "200px"}} variant="top" src="https://athemes.com/wp-content/uploads/magplus-magazine-wordpress-theme.jpg" />
  <Card.Body>
    <Card.Title><b>Magazine Website</b></Card.Title>
    <Card.Text>
    An online magazine shares some features with a blog and also with online newspapers, but can usually be distinguished by its approach to editorial control.

    </Card.Text>
    <Button variant="primary">Open in New Tab</Button>
  </Card.Body>
</Card>


            </div>
            <div>
                <Card style={{ width: '18rem', border: "1px solid black", padding:"10px", margin:"20px" }}>
  <Card.Img style={{width: "250px", height: "200px"}} variant="top" src="https://cdn.dribbble.com/users/2443329/screenshots/9177342/media/93a705c315a223b059137b30f1f20ebd.jpg?compress=1&resize=400x300" />
  <Card.Body>
    <Card.Title><b>Portfolio Website</b></Card.Title>
    <Card.Text>
    At its most basic form, a portfolio website provides professional information about an individual or a company and presents a showcase of their work. ... To supply site visitors with information about the individual or company. To showcase work.

    </Card.Text>
    <Button variant="primary">Open in New Tab</Button>
  </Card.Body>
</Card>


            </div>

            <div>
                <Card style={{ width: '18rem', border: "1px solid black", padding:"10px", margin:"20px" }}>
  <Card.Img style={{width: "250px", height: "200px"}} variant="top" src="https://www.agastiyarzones.com/image/Journal_Publication.png" />
  <Card.Body>
    <Card.Title><b>Paper Publication</b></Card.Title>
    <Card.Text>
    We are here to help you in publishing paper with complete support of plagiarism cheking till the end 
    </Card.Text>
    <Button variant="primary">Open in New Tab</Button>
  </Card.Body>
</Card>



            </div>



            </div>
        )
    }
}
