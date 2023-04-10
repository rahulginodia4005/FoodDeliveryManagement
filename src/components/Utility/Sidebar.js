import React from "react";

function Sidebar({ orders, updateOrder, deleteOrder }) {

    // const sidebar = document.querySelector(".sidebar");
    // sidebar.classList.toggle("active");
    const toggleSidebar = () => {
        const sidebar = document.querySelector(".sidebar");
        sidebar.classList.toggle("active");
    };
    
    const menuIcon = document.querySelector(".menu-icon");
    if(menuIcon) menuIcon.addEventListener("click", toggleSidebar);

    return(
        <>
            

            <div class="sidebar">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/orders">Orders</a></li>
                <li><a href="/restaurants">Restaurants</a></li>
                <li><a href="/personnels">Delivery Personnel</a></li>
                <li><a href="/customers">Customers</a></li>
            </ul>
            </div>

            <div class="main-content">

            </div>
        </>

    )
      
}

export default Sidebar;