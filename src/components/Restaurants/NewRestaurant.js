import React, {useState} from "react";

function NewRestaurant(getRestaurants) {
    const [restaurant, setRestaurant] = useState({Name: '', Phone: '', Address: '', Number: 0, Items: []});

    const [item1, setItem1] = useState('');
    const [item2, setItem2] = useState('');
    const [item3, setItem3] = useState(''); 
    const [item4, setItem4] = useState('');
    const [item5, setItem5] = useState('');

    const[number, setNumber] = useState(0);
    const setInput = (e) => {
        if(e.target.name === "number"){
            setNumber(e.target.value);
            return;
        }
        if(e.target.name === "item1"){
            setItem1(e.target.value);
            return;
        }
        if(e.target.name === "item2"){
            setItem2(e.target.value);
            return;
        }
        if(e.target.name === "item3"){
            setItem3(e.target.value);
            return;
        }   
        if(e.target.name === "item4"){
            setItem4(e.target.value);
            return;
        }
        if(e.target.name === "item5"){
            setItem5(e.target.value);
            return;
        }
        
    }


    const handleSubmit = async (event) => {
        // console.log(orderInput);
        event.preventDefault();
        const data = new FormData(event.target);
        const form = Object.fromEntries(data.entries());
        setRestaurant({
          Name: form.Name,
          Phone: form.Phone,
          Address: form.Address,
          Number: parseInt(number),
          Items: restaurant.Items
        })
        console.log(restaurant);
        const newRestaurant = await fetch('/addRestaurant',{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(restaurant),
        })
        .then(res => res.json());
        console.log("Customer created successfully", newRestaurant);
        getRestaurants.getRestaurants();
      };

      const handleSubmit2 = (e) => {
        e.preventDefault();
        if(number == 1) {
            setRestaurant({
                ...restaurant,
                Items: [item1]
            })
        }
        if(number == 2) {
            setRestaurant({
                ...restaurant,
                Items: [item1, item2]
            })
        }
        if(number == 3) {
            setRestaurant({
                ...restaurant,
                Items: [item1, item2, item3]
            })
        }
        if(number == 4) {
            setRestaurant({
                ...restaurant,
                Items: [item1, item2, item3, item4]
            })
        }
        if(number == 5) {
            setRestaurant({
                ...restaurant,
                Items: [item1, item2, item3, item4, item5]
            })
        }
        console.log(restaurant);
      }


    return(
        <>
            <form onSubmit={handleSubmit}>
                <input 
                name="Name"
                placeholder="Restaurant Name"
                required
                ></input>
                <input 
                name="Phone"
                placeholder="Phone Number"
                required
                ></input>
                <input 
                name="Address"
                placeholder="Address"
                required
                ></input>
                <select name="number" onChange={setInput}>
                    <option disabled selected>Number of Items</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <form class="my-2">
    
                    <input name="item1" style={{"display" : (number) >= 1 ? "" : "none"}} onChange={setInput}></input>
                    <input name="item2" style={{"display" : (number) >= 2 ? "" : "none"}} onChange={setInput}></input>
                    <input name="item3" style={{"display" : (number) >= 3 ? "" : "none"}} onChange={setInput}></input>
                    <input name="item4" style={{"display" : (number) >= 4 ? "" : "none"}} onChange={setInput}></input>
                    <input name="item5" style={{"display" : (number) >= 5 ? "" : "none"}} onChange={setInput}></input>
                    <button class="button" style={{"color" : 'white'}} onClick={handleSubmit2}>Add Items</button>

                </form>
                <button type="submit" class="button" style={{"color" : "white"}}>Add Restaurant</button>
            </form>
        </>
    )
}

export default NewRestaurant;