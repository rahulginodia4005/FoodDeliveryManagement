import React from "react";


const RenderPersonnels = (personnels) => {
    // console.log(personnels.personnel);
    const listPersonnels = personnels.personnel.map(
        (element) => {
            if(element.CurrentLocation === "" && element.Name != "undefined" && element.Name != "") {
                return (
                    <option>
                        {element.PersonnelID}
                    </option>
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

export default RenderPersonnels;