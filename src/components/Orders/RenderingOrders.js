import React from 'react';

const RenderingOrders = (orders) => {
    const orders1 = orders;
    // console.log(flag);
    const listOrders = orders1.orders.map(
        (element) => {
            if(element.Status === "New" && element.Details != '' && element.Details != 'undefined') {
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

export default RenderingOrders;