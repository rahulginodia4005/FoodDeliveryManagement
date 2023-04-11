import React, {useState} from "react";

function DeleteOrderForm() {
    const [deleteOrder, setDeleteOrder] = useState({OrderID: 0, Status: ''});

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const form = Object.fromEntries(data.entries());
        console.log(form);
        setDeleteOrder({
            OrderID: parseInt(form.OrderID),
            Status: form.Status
        })

        const deletedOrder = await fetch('/deleteOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(deleteOrder)
        })
        .then(res => res.json());
        console.log("Order deleted successfully", deletedOrder);
    }

    return (
        <div className="order-form">
      <h2 style={{fontWeight: "bold"}}>Delete Order</h2>
      <form method="POST" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>OrderID:</label>
          <input name="OrderID" />
        </div>
        <div className="form-group">
          <label>Update to:</label>
          <select name="Status">
            <option >Completed</option>
          </select>
        </div>
        <button class="button" style={{"color":"#fff"}} type="submit">
            Delete Order
        </button>
      </form>
    </div>
    )
} 

export default DeleteOrderForm;