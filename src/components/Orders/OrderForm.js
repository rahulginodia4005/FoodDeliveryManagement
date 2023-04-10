import React, { useEffect, useState } from "react";
import RenderRestaurants from "./RenderRestaurants";
import RenderMenuItems from "./RenderMenuItems";

function OrderForm({restaurants}) {

  const [orderInput, setOrderInput] = useState({Name: "", Phone:"", Restaurant: "", Address: "", Value: 0, Status: "New", Details: ""});
  const [items, setItems] = useState([]);
  const getItems = async () => {
    const receivedItems = await fetch('/getMenuItems', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(orderInput),
    })
    .then(res => res.json());
    setItems(receivedItems.recordsets[0]);
  };

  const setRestaurant = (event) => {
    console.log('hellllllllfavsvsv');
    setOrderInput({
      ...orderInput,
      ["Restaurant"]: event.target.value
    })
    console.log(orderInput.Restaurant);
    getItems();
  };

  const handleSubmit = async (event) => {
    // console.log(orderInput);
    event.preventDefault();
    const data = new FormData(event.target);
    const form = Object.fromEntries(data.entries());
    setOrderInput({
      Name: form.Name,
      Phone: form.Phone,
      Restaurant: form.Restaurant,
      Address: form.Address,
      Value: parseInt(form.Value),
      Status: form.Status,
      Details: form.Details
    })
    console.log(orderInput);

    const newOrder = await fetch('/addOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({...orderInput})
    })
    .then(res => res.json());
    console.log("Order created successfully", newOrder);
  };

  // useEffect(() => {
  //   getItems();
  // });

  return (
    <div className="order-form">
      <h2>New Order</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            name="Name"
            // onChange={setInput}
            // onInput={setInput}
            // onChange={(event) => setName(event.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            name="Phone"
            // onInput={setInput}
          />
          <small>Format: 123-456-7890</small>
        </div>
        <div className="form-group">
          <label htmlFor="restaurant">Restaurant Name:</label>
          <select id="restaurant" name="Restaurant" onClick={setRestaurant}>
          <RenderRestaurants restaurants={restaurants}/>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="Details">Item Name:</label>
          <select id="Details" name="Details">
            <RenderMenuItems items={items} />
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="value">Value:</label>
          <input
            name="Value"
            required
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            name="Address"
            required
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="status">Status:</label>
           <select id="Status" name="Status">
            <option value="New">New</option>
          </select>
        </div>
        <button class="button" style={{"color" : "white"}} type="submit">Add Order</button>
      </form>
    </div>
  );
}

export default OrderForm;
