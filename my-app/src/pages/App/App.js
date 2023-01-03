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
import Page404 from '../404/404';
import './styles.scss';
import Booking from '../Booking/Booking';

function App() {
  const osteo = "Qu'est-ce-que l'osteoreflexologie ?";
  const digestive = "Qu'est-ce-que l'on entend par troubles digestifs ?";
  const skin = "Explications sur les problèmes de peau.";
  const allergy = "Explications sur les allergies.";
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
                <h2 className="specialities">MES SPECIALITES</h2>
                <p className="specialities-names">
                  <div className="osteoreflexology" data-tooltip={osteo}>Ostéoreflexologie</div>
                  <div className="digestive" data-tooltip={digestive}>Troubles digestifs</div>
                  <div className="skin" data-tooltip={skin}>Problèmes de peau</div>
                  <div className="allergy" data-tooltip={allergy}>Allergies</div>
                </p>
              <News />
              <Contact />
            </>
          }
        />
        <Route path="/about" element={<About />}></Route>
        {/* <Route path="/blog" element={<Blog />}></Route>
        <Route path="/prices" element={<Prices />}></Route> */}
        <Route path="/booking" element={<Booking />}></Route>
        {/* <Route path="/#contact-form" element={<Contact />}></Route> */}
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default React.memo(App);
