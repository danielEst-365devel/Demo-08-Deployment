const express = require('express');

const app = express();
const PORT = 4000;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

/* 
app.get('/', (request, response) => {
    response.status(200).json({ message: 'API Homepage' });
});
*/

//Home Page
app.get('/', (request, response) => {
    response.send(`
        <html>
            <head>
                <style>
                    body {
                        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                        background-color: #eef2f3;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        margin: 0;
                    }
                    h1 {
                        color: #4a90e2;
                        border-bottom: 2px solid #4a90e2;
                        padding-bottom: 10px;
                    }
                </style>
            </head>
            <body>
                <h1>API Homepage by Senior Dev Daniel Estrella</h1>
            </body>
        </html>
    `);
});

// Customers  
const customerRouter = require('./Routes/customer');  
app.use('/customers', customerRouter);  

// Orders  
const orderRouter = require('./Routes/orders');  
app.use('/orders', orderRouter);  

// Payments  
const paymentRouter = require('./Routes/payment');  
app.use('/payments', paymentRouter);

//Test