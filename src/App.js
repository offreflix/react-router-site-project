import './App.css';

import Header from './components/Header';
import Home from './components/Newsletter';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      {/* <Services />
      <About />
      <Contact /> */}
    </div>
  );
}

export default App;
