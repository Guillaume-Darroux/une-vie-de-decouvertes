import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import News from '../../components/News/News';
//import Nav from '../Nav/Nav';
import Summary from '../../components/Summary/Summary';
import Title from '../../components/Title/Title';
import About from '../About/About';
import './styles.scss';

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Title />
              <Summary />
              <News />
              <Contact />
            </>
          }
        />
        <Route path="/about" element={<About />}></Route>
{/*         <Route path="/blog" element={<Blog />}></Route>
        <Route path="/prices" element={<Prices />}></Route>
        <Route path="/booking" element={<Booking />}></Route> */}
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default React.memo(App);
