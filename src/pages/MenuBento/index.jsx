import { Card, Carousel, Tabs, Tab, Button, CardGroup } from "react-bootstrap";
import React from "react";

import "./index.css";
import MenuStyle2 from "../../assets/menu-style-img-2.jpg";
import MenuStyle3 from "../../assets/menu-style-img-3.png";
import MenuStyle4 from "../../assets/menu-style-img-4.png";
import Content1 from "../../assets/content1.jpg";
import Content2 from "../../assets/content2.jpg";
import Content3 from "../../assets/content3.jpg";
import Card4 from "../../assets/card-4.jpg";
import Card5 from "../../assets/card-5.jpg";
import Card6 from "../../assets/card-6.jpg";
import MenuIcon1 from "../../assets/menu-icon-1.png";
import MenuIcon2 from "../../assets/menu-icon-2.png";

const menuStyleArr = [
  {
    eventKey: "Lunch",
    title: "Lunch",
    img: MenuStyle2,
  },
  {
    eventKey: "Dinner",
    title: "Dinner",
    img: MenuStyle3,
  },
  {
    eventKey: "Dessert",
    title: "Dessert",
    img: MenuStyle4,
  },
  {
    eventKey: "Main",
    title: "Main",
    img: MenuStyle2,
  },
];

const contentArr = [
  {
    text: (
      <div className="content">
        "We've been D'bento many times over the years. We know what to expect
        great food awesome price of food."
      </div>
    ),
    name: "Michelle Smith",
    img: Content1,
  },
  {
    text: (
      <div className="content">
        "The family's prices, the great atmosphere are only topped by the
        delicious food. Keep up the great word."
      </div>
    ),
    name: "Emilia Riska",
    img: Content2,
  },
  {
    text: (
      <div className="content">
        "D'bento is simply the best. Great food, nice atmosphere and very
        reasonable prices. It just doesn't get any better"
      </div>
    ),
    name: "Robert Davis",
    img: Content3,
  },
];

const cardMenuArr = [
  {
    name: <div className="card-event">Dinner Party for a Chef!</div>,
    title: (
      <div className="card-news">
        I began my career as a recipe tester for cookbooks, and I did that work
        for two years. I loved cookbooks and loved browsing for them at...
      </div>
    ),
    img: Card4,
  },
  {
    name: <div className="card-event">Great Taste for Breakfast!</div>,
    title: (
      <div className="card-news">
        I began my career as a recipe tester for cookbooks, and I did that work
        for two years. I loved cookbooks and loved browsing for them at...
      </div>
    ),
    img: Card5,
  },
  {
    name: <div className="card-event">Delicious Fish with Black Sauce</div>,
    title: (
      <div className="card-news">
        I began my career as a recipe tester for cookbooks, and I did that work
        for two years. I loved cookbooks and loved browsing for them at...
      </div>
    ),
    img: Card6,
  },
];

const MenuBento = () => {
  return (
    <div>
      <div className="menu-first">
        <div className="menu-icon-1">
          <img src={MenuIcon1} alt="icon" />
        </div>
        <div className="title3">MENU</div>
        <div className="title1">Home / Menu</div>
      </div>
      <div>
        <div className="title">Discover Our menu</div>
        <div className="menu-icon-2">
          <img src={MenuIcon2} alt="icon" />
        </div>
        <div className="title2">
          Everyone has taste, even if they don't realize it. Even if you're not
          a great chef, there's nothing to stop you understanding the difference
          between what taste good and what doesn't.
        </div>
      </div>

      {/*Menu tabs */}
      <Tabs
        defaultActiveKey="Lunch"
        transition={false}
        id="noanim-tab-example"
        className="mb-3 tabs-card"
      >
        {menuStyleArr.map((item, index) => (
          <Tab
            eventKey={item.eventKey}
            title={item.title}
            className="menu-tab-item-1"
            key={index}
          >
            <img src={item.img} alt="tab" />
          </Tab>
        ))}
      </Tabs>

      {/*Content*/}
      <div className="section-menu">
        <div className="title3">Our Guestbook</div>
        <div className="menu-icon-2">
          <img src={MenuIcon2} alt="icon" />
        </div>
        <Carousel className="avatar-menu-item">
          {contentArr.map((item, index) => (
            <Carousel.Item>
              <div className="d-flex justify-content-center">
                <p className="text-center">{item.text}</p>
              </div>
              <div className="avatar-menu-img d-flex justify-content-center flex-column align-items-center">
                <img src={item.img} alt="" />
                <div className="Name">{item.name}</div>
                <div className="customer">Customer</div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div className="title">Our New {"&"} Event</div>
      <div className="menu-icon-2">
        <img src={MenuIcon2} alt="icon" />
      </div>
      <div className="title2">
        Follow our lates news updates to know about our offers, recipes and
        events. One cannot think well, love well, sleep well, if one has not
        dined well.
      </div>

      {/* card */}
      <CardGroup>
        {cardMenuArr.map((item, index) => (
          <Card>
            <Card.Img
              className="card-img"
              variant="top"
              src={item.img}
              alt=""
            />
            <Card.Body>
              <div className="top-content">
                <Card.Title className="card-title">{item.name}</Card.Title>
                <Card.Text className="card-item">{item.title}</Card.Text>
              </div>

              <div className="d-flex justify-content-center btn-detail">
                <Button>View more</Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
    </div>
  );
};

export default MenuBento;
