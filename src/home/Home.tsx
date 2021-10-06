// import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./Home.css";
import Card from "../components/Card";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Snackbar } from "@material-ui/core";
import { onContactUs, getData, store } from "../Apis";
import useFetch from "../useFetch";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
  const [open, setOpen] = React.useState(false);
  // const { data: product, isPending, error } = useFetch("some url");
  const [products, setProducts] = useState([]) as any;
  // const result = products.filter((product) => product.type());
  // console.log(products);
  // console.log(result);

  useEffect(() => {
    getData(store).then((data) => {
      // console.log(data);
      setProducts(data);
    });
  }, []);

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
        <Card
          title="INDIAN MARBLE"
          img={`${process.env.PUBLIC_URL}/assets/categories/indian-marble.jpg`}
        />
        <Card
          title="IMPORTED MARBLE"
          img={`${process.env.PUBLIC_URL}/assets/categories/imported-marble.jpg`}
        />
        <Card
          title="INDIAN GRANITE"
          img={`${process.env.PUBLIC_URL}/assets/categories/indian-granite.jpg`}
        />
        <Card
          title="IMPORTED GRANITE"
          img={`${process.env.PUBLIC_URL}/assets/categories/imported-granite.jpg`}
        />
        <Card
          title="STONE"
          img={`${process.env.PUBLIC_URL}/assets/categories/stone.jpg`}
        />
        <Link to="/products/?type=composite&origin=all">
          <Card
            title="COMPOSITE"
            img={`${process.env.PUBLIC_URL}/assets/categories/composite.jpg`}
          />
        </Link>
      </section>

      <h1>CONTACT US</h1>
      <section className="contact">
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
      </section>

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

export default Home;
