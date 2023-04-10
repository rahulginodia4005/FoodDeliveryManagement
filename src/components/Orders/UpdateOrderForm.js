import React, {useEffect, useState} from "react";
import RenderPersonnels from "./RenderPersonnels";

function UpdateOrderForm() {
    const [updateOrder, setUpdateOrder] = useState({OrderID: 0, PersonnelID: 0, Status: 'Current'});
    const [personnels, setPersonnels] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const form = Object.fromEntries(data.entries());
        console.log(form);
        setUpdateOrder({
            OrderID: parseInt(form.OrderID),
            PersonnelID: parseInt(form.PersonnelID)
        })

        const updatedOrder = await fetch('/updateOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(updateOrder)
        })
        .then(res => res.json());
        console.log("Order updated successfully", updatedOrder);
    }

    const getPersonnels = async () => {
        const personnels1 = await fetch('/getPersonnels', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }            
        })
        .then(res => res.json());
        setPersonnels(personnels1.recordsets[0]);
    }

    useEffect(() => {
        getPersonnels();
    });

    return (
        <div className="order-form">
      <h2>Update Order</h2>
      <form method="POST" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>OrderID:</label>
          <input name="OrderID" />
        </div>
        <div className="form-group">
          <label>Update to:</label>
          <select name="Status">
            <option >Current</option>
          </select>
        </div>
        <div className="form-group">
          <label>Assign Personnel:</label>
          <select name="PersonnelID">
            <RenderPersonnels personnel={personnels}/>
          </select>
        </div>
        <button class="button" style={{"color" : "white"}} type="submit">Update Order</button>
      </form>
    </div>
    )
} 

export default UpdateOrderForm;