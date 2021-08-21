import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./Home.css";
import Card from "./components/card";

export interface HomeProps {

}

const content = [
    {
        title: "Vulputate Mollis Ultricies Fermentum Parturient",
        description:
            "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
        button: "Read More",
        image: "https://i.imgur.com/ZXBtVw7.jpg",
    },
    {
        title: "Tortor Dapibus Commodo Aenean Quam",
        description:
            "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
        button: "Discover",
        image: "https://i.imgur.com/DCdBXcq.jpg",
    },
    {
        title: "Phasellus volutpat metus",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
        button: "Buy now",
        image: "https://i.imgur.com/DvmN8Hx.jpg",
    }
];

const Home: React.FunctionComponent<HomeProps> = () => {
    return (
        <div>
            <Slider>
                {content.map((item, index) => (
                    <div
                        key={index}
                        className="slider-content"
                        style={{ background: `url('${item.image}') no-repeat center center` }}
                    >
                        {/* <div className="inner">
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                            <button>{item.button}</button>
                        </div> */}
                    </div>
                ))}
            </Slider>
            <div className="quote">
                Marble is forever.
            </div>

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
                    <textarea rows={5} name="" id="" cols={30} placeholder="Write your requirement"></textarea>

                    <button>
                        Submit
                    </button>

                </form>
            </section>
        </div >
    );
}

export default Home;

