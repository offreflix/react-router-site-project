/* React Import */
import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

/* CSS Import */
import './App.css';

/* Components Import*/
import Header from './components/Header';
import Home from './components/Newsletter';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
