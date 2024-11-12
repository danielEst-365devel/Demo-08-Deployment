const express = require('express');
const router = express.Router();

const app = express();
const PORT = 4000;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
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

module.exports = router;