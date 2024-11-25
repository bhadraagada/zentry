import About from "./components/about";
import Features from "./components/features";
import Hero from "./components/hero";
import Navbar from "./components/navbar";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <section className="z-0 min-h-screen bg-blue-500" />
    </main>
  );
};

export default App;
