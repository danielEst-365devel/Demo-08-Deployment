const express = require('express');
const router = express.Router();

// Customers
router.get('/', (request, response) => {
    response.status(200).json({ message: 'GET all customers' });
});

router.post('/', (request, response) => {
    response.status(200).json({ message: `CREATE new customer` });
});

router.get('/:id', (request, response) => {
    response.status(200).json({ message: `GET customer with id ${request.params.id}` });
});

router.put('/:id', (request, response) => {
    response.status(200).json({ message: `UPDATE customer with id ${request.params.id}` });
});

router.delete('/:id', (request, response) => {
    response.status(200).json({ message: `DELETE customer with id ${request.params.id}` });
});

module.exports = router;