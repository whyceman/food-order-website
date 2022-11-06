import './App.css';
import Category from './componenets/Category';
import Foods from './componenets/Foods';
import Headlinecards from './componenets/HeadlineCards';
import Hero from './componenets/Hero';
import Navbar from './componenets/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Headlinecards />
      <Foods />
      <Category />
    </div>
  );
}

export default App;
