import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import { Router } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <BrowserRouter>
      <ToastContainer  autoClose={3000}/>
        <Header />
        <Router />
      </BrowserRouter>


    </>
  )
}

export default App;
