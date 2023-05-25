function Home() {
  return (
    <div>
      <header className="w-full h-16 bg-emerald-400">
        <p className="text-blue-600">
          Olá Toogle. tudo bem com vcs
        </p>
      </header>
      <main className="w-full">
        <div className="bg-emerald-400 w-32">
          <button
            id="toogle"
            type="button"
            className="slider"
          >
            Olá
          </button>
        </div>
      </main>

    </div>
  );
}

export default Home;
