import { Button, Card, CardGroup, Carousel, Tab, Tabs } from "react-bootstrap";
import React from "react";

import "./index.css";
import Home1 from "../../assets/home-1.jpg";
import Home2 from "../../assets/home-2.jpg";
import Home3 from "../../assets/home-3.jpg";
import Card1 from "../../assets/card-1.jpg";
import Card2 from "../../assets/card-2.jpg";
import Card3 from "../../assets/card-3.jpg";
import Menu1 from "../../assets/menu1.jpg";
import Menu2 from "../../assets/menu2.jpg";
import Menu3 from "../../assets/menu3.jpg";
import Menu4 from "../../assets/menu4.jpg";
import Menu5 from "../../assets/menu5.jpg";
import Content1 from "../../assets/content1.jpg";
import Content2 from "../../assets/content2.jpg";
import Content3 from "../../assets/content3.jpg";
import Card4 from "../../assets/card-4.jpg";
import Card5 from "../../assets/card-5.jpg";
import Card6 from "../../assets/card-6.jpg";

const homeArr = [
  {
    name: "We Serve Quality Food",
    img: Home1,
  },
  {
    name: "Hot And Ready To Serve",
    img: Home2,
  },
  {
    name: "The Best Tasting Experience!",
    img: Home3,
  },
];

const cardArr = [
  {
    name: " Daily New Fresh Menus",
    title:
      "D'bento help you treat yourself with a different meal everyday, thanks to our daily changing menus and our awesomew creative chefs!",
    img: Card1,
  },
  {
    name: "Fresh Ingredient, Tasty Meals",
    title:
      "Who said healthy food can't also be delicious?D'bento creative chefs use fresh and seasonal ingredients to make affordable.",
    img: Card2,
  },
  {
    name: " Daily New Fresh Menus",
    title:
      "D'bento have offered a team of culinary professionals that make delectable dishes at memorable events for both private client.",
    img: Card3,
  },
];

const foodmenuArr = [
  {
    price: "$35.64",
    title: "Crispy Shrimp and Grits",
    desc: "Beer battered jumbo shrimp served with chispy cheddar grit polenta, corn and tomato salsa and old bay remoulade.",
  },
  {
    price: "$25.75",
    title: "Pizza Grilled Quesadilla",
    desc: "A pizza grilled with quesadilla, fresh cilanto, red cabage, tomato sauce, with mozarella. Hot & ready to serve.",
  },
  {
    price: "$28.35",
    title: "Chesapeake Crab and Artichoke Dip",
    desc: "Cream chesapeake crab dip and artichoke, baked and topped with cheddar cheese served crusty bread for diving.",
  },
];

const menuArr = [
  {
    eventKey: "All",
    title: "All",
    img: Menu1,
  },
  {
    eventKey: "Lunch",
    title: "Lunch",
    img: Menu2,
  },
  {
    eventKey: "Dinner",
    title: "Dinner",
    img: Menu3,
  },
  {
    eventKey: "Dessert",
    title: "Dessert",
    img: Menu4,
  },
  {
    eventKey: "Main",
    title: "Main",
    img: Menu5,
  },
];

const contentArr = [
  {
    text: (
      <div>
        <div>"The family's prices, the great</div>
        <div>atmosphere are only</div>
        <div>topped by the delicious food.</div>
        <div>Keep up the great work."</div>
      </div>
    ),
    name: "Emilia Riska",
    img: Content1,
  },
  {
    text: (
      <div>
        <div>"We've been D'bento many times</div>
        <div>over the years. We know what</div>
        <div>to expect great food awesome</div>
        <div>price of food."</div>
      </div>
    ),
    name: " Michelle Smith",
    img: Content2,
  },
  {
    text: (
      <div>
        <div>"D'bento is simply the best.</div>
        <div>Great food, nice atmosphere</div>
        <div>and very reasonable prices. It</div>
        <div>just doesn't get any better."</div>
      </div>
    ),
    name: "Robert Davis",
    img: Content3,
  },
];

