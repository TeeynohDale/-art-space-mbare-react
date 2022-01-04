import React from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner ';
import Footer from './Components/Footer';
import SiteList from './Components/SiteList';
import ChildMuseum from './Components/ChildMuseum';
import Construction from './Components/Construction';
import Partners from './Components/Partners';
import ArtLovers from './Components/ArtLovers';
import AboutMbare from './Components/AboutMbare';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner />
      <AboutMbare/>
      <ArtLovers/>
      <Partners/>
      <Construction/>
      <ChildMuseum/>
      <SiteList/>
      <Footer/>

    </div>
  );
}

export default App;
