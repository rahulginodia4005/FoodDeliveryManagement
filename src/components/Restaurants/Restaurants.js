import React, {useEffect, useState} from "react";
import Sidebar from "../Utility/Sidebar";
import Footer from "../Utility/Footer";
import NewRestaurant from "./NewRestaurant";
import RenderRestaurants from "./RenderRestaurants";
// import RestScript from "./RestScript";

function Restaurants() {

    const [restaurants, setRestaurants] = useState([]);

    const getRestaurants = async() => {
        const restaurants = await fetch('/getRestaurants', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },

        })
        .then(res => res.json());
        console.log(restaurants);
        setRestaurants(restaurants.recordsets[0]);
    }

    return(
        <>
            <div class="restaurants" onClick={getRestaurants}>
                <Sidebar />
                <NewRestaurant getRestaurants={getRestaurants}/>
                <section>
                    <h2 style={{textAlign: "center"}}>Restaurants List</h2>
                    <RenderRestaurants restaurants={restaurants}/>
                </section>
                {/* <script src={RestScript} /> */}
            </div>
            <Footer />
        </>
    )
}

export default Restaurants;