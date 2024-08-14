import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import MyWork from './Components/MyWork/MyWork';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga4';
import './App.css';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    ReactGA.initialize('G-6KFV4WN1JF');
  }, []);
  return (
    <>
      <Helmet>
        <title>Muhammed Rafi Nellikuzhy Portfolio</title>
        <meta name="description" content="Muhammed Rafi Nellikuzhy Portfolio" />
        <meta name="keywords" content="Muhammed Rafi Nellikuzhy Portfolio" />
      </Helmet>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <MyWork />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
