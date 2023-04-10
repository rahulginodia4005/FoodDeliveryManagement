import React from "react";
import RenderingAvailablePersonnels from "./RenderingAvailablePersonnels";
import RenderingBusyPersonnels from "./RenderingBusyPersonnels";

function PersonnelList(returnedPersonnels) {
  return (
    <div className="order-list">
      <section class="order-header">
        <h2>Available</h2>
        <table>
          <thead>
            <tr>
              <th>Personnel ID</th>
              <th>Name</th>
              <th>Phone</th>
            </tr>
          </thead>
          <RenderingAvailablePersonnels personnel={returnedPersonnels.returnedPersonnel}/>
        </table>
      </section>
      <section>
        <h2>Busy</h2>
        <table>
          <thead>
            <tr>
              <th>Personnel ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>CurrentLocation</th>
              <th>OrderID</th>
            </tr>
          </thead>
          <RenderingBusyPersonnels personnel={returnedPersonnels.returnedPersonnel}/>
        </table>
      </section>

      {/* <h2>Orders</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.length === 0 ? (
            <tr>
              <td colSpan="5">No orders</td>
            </tr>
          ) : (
            orders.map((order, index) => (
              <OrderItem
                key={index}
                index={index}
                order={order}
                updateOrder={updateOrder}
                deleteOrder={deleteOrder}
              />
            ))
          )}
        </tbody>
      </table> */}
    </div>
  );
}

export default PersonnelList;
