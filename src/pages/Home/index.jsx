import { Button, Card, CardGroup, Carousel } from "react-bootstrap";
import React from "react";

import "./index.css";
import Home1 from "../../assets/home-1.jpg";
import Home2 from "../../assets/home-2.jpg";
import Home3 from "../../assets/home-3.jpg";
import Card1 from "../../assets/card-1.jpg";
import Card2 from "../../assets/card-2.jpg";
import Card3 from "../../assets/card-3.jpg";

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

const Home = () => {
  return (
    <div>
      <Carousel>
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
                <div>More Detail</div>
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
    </div>
  );
};

export default Home;
