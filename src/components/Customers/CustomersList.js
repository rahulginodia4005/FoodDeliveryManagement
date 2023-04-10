import React from "react";
import RenderCustomers from "./RenderCustomers";

function CustomersList(customers) {
    return(
        <>
        <div style={{ alignContent: "center", alignItems: "center", width: "100%"}}>
            <table class="customers-table" style={{ alignContent: "center", alignItems: "center", justifyContent: "space-between", width: "100%", textAlign: "center"}}>
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