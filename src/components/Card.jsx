export default function Card({ card, children }) {
  const { title, paragraph, link } = card;
  return (
    <div className="card" style={{ width: "18rem" }}>
      {children}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{paragraph}</p>
        <a href={link.href} className="btn btn-primary">
          {link.text}
        </a>
      </div>
    </div>
  );
}
