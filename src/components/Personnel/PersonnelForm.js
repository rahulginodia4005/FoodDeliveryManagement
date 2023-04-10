import React, {useState} from "react";

function PersonnelForm() {
    const [personnel, setPersonnel] = useState([{Name: "", Phone: ""}]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const form = Object.fromEntries(data.entries());
        setPersonnel({
            Name: form.Name,
            Phone: form.Phone
        })
        console.log(personnel);

        const newPersonnel = await fetch('/addPersonnel', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(personnel),
        })
        .then(res => res.json());
        console.log("Personnel created successfully", newPersonnel);

    }

    return(
        <div >
            <form onSubmit={handleSubmit}>
                <input 
                name="Name"
                placeholder="Name"
                ></input>
                <input 
                name="Phone"
                placeholder="Phone"
                ></input>
                <button class="button" style={{"color" : "white"}} >Add Personnel</button>
            </form>
        </div>
    )
}

export default PersonnelForm;