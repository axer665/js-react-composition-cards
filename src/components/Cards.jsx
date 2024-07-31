import Card from "./Card";

export default function Cards(props) {
  // eslint-disable-next-line react/prop-types
  const { cards } = props;

  return (
    <>
      {/* eslint-disable-next-line react/prop-types */}
      {cards.map((item) => (
          // eslint-disable-next-line react/jsx-key
        <Card card={item}>
          {item.image ? (
            <img
              src={item.image.src}
              className="card-img-top"
              alt={item.image.alt}
            />
          ) : null}
        </Card>
      ))}
    </>
  );
}
