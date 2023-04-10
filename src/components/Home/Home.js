import React, { useState, useEffect } from "react";
import Header from "../Utility/Header";
import Footer from "../Utility/Footer";
import Sidebar from "../Utility/Sidebar";

function Home() {

  return(
    <>
      <div className="home">
      <Sidebar />
          <h1 style={{"padding": "0 2rem", "backgroundColor": "white", "fontSize" : "2.5rem", "width": "100%"}}>Welcome to our Food Delivery Management App</h1>
      </div>
      <Footer />
    </>
  )
}

export default Home;