import React from "react";
import RenderingOrders from "./RenderingOrders";
import RenderingCurrentOrders from "./RenderingCurrentOrders";
// import ListScript from "./ListScript";


function OrderList(orders) {
  // const orders1 = [...orders]

  
  return (
    <div className="order-list">
      <section class="order-header">
        <h2>Current Orders</h2>
        <table>
            <thead>
              <tr>

                <th>Order ID</th>
                <th>Customer ID</th>
                <th>Restaurant Name</th>
                <th>Order Details</th>
                <th>Order Value</th>
              </tr>
            </thead>
          <RenderingCurrentOrders orders={orders.returnedOrders}/>
        </table>
      </section>
      <section>
        <h2>Pending Orders</h2>
        <table>
            <tr>
              <th>Order ID</th>
              <th>Customer ID</th>
              <th>Restaurant Name</th>
              <th>Order Details</th>
              <th>Order Value</th>
            </tr>
          <RenderingOrders orders={orders.returnedOrders}/>
          
        </table>
      </section>
      {/* <script>
        
          $(let data = ['a', 'b', 'c'];
          let wrapper = document.getElementById("pending-orders");
          let myHtml = "<tr>hello</tr>";
          wrapper.innerHTML += myHtml;)
        
      </script> */}
    </div>
  );
}

export default OrderList;
