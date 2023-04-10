import React from "react";
import RenderCustomers from "./RenderCustomers";

function CustomersList(customers) {
    return(
        <>
        <div class="customers-table">
            <table class="customers-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email ID</th>
                    </tr>
                </thead>
                <RenderCustomers customers = {customers.customers} />
            </table>
        </div>
        </>
    )
}

export default CustomersList;