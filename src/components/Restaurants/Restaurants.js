import React, {useEffect, useState} from "react";
import Sidebar from "../Utility/Sidebar";
import Footer from "../Utility/Footer";
import NewRestaurant from "./NewRestaurant";
import RenderRestaurants from "./RenderRestaurants";
import Header from "../Utility/Header";
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
                <Header />
                <Sidebar />
                <h2 style={{fontWeight: "bolder"}}>Restaurants</h2>
                <br/>
                <NewRestaurant getRestaurants={getRestaurants}/>
                <br/>
                <section>
                    <h2 style={{textAlign: "center", fontWeight: "bold"}}>Restaurants List</h2>
                    <RenderRestaurants restaurants={restaurants}/>
                </section>
                {/* <script src={RestScript} /> */}
            </div>
            <Footer />
        </>
    )
}

export default Restaurants;