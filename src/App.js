import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListProducts from './components/ListProducts';
import Header from './components/Header';
import Pictures from './components/Pictures';
import About from './components/About';
import Home from './components/Home';
import Terms from './components/Terms'
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="pictures" element={<Pictures />} />
          <Route path="about" element={<About />} />
          <Route path="terms-of-sale" element={<Terms />} />
          <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
