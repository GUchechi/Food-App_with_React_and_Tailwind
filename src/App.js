import "./App.css";
import Category from "./components/Category";
import Food from "./components/Food";
import Footer from "./components/Footer";
import HeadlineCards from "./components/HeadLineCards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Food />
      <Category />
      <Footer />
    </div>
  );
}

export default App;
