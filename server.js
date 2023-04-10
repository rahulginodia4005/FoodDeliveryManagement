const express = require('express');
const dbOperation = require('./dbFiles/dbOperation');
const cors = require('cors');

const API_PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.post('/api', (req, res) => {
    console.log("Called");
    res.send({ result: 'Helloooo' });
});

app.post('/quit', (req, res) => {
    console.log("Called quit");
    res.send({ result: 'GoodBye' });
});

app.post('/addCustomer', async (req, res) => {
    console.log("hellllooo");
    const CustID = await dbOperation.createCustomerID();
    await dbOperation.addCustomer(req.body, CustID);
    const result = await dbOperation.getCustomers();
    console.log(result);
    res.send(result.recordset);
})

app.get('/getCustomers', async (req, res) => {
    const result = await dbOperation.getCustomers();
    res.send(result.recordset);
})

app.post('/addOrder', async (req, res) => {
    console.log(req.body);
    const restID = await dbOperation.findRestaurant(req.body);
    console.log(restID.recordset[0], 'rest id');
    // const restID = 1000;
    const customerID = await dbOperation.findCustomer(req.body);
    // console.log(customerID.recordset[0].CustomerID, 'customer id');
    // const customerID = 1000;
    const orderID = await dbOperation.createOrderID();
    // const orderID = 1000;
    console.log(orderID, 'order id');
    await dbOperation.addOrder(req.body, customerID.recordset[0], restID.recordset[0], orderID);
    const result = await dbOperation.getOrders();
    console.log('order added');
    console.log(result, 'order added');
    res.send(result);
})

app.get('/getOrders', async (req, res) => {
    const result = await dbOperation.getOrders();
    res.send(result);
})

app.get('/getRestaurants', async (req, res) => {
    const result = await dbOperation.getRestaurants();
    res.send(result);
})

app.post('/addRestaurant', async (req, res) =>  {
    const restID = await dbOperation.createRestaurantID();
    console.log(restID, 'rest id');
    await dbOperation.addRestaurant(req.body, restID);
    await dbOperation.addItems(restID, req.body);
    const result = await dbOperation.getRestaurants();
    console.log(result, 'restaurant added');
    res.send(result);
})

app.post('/updateOrder', async (req, res) => {
    await dbOperation.updateOrder(req.body);
    await dbOperation.updatePersonnel(req.body);
    const result = await dbOperation.getOrders();
    console.log(result, 'order updated');
    res.send(result);
})

app.post('/deleteOrder', async (req, res) => {
    await dbOperation.deleteOrder(req.body);
    const result = await dbOperation.getOrders();
    console.log(result, 'order deleted');
    res.send(result);
})

app.post('/addPersonnel', async (req, res) => {
    const personID = await dbOperation.createPersonnelID();
    console.log(personID, 'person id');
    await dbOperation.addPersonnel(req.body, personID);
    const result = await dbOperation.getPersonnels();
    console.log(result, 'personnel added');
    res.send(result);
})

app.get('/getPersonnels', async (req, res) => {
    const result = await dbOperation.getPersonnels();
    // console.log(result, 'personnel added');
    res.send(result);
})

app.post('/getMenuItems', async (req, res) => {
    const restID = await dbOperation.findRestaurant(req.body); 
    console.log(restID, 'rest id found from Restaurant');
    const result = await dbOperation.getMenuItems(restID.recordset[0]);
    res.send(result);
})


// let Pam = new Employee(1002, 'Pam', 'Beesly', 30);
// dbOperation.createEmployee(Pam);

// dbOperation.getEmployees().then(res => {
//     console.log(res);
// })

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));