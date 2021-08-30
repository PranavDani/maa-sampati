import "../Home.css";

interface CardProps {
  title: string;
  img: string;
}

const Card = (props: CardProps) => {
  return (
    <div className="category-card">
      <img
        className="category-img"
        src={`${process.env.PUBLIC_URL}/assets/categories/${props.img}`}
        alt=""
      />
      <div className="overlay"></div>
      <h4>{props.title}</h4>
    </div>
  );
};

export default Card;
