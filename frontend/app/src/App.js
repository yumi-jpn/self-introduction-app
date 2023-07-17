import React from 'react';
import './App.css';
import ReactSidebar from "./components/modules/ReactSidebar"
import Header from "./components/modules/Header"
import Footer from "./components/modules/Footer"

const App = () => {

  return (
    <>
      <Header />
      <ReactSidebar />
      <Footer />
    </>
  );
};

export default App;