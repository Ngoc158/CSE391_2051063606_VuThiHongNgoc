import { Button } from "react-bootstrap";
import React from "react";
import { Card, CardGroup } from "react-bootstrap";

import "./index.css";

const footerArr = [
  {
    title: "Our Address",
    text: (
      <div>
        <div>249 Bueno Porto Building, </div>
        <div>2rd floor </div>
        <div>La Vista Street, Italy </div>
      </div>
    ),
    btnContent: <Button>VIEW ON MAP</Button>,
  },
  {
    title: "",
    text: (
      <div>
        <div>Week Days 09:00 AM - 21:00 PM</div>
        <div>Saturday 12:00 AM - 00:00 AM</div>
        <div>Sunday 11:00 AM - 22:00 PM </div>
      </div>
    ),
  },
  {
    title: "Contact Us",
    text: (
      <div>
        <div>Email: enquries@dbento.com</div>
        <div>Phone: 04 987654321</div>
      </div>
    ),
    btnContent: <Button>SEND MESSAGE</Button>,
  },
];
const PageFooter = () => {
  return (
    <div>
      <div className="footer">
        <div className="title-0">
          <div>Make</div>
          <div> Reservation</div>
        </div>
        <CardGroup>
          {footerArr.map((item, index) => (
            <Card>
              <Card.Body className="footer-card">
                <Card.Title className="footer-title">{item.title}</Card.Title>
                <Card.Text className="footer-text">{item.text}</Card.Text>
                <div className="d-flex justify-content-center  btn">
                  {item.btnContent}
                </div>
              </Card.Body>
            </Card>
          ))}
        </CardGroup>
        <div className="d-flex justify-content-center  ">
          <Button>Book Now</Button>
        </div>
        <div className="subfooter">
          <div className="sub">Copyright©2021 D'bento All Rights Reserved.</div>
        </div>
      </div>
    </div>
  );
};

export default PageFooter;
