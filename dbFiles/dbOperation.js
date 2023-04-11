const config = require('./dbConfig');
const sql = require('mssql');

const addCustomer = async (newCustomer, custID) => {
    try {
        let pool = await sql.connect(config);
        console.log("helloooo");
        if(newCustomer.Name != '' && newCustomer.Name != 'undefined') await pool.request().query(
            `INSERT INTO Customers VALUES (
                ${custID},
                '${newCustomer.Name}',
                '${newCustomer.Phone}',
                '${newCustomer.EmailID}'
            )`
        )
        // return addCustomer;
    } catch (error) {
        console.log(error);
    }
}

const getCustomers = async () => {
    try {
        let pool = await sql.connect(config);
        let customers = await pool.request().query("SELECT * FROM Customers");
        return customers;
    } catch (error) {
        console.log(error);
    }
}

const createCustomerID = async () => {
    return parseInt(1000 + (Math.random() * 9000));
}

const addOrder = async (newOrder, CustomerID, RestaurantID, OrderID) => {
    try {
        let pool  = await sql.connect(config);
        if(newOrder.Address != '' && newOrder.Address != 'undefined' && newOrder.Details != '' && newOrder.Details != 'undefined') await pool.request().query(
            `INSERT INTO Orders VALUES (
                ${OrderID},
                ${CustomerID.CustomerID},
                ${RestaurantID. RestaurantID},
                ${newOrder.Value},
                '${newOrder.Address}',
                '${newOrder.Status}',
                '${newOrder.Details}'
            )`
        )
    }
    catch (error) {
        console.log(error);
    }
}

const getOrders = async () => {
    try {
        let pool = await sql.connect(config);
        let orders = await pool.request().query("SELECT * FROM Orders");
        return orders;
    } catch (error) {
        console.log(error);
    }
}

const findRestaurant = async (restaurant) => {
    try {
        let pool = await sql.connect(config);
        let restaurantID = await pool.request().query(
            `SELECT RestaurantID FROM Restaurants WHERE Name = '${restaurant.Restaurant}'`
        );
        return restaurantID;
    } catch (error) {
        console.log(error);
    }
}

const findCustomer = async (order) => {
    try {
        let pool = await sql.connect(config);
        let customerID = await pool.request().query(
            `SELECT CustomerID FROM Customers WHERE Phone = '${order.Phone}'`
        );
        console.log(customerID, 'found customer id');
        return customerID;
    } catch (error) {
        console.log('not found customer id',error);
    }
}

const createOrderID = async () => {
    return parseInt(1000 + (Math.random() * 100));
}

const getRestaurants = async () => {
    try {
        let pool = await sql.connect(config);
        let restaurants = await pool.request().query("SELECT * FROM Restaurants where Name != ''");
        return restaurants;
    } catch (error) {
        console.log(error);
    }
}

const addRestaurant = async (newRestaurant, restID) => {
    try {
        let pool = await sql.connect(config);
        if(newRestaurant.Name != '' && newRestaurant.Name != 'undefined') await pool.request().query(
            `INSERT INTO Restaurants VALUES (
                ${restID},
                '${newRestaurant.Name}',
                '${newRestaurant.Phone}',
                '${newRestaurant.Address}'
            )`
        )
        // return addRestaurant;
    } catch (error) {
        console.log(error);
    }
}

const createRestaurantID = async () => {
    return parseInt(10000 + (Math.random() * 1000));
}

const updateOrder = async (updatedOrder) => {
    try {
        let pool = await sql.connect(config);
        await pool.request().query(
            `UPDATE Orders SET Status = 'Current' WHERE OrderID = ${updatedOrder.OrderID}`
        )
    } catch (error) {
        console.log(error);
    }
}

const updatePersonnel = async (updatedPersonnel) => {
    try {
        let pool = await sql.connect(config);
        let address = await pool.request().query(
            `SELECT Address FROM Orders WHERE OrderID = ${updatedPersonnel.OrderID}`
        );
        // console.log(address, 'address');
        await pool.request().query(
            `UPDATE Personnels SET CurrentLocation = '${address.recordset[0].Address}' WHERE PersonnelID = ${updatedPersonnel.PersonnelID}`
        );
        await pool.request().query(
            `UPDATE Personnels SET OrderID = '${updatedPersonnel.OrderID}' WHERE PersonnelID = ${updatedPersonnel.PersonnelID}`
        );
    } catch (error) {
        console.log(error);
    }
}

const deleteOrder = async (deletedOrder) => {
    try {
        let pool = await sql.connect(config);
        await pool.request().query(
            `DELETE FROM Orders WHERE OrderID = ${deletedOrder.OrderID}`
        )
    } catch (error) {
        console.log(error);
    }
}

const addPersonnel = async (newPersonnel, personnelID) => {
    try {
        let pool = await sql.connect(config);
        if(newPersonnel.Name != '' && newPersonnel.Name != 'undefined') await pool.request().query(
            `INSERT INTO Personnels VALUES (
                ${personnelID},
                '${newPersonnel.Name}',
                '${newPersonnel.Phone}',
                '',
                NULL
            )`
        )
    }
    catch (error) {
        console.log(error);
    }
}

const getPersonnels = async () => {
    try {
        let pool = await sql.connect(config);
        let personnel = await pool.request().query("SELECT * FROM Personnels");
        return personnel;
    } catch (error) {
        console.log(error);
    }
}

const createPersonnelID = async () => {
    return parseInt(100000 + (Math.random() * 10000));
}

const addItems = async (restID, newRestaurant) => {
    try {
        let pool = await sql.connect(config);
        for(let i = 0 ;i < newRestaurant.Number; i++) {
            await pool.request().query(
                `INSERT INTO MenuItems VALUES (
                    ${restID},
                    '${newRestaurant.Items[i]}'
                )`
            )
        }
    }
    catch (error) {
        console.log(error);
    }
}

const getMenuItems = async (restID) => {
    try {
        let pool = await sql.connect(config);
        let menuItems = await pool.request().query(
            `SELECT Item FROM MenuItems WHERE RestaurantID = ${restID.RestaurantID}`
        );
        return menuItems;
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    addCustomer,
    getCustomers,
    createCustomerID,
    addOrder,
    getOrders,
    findRestaurant,
    updateOrder,
    findCustomer,
    createOrderID,
    getRestaurants,
    createRestaurantID,
    addRestaurant,
    deleteOrder,
    addPersonnel,
    getPersonnels,
    createPersonnelID,
    updatePersonnel,
    addItems,
    getMenuItems
    // createEmployee,
    // getEmployees
}