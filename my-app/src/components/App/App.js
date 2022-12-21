import React from 'react';
import Navbar from '../Navbar/Navbar';
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
    </div>
  );
}

export default React.memo(App);
