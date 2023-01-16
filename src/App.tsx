import "./App.css";
import React from "react";
import { Home } from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./components/Detail/Detail";

// En esta aplicacion tenemos conceptos de typescript

// Uso de las {props} en HOME Y LIST
// Uso de los eventos en typesctpt en FORM


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />;
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
