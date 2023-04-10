import React, { useState, useEffect } from "react";
import Home from "./components/Home/Home";
import Restaurants from "./components/Restaurants/Restaurants";
import Orders from "./components/Orders/Orders";
import Customers from "./components/Customers/Customers";
import Personnels from "./components/Personnel/Personnels";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {

  // const getData = async(url) => {
  //   const newData = await fetch(url, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Accept": "application/json"
  //     },
  //   })
  //   .then(res => res.json());
  //   console.log(newData);
  // }

  // getData('/api');
  return (
    <div class="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/personnels" element={<Personnels />} />
          <Route path="/customers" element={<Customers />} />
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
