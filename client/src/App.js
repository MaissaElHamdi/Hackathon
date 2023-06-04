import React from 'react';
import Navbar from "./components/Navbar";
import Home from './pages/Home/Home';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
    <Navbar/>
    <Home/>
    <Footer />
  </React.Fragment>
  );
}

export default App;
