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
    response.send('<h1>API Homepage by Senior Dev Daniel Estrella </h1>');
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