import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Benefits from "./sections/Benefits";
import Products from "./sections/Products";
import Process from "./sections/Process";
import CustomStore from "./sections/CustomStore";
import Trust from "./sections/Trust";
import FinalCTA from "./sections/FinalCTA";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main id="home">
        <Hero />
        <Benefits />
        <Products />
        <Process />
        <CustomStore />
        <Trust />
        <FinalCTA />
      </main>
    </div>
  );
}

export default App;