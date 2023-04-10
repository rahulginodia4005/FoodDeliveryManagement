import React from 'react';

const RenderRestaurants = (restaurant, setRestaurant) => {
    // console.log(flag);
    // console.log(restaurant);
    const listRestaurant = restaurant.restaurants.map(
        (element) => {
            return (
                    <option value={element.Name}>{element.Name}</option>
            )
        }
    )
    
    return (
        <>
            {listRestaurant}

        </>

    )
}

export default RenderRestaurants;