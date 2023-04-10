import React from "react";

function Order({ order }) {
  const { customerName, deliveryAddress, items, notes, status } = order;
  return (
    <div className={`order ${status.toLowerCase()}`}>
      <h3>{customerName}</h3>
      <p>
        <strong>Delivery Address:</strong> {deliveryAddress}
      </p>
      <p>
        <strong>Items:</strong> {items}
      </p>
      {notes && (
        <p>
          <strong>Notes:</strong> {notes}
        </p>
      )}
      <p>
        <strong>Status:</strong> {status}
      </p>
    </div>
  );
}

export default Order;
