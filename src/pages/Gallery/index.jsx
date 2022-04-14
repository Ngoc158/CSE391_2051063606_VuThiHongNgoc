import { Tabs, Tab } from "react-bootstrap";
import React from "react";

import "./index.css";
import Gallery1 from "../../assets/gallery1.jpg";
import Gallery2 from "../../assets/gallery2.jpg";
import Gallery3 from "../../assets/gallery3.jpg";
import Gallery4 from "../../assets/gallery4.jpg";
import Gallery5 from "../../assets/gallery5.jpg";
import MenuIcon1 from "../../assets/menu-icon-1.png";
import MenuIcon2 from "../../assets/menu-icon-2.png";

const galleryArr = [
  {
    eventKey: "All",
    title: "All",
    img: Gallery1,
  },
  {
    eventKey: "Lunch",
    title: "Lunch",
    img: Gallery2,
  },
  {
    eventKey: "Dinner",
    title: "Dinner",
    img: Gallery3,
  },
  {
    eventKey: "Dessert",
    title: "Dessert",
    img: Gallery4,
  },
  {
    eventKey: "Main",
    title: "Main",
    img: Gallery5,
  },
];

const Gallery = () => {
  return (
    <div>
      <div className="gallery-first">
        <div className="gallery-icon-1">
          <img src={MenuIcon1} alt="icon" />
        </div>
        <div className="title3">GALLERY</div>
        <div className="title1">Home / Gallery</div>
      </div>
      <div>
        <div className="title">Discover Our menu</div>
        <div className="gallery-icon-2">
          <img src={MenuIcon2} alt="icon" />
        </div>
        <div className="title2">
          Everyone has taste, even if they don't realize it. Even if you're not
          a great chef, there's nothing to stop you understanding the difference
          between what taste good and what doesn't.
        </div>
      </div>
      {/*Gallery tabs */}
      <Tabs
        defaultActiveKey="All"
        transition={false}
        id="noanim-tab-example"
        className="mb-3 tabs-card"
      >
        {galleryArr.map((item, index) => (
          <Tab
            eventKey={item.eventKey}
            title={item.title}
            className="gallery-tab-item-1"
            key={index}
          >
            <img src={item.img} alt="tab" />
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default Gallery;
