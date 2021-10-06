import "./Card.css";

interface CardProps {
  title: string;
  img: string;
}

const Card = (props: CardProps) => {
  return (
    <div className="gridview-card">
      <img src={props.img} alt="" />
      <div className="overlay"></div>
      <h4>{props.title}</h4>
    </div>
  );
};

export default Card;
