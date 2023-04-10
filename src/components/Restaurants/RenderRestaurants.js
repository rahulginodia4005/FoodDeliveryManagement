import React from 'react';
import logo from '../../images/logo192.png';
import logo0 from '../../images/logo0.jpeg';
import logo1 from '../../images/logo1.webp';
import logo2 from '../../images/logo2.jpeg';
import logo3 from '../../images/logo192.png';

const RenderRestaurants = (restaurant) => {
    // console.log(flag)
    let temp  =0;
    const listRestaurant = restaurant.restaurants.map(
        (element) => {
            return (
                    <div class="restaurant">
                        <span style={{"fontWeight": "bolder"}}> {element.RestaurantID}</span>
                        <img class="restaurant-img" src={logo0} style={{"display": ((temp++)==0 ? "flex" : "none")}}></img>
                        <img class="restaurant-img" src={logo1} style={{"display": ((temp++)==5 ? "flex" : "none")}}></img>
                        <img class="restaurant-img" src={logo2} style={{"display": ((temp++)==10 ? "flex" : "none")}}></img>
                        <img class="restaurant-img" src={logo3} style={{"display": ((temp++)==15 ? "flex" : "none")}}></img>
                        <h3>{element.Name}</h3>
                        <p>{element.Phone}</p>
                        <p>{element.Address}</p>
                    </div>
            )
        }
    )
    
    return (
        <div>
            {listRestaurant}

        </div>

    )
}

export default RenderRestaurants;