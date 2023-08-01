import React from 'react';
import './App.css';
import Sidebar from "./components/modules/Sidebar"
import { Header } from "./components/modules/Header"
import { Footer } from "./components/modules/Footer"

export const App = () => {

  return (
    <>
      <Header />
      <Sidebar />
      <Footer />
    </>
  );
};
