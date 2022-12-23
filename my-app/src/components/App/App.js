import React from 'react';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import News from '../News/News';
//import Nav from '../Nav/Nav';
import Summary from '../Summary/Summary';
import Title from '../Title/Title';
import './styles.scss';

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <Title />
      <Summary />
      <News />
      <Contact />
      <Footer />
    </div>
  );
}

export default React.memo(App);
