import React, { useState, useEffect } from "react";
import PersonnelForm from "./PersonnelForm";
import PersonnelList from "./PersonnelList";
import Header from "../Utility/Header";
import Footer from "../Utility/Footer";
import Sidebar from "../Utility/Sidebar";

function Personnel() {
    const [returnedPersonnels, setReturnedPersonnels] = useState([]);

    const getPersonnels = async () => {
        const personnels = await fetch('/getPersonnels', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        })
        .then(res => res.json());
        setReturnedPersonnels(personnels.recordsets[0]);
    }

  return(
    <div className="personnels">
    <Sidebar />
    <Header />
    <div className="order-management" onClick={getPersonnels}>
        <h2></h2>
        <div className="order-form-container">
        <PersonnelForm/>
        </div>
        <div className="order-list-containe">
        <PersonnelList returnedPersonnel={returnedPersonnels} />
        </div>
    </div>
    <Footer />
    </div>
  )
}

export default Personnel;