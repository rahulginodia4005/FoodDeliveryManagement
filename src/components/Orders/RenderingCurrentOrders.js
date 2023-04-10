import React from 'react';

const RenderingCurrentOrders = (orders) => {
    const orders1 = orders;
    const listOrders = orders1.orders.map(
        (element) => {
            if(element.Status === "Current") {
                return (
                    <tr>
                        <td>{element.OrderID}</td>
                        <td>{element.CustomerID}</td>
                        <td>{element.RestaurantID}</td>
                        <td>{element.Details}</td>
                        <td>{element.Value}</td>
                    </tr>
                )
            }
            else{
                return;
            }
        }
    )
    
    return (
        <>
            {listOrders}

        </>

    )
}

export default RenderingCurrentOrders;