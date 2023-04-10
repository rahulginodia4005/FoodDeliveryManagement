const config = {
    user: 'sa',
    password: 'f@20200784',
    server: 'localhost',
    database: 'FoodDelivery',
    options: {
        trustServerCertificate: true,
        trustedConnection: true,
        enableArithAbort: true,
    },
    port: 1433
}

module.exports = config;