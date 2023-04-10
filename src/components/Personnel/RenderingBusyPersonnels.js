import React, {useState, useEffect } from "react";

function RenderingBusyPersonnels(personnels) {
    const listPersonnels = personnels.personnel.map(
        (element) => {
            if(element.CurrentLocation != "") {
                return (
                    <tr>
                        <td>{element.PersonnelID}</td>
                        <td>{element.Name}</td>
                        <td>{element.Phone}</td>
                        <td>{element.CurrentLocation}</td>
                        <td>{element.OrderID}</td>
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
            {listPersonnels}

        </>

    )
}

export default RenderingBusyPersonnels;