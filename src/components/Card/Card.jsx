function Card({ imagePath, title, description, footer }) {
  return (
    <div className="card">
      <header className="h-1/2">
        <img src={imagePath} alt={imagePath} className="h-full" />
      </header>
      <div className="px-2 h-1/2 flex flex-col justify-around">
        <main className="h-4/5">
          <div>
            <h3 className="my-5">{title}</h3>
          </div>
          <div>
            <p>{description}</p>
          </div>
        </main>

        <footer className="h-1/5">
          <div>{footer}</div>
        </footer>
      </div>
    </div>
  );
}

export default Card;
