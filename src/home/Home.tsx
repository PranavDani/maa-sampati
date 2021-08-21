// import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./Home.css";
import Card from "./components/card";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";

interface CarouselItemProps {
  title: string;
  image: string;
}

const content: Array<CarouselItemProps> = [
  {
    title: "More than 10 years of experience.",
    image: "Image_02.jpg",
  },
  {
    title: "Simplicity is the ultimate sophistication.",
    image: "Calacatta_01.jpg",
  },
  {
    title: "Every stone has a story.",
    image: "Image_03.jpg",
  },
];

function Home() {
  function Item(props: CarouselItemProps) {
    return (
      <Paper className="carousel-item">
        <img
          src={`${process.env.PUBLIC_URL}/assets/carousel/${props.image}`}
          alt="img"
        />
        <h2>{props.title}</h2>
        <button>Check it out!</button>
      </Paper>
    );
  }
  return (
    <div>
      <Carousel className="carousel">
        {content.map((item, index) => (
          <Item key={index} title={item.title} image={item.image} />
        ))}
      </Carousel>
      <div className="quote">Marble is forever.</div>

      <h1>CATEGORIES</h1>
      <section className="categories">
        <div className="internal">
          <Card title="INDIAN MARBLE" img="indian-marble.jpg" />
          <Card title="IMPORTED MARBLE" img="imported-marble.jpg" />
          <Card title="INDIAN GRANITE" img="indian-granite.jpg" />
        </div>
        <div className="internal">
          <Card title="IMPORTED GRANITE" img="imported-granite.jpg" />
          <Card title="STONE" img="stone.jpg" />
          <Card title="COMPOSITE" img="composite.jpg" />
        </div>
      </section>

      <h1>CONTACT US</h1>
      <section className="contact">
        <form action="">
          <label htmlFor="">Name</label>
          <input type="text" placeholder="Your Name" />
          <div className="group">
            <div className="user-input">
              <label htmlFor="">Phone number</label>
              <input type="text" placeholder="Your Phone no" />
            </div>
            <div style={{ width: "10px" }}></div>
            <div className="user-input">
              <label htmlFor="">Email</label>
              <input type="text" placeholder="Your Email" />
            </div>
          </div>

          <label htmlFor="">Message</label>
          <textarea
            rows={5}
            name=""
            id=""
            cols={30}
            placeholder="Write your requirement"
          ></textarea>

          <button>Submit</button>
        </form>
      </section>
    </div>
  );
}

export default Home;
