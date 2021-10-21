// import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./Home.css";
import Card from "../components/Card";
import React, { useRef } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Snackbar } from "@material-ui/core";
import { onContactUs, getData, store } from "../Apis";
import useFetch from "../useFetch";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Label } from "@material-ui/icons";
import { useHistory } from 'react-router-dom';
import Favicon from 'react-favicon'
import MapSection from '../components/Map' // import the map here

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


function scrollContact() {
  console.log("scroll")
}

function Home() {
  const [open, setOpen] = React.useState(false);
  const location = {
    // address: 'Maa Sampati marble & granites',
    lat: 19.096500,
    lng: 72.853350,
  }
  const myRef: any = useRef(null)
  const executeScroll = () => myRef.current.scrollIntoView()

  const showSnackBar = () => {
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };


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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const response = await onContactUs(
      form.uname.value,
      form.phone.value,
      form.email.value,
      form.message.value
    );

    if (response.id) {
      event.target.reset();
      showSnackBar();
    }
  };


  return (
    <div>
      <Carousel className="carousel">
        {content.map((item, index) => (
          <Item key={index} title={item.title} image={item.image} />
        ))}
      </Carousel>
      <div className="transition-shade"></div>

      <h1>CATEGORIES</h1>
      <section className="gridview">
        <Link to="/products/?type=marble&origin=indian">
          <Card
            title="INDIAN MARBLE"
            img={`${process.env.PUBLIC_URL}/assets/categories/indian-marble.jpg`}
          />
        </Link>
        <Link to="/products/?type=marble&origin=imported">
          <Card
            title="IMPORTED MARBLE"
            img={`${process.env.PUBLIC_URL}/assets/categories/imported-marble.jpg`}
          />
        </Link>
        <Link to="/products/?type=granite&origin=indian">
          <Card
            title="INDIAN GRANITE"
            img={`${process.env.PUBLIC_URL}/assets/categories/indian-granite.jpg`}
          />
        </Link>
        <Link to="/products/?type=granite&origin=imported">
          <Card
            title="IMPORTED GRANITE"
            img={`${process.env.PUBLIC_URL}/assets/categories/imported-granite.jpg`}
          />
        </Link>
        <Link to="/products/?type=stone&origin=indian">
          <Card
            title="STONE"
            img={`${process.env.PUBLIC_URL}/assets/categories/stone.jpg`}
          />
        </Link>
        <Link to="/products/?type=composite&origin=">
          <Card
            title="COMPOSITE"
            img={`${process.env.PUBLIC_URL}/assets/categories/composite.jpg`}
          />
        </Link>
      </section>

      <h1>CONTACT US</h1>
      <div className="box">
        <div ref={myRef} className="contact">
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="uname"
              pattern="^[a-zA-Z ]*$"
              placeholder="Your Name"
              required
            />
            <div className="group">
              <div className="user-input">
                <label htmlFor="">Phone number</label>
                <input
                  type="text"
                  placeholder="Your Phone no"
                  name="phone"
                  pattern="^[0-9]{10}$"
                  required
                />
              </div>
              <div style={{ width: "10px" }}></div>
              <div className="user-input">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  placeholder="Your Email"
                  name="email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  required
                />
              </div>
            </div>
            <label htmlFor="">Message</label>
            <textarea
              rows={5}
              name="message"
              id=""
              cols={30}
              placeholder="Write your requirement"
              required
            ></textarea>

            <input type="submit" value="Submit" />
          </form>
        </div>
        <div className="info">
          <section>
            <i className="fas fa-map-marker-alt"></i>
            <label>    Dr. Rajendra Prasad Nagar, Navpada, Vile Parle East, Mumbai, Maharashtra 400047</label>
          </section>

          <a href="tel:9321028200">
            <i className="fas fa-phone-square-alt">  9321028200</i>

          </a>

          <a href="mailto:maasampati.mum@gmail.com">
            <i className="fas fa-envelope-open-text"></i>
            <label>    maasampati.mum@gmail.com</label>
          </a>

          <a href="https://wa.me/919321028200"><i className="fab fa-whatsapp-square"></i>
          </a>
        </div>
      </div>


      <MapSection location={location} zoomLevel={17} /> {/* include it here */}

      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message="You will soon receive our response"
      />
    </div>
  );
}

export { Home, scrollContact };
