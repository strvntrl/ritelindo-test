import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main id="home">
        <Hero />
        <section className="flex min-h-screen items-center justify-center px-6 pt-24">
          <div className="text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Ritelindo Retail Solution
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Paket Rak Minimarket
              <br />
              untuk Berbagai Bisnis
            </h1>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;