const cardmenuArr = [
  {
    name: "Dinner Party for a Chef!",
    title: (
      <div>
        <div>I began my career as a </div>
        <div>recipe tester for </div>
        <div>cookbooks, and I did that </div>
        <div>work for two years. I</div>
        <div>loved cookbooks and </div>
        <div>loved browsing for them at...</div>
      </div>
    ),
    img: Card4,
  },
  {
    name: "Great Taste for Breakfast!",
    title: (
      <div>
        <div>I began my career as a </div>
        <div>recipe tester for </div>
        <div>cookbooks, and I did that </div>
        <div>work for two years. I</div>
        <div>loved cookbooks and </div>
        <div>loved browsing for them at...</div>
      </div>
    ),
    img: Card5,
  },
  {
    name: "Delicious Fish with Black Sauce",
    title: (
      <div>
        <div>I began my career as a </div>
        <div>recipe tester for </div>
        <div>cookbooks, and I did that </div>
        <div>work for two years. I</div>
        <div>loved cookbooks and </div>
        <div>loved browsing for them at...</div>
      </div>
    ),
    img: Card6,
  },
];

const Home = () => {
  return (
    <div>
      {/* Carousel */}
      <Carousel className="top-menu-carousel">
        {homeArr.map((item, index) => (
          <Carousel.Item>
            <img className="d-block w-100" src={item.img} alt="" />
            <Carousel.Caption>
              <h3>{item.name}</h3>
              <p>
                <div>
                  D’BENTO is a restaurant, bar and coffee roasterylocated on
                  Italy. We
                </div>
                <div>
                  have awesome recipes and the most talented chefs in tow
                </div>
                <div className="d-flex justify-content-center btn-detail">
                  <Button>More Detail</Button>
                </div>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="title">Welcome to D’bento</div>
      <p className="title2">
        <div>
          D'bento was the first restaurant to open in Italy, the restaurant was
          designed with
        </div>
        <div>
          the history in mind we have created a soft industrial dining room,
          combined with an open
        </div>
        <div>kitchen, coffee take out bar and on site coffee roastery</div>
      </p>

      {/* card */}
      <CardGroup>
        {cardArr.map((item, index) => (
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
      <div className="section">
        <div className="title3">Check Our Daily Specials</div>
        <div>
          {foodmenuArr.map((item, index) => (
            <div className="food-menu-wrapper">
              <div className="food-price">{item.price} </div>
              <div className="food-title">{item.title} </div>
              <div className="food-desc">{item.desc} </div>
            </div>
          ))}
        </div>
      </div>

      <div className="title">Discover Our Menu</div>
      <p className="title2">
        <div>
          Everyone has taste, even if they don't realize it. Even if you're not
          a great chef, there's
        </div>
        <div>
          nothing to stop you understanding the difference between what tastes
          good and what
        </div>
        <div>doesn't.</div>
      </p>

      {/*Menu tabs */}
      <Tabs
        defaultActiveKey="All"
        transition={false}
        id="noanim-tab-example"
        className="mb-3 tabs-card"
      >
        {menuArr.map((item, index) => (
          <Tab
            eventKey={item.eventKey}
            title={item.title}
            className="menu-tab-item"
            key={index}
          >
            <img src={item.img} alt="tab" />
            <div className="d-flex justify-content-center">
              <Button className="btn-dicover">
                <div>Discover more</div>
              </Button>
            </div>
          </Tab>
        ))}
      </Tabs>

      {/*Content*/}
      <div className="section">
        <div className="title3">Our Guestbook</div>
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

      {/**/}
      <div className="title"> Our News & Events</div>
      <p className="title2">
        <div>
          Follow our lates news updates to know about our offers, recipes and
          events. One cannot
        </div>
        <div>think well, love well, sleep well, if one has not dined well.</div>
      </p>

      {/* */}
      <CardGroup>
        {cardmenuArr.map((item, index) => (
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

export default Home;
