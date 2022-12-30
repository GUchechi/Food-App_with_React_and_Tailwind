import './App.css';
import HeadlineCards from './components/HeadLineCards';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Hero />
     <HeadlineCards />
    </div>
  );
}

export default App;
