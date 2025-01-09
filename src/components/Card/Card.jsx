function Card({ imagePath, title, description, footer }) {
  return (
    <div className="card">
      <header className="h-2/6">
        <img src={imagePath} alt={imagePath} className="h-full w-full pointer-events-none" />
      </header>
      <div className="px-2 h-4/6 flex flex-col justify-around">
        <main className="h-4/5">
          <div>
            <h3 className="my-2">{title}</h3>
          </div>
          <div>
            <p className="text-sm">{description}</p>
          </div>
        </main>

        <footer className="h-1/5 flex flex-col justify-end pt-4 pb-2">
          <div>{footer}</div>
        </footer>
      </div>
    </div>
  );
}

export default Card;
