// import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./Home.css";
import Card from "../components/Card";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Snackbar } from "@material-ui/core";
import { onContactUs } from "../Apis";

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
        <Card title="INDIAN MARBLE" img="indian-marble.jpg" />
        <Card title="IMPORTED MARBLE" img="imported-marble.jpg" />
        <Card title="INDIAN GRANITE" img="indian-granite.jpg" />
        <Card title="IMPORTED GRANITE" img="imported-granite.jpg" />
        <Card title="STONE" img="stone.jpg" />
        <Card title="COMPOSITE" img="composite.jpg" />
      </section>

      <h1>CONTACT US</h1>
      <section className="contact">
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="">Name</label>
          <input type="text" name="uname" placeholder="Your Name" required />
          <div className="group">
            <div className="user-input">
              <label htmlFor="">Phone number</label>
              <input
                type="text"
                placeholder="Your Phone no"
                name="phone"
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
