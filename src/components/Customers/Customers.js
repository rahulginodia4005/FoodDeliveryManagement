import React, {useEffect, useState} from "react";
import Sidebar from "../Utility/Sidebar";
import Header from "../Utility/Header";
import Footer from "../Utility/Footer";
import CustomersList from "./CustomersList";

function Customers() {
    const [customers, setCustomers] = useState({Name: '', Phone: '', EmailID: ''});
    const [returnedCustomers, setReturnedCustomers] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const form = Object.fromEntries(data.entries());
        setCustomers({
            Name: form.Name,
            Phone: form.Phone,
            EmailID: form.EmailID
        })

        const newCustomer = await fetch('/addCustomer',{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(customers),
        })
        .then(res => res.json());
        console.log("Customer created successfully", newCustomer);
    }

    const getCustomers = async () => {
        const RetCustomers = await fetch('/getCustomers', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        })
        .then(res => res.json());
        setReturnedCustomers(RetCustomers);
    }

    return(
        <>
            <div class="customers" onClick={getCustomers}>
                <Sidebar />
                <Header />
                <h2 style={{fontWeight: "bolder"}}>Customers</h2>
                <br></br>
                <br></br>
                <form onSubmit={handleSubmit}>
                    <input 
                    name="Name"
                    placeholder="Name"
                    ></input>
                    <input 
                    name="Phone"
                    placeholder="Phone"
                    ></input>
                    <input 
                    name="EmailID"
                    placeholder="EmailID"
                    ></input>
                    <button class="button" style={{"color" : "white"}} >Add Customer</button>
                </form>
                <br></br>
                <br></br>
                <h2 style={{"textAlign" : "center", fontWeight: "bold"}} class="font-extrabold">Customers List</h2>
                <br/>
                <CustomersList customers={returnedCustomers} />
            </div>
            <Footer />
        </>
    )
}

export default Customers;