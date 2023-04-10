import React, { useState, useEffect } from "react";
import OrderForm from "./OrderForm";
import OrderList from "./OrderList";
import Header from "../Utility/Header";
import Footer from "../Utility/Footer";
import Sidebar from "../Utility/Sidebar";
import UpdateOrderForm from "./UpdateOrderForm";
import DeleteOrder from "./DeleteOrder";

function Orders() {
  const [returnedOrders, setReturnedOrders] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

  const addOrder = async (order) => {
    const newOrder = await fetch('/addOrder',{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        ...order
      }),
    })
    .then(res => res.json());
    console.log("Order created successfully", newOrder);
    setReturnedOrders(newOrder);
  };

  const getOrders = async () => {
    const orders = await fetch('/getOrders', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(res => res.json());
    setReturnedOrders(orders.recordsets[0]);
  }

  const getRestaurants = async () => {
    const restaurantss = await fetch('/getRestaurants', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(res => res.json());
    setRestaurants(restaurantss.recordsets[0]);
  }

  useEffect(() => {
    getRestaurants();
  });


  return(
    <>
      <div class="orders">
      <Sidebar />
      <Header />
      <div className="order-management" onClick={getOrders}>
          <div className="order-form-container">
          <OrderForm restaurants={restaurants}/>
          <UpdateOrderForm />
          <DeleteOrder />
          </div>
          <div className="order-list-container">
          <OrderList returnedOrders={returnedOrders}
          />
          </div>
      </div>
      </div>
      <Footer />
    </>
  )
}

export default Orders;