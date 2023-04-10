import React, {useState, useEffect } from "react";

function RenderingAvailablePersonnels(personnels) {
    // console.log(personnels.personnel);
    const personnels1 = personnels;
    const listPersonnels = personnels1.personnel.map(
        (element) => {
            if(element.CurrentLocation === '' && element.Name != 'undefined' && element.Name != '') {
                return (
                    <tr>
                        <td>{element.PersonnelID}</td>
                        <td>{element.Name}</td>
                        <td>{element.Phone}</td>
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

export default RenderingAvailablePersonnels;