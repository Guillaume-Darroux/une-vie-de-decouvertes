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
import Post from '../Post/Post';
import Blog from '../Blog/Blog';
import Specialities from '../../components/Specialities/Specialities';
import { Segment } from 'semantic-ui-react';

function App() {

  return (
    <div className="App">
      <Navbar /> 
      <Segment><Routes>
        <Route
          path="/"
          element={
            <>
              <Title />
              <Summary />
                <Specialities />
              <News />
              <Contact />
            </>
          }
        />
        <Route path="/about" element={<About />}></Route>
        <Route path="/posts/:id" element={<Post />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/booking" element={<Booking />}></Route>
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
      </Segment>
      <Footer />
    </div>
  );
}

export default React.memo(App);
