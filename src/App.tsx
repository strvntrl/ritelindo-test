import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

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

      <main>
        <Hero />
        <Benefits />
        <Products />
        <Process />
        <CustomStore />
        <Trust />
        <FinalCTA />
      </main>

      <Footer />

      <FloatingWhatsApp />

    </div>
  );
}

export default App;