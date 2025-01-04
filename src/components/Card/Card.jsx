import Button from "../Button/Button";

function Card({ imagePath, title, description, footer }) {
  return (
    <div className="card">
      <header className="h-1/2">
        <img src={imagePath} alt="Image" />
      </header>
      <main className="h-2/5">
        <div>
          <h1>{title}</h1>
        </div>
        <div>
          <p>{description}</p>
        </div>
      </main>

      <footer>
        <div>{footer}</div>
      </footer>
    </div>
  );
}

export default Card;
