import React, { useState } from "react";
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
    <>
        <div class="personnels">
        <Sidebar />
        <Header />
        <div className="order-management" onClick={getPersonnels}>
            <h2 style={{fontWeight: "bolder"}}>Personnels</h2>
            <br/>
            <div className="order-form-container">
            <PersonnelForm/>
            </div>
            <br/>
            <br/>
            <div className="order-list-containe">
            <h2 style={{"textAlign" : "center",fontWeight: "bolder"}} class="font-extrabold">Customers List</h2>
            <br/>
            <PersonnelList returnedPersonnel={returnedPersonnels} />
            </div>
        </div>
        </div>
        <Footer />
    </>
  )
}

export default Personnel;