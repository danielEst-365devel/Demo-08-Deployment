const express = require('express');
const router = express.Router();

// Orders
router.get('/', (request, response) => {
    response.status(200).json({ message: 'GET all orders' });
});

router.post('/', (request, response) => {
    response.status(200).json({ message: `CREATE new order` });
});

router.get('/:id', (request, response) => {
    response.status(200).json({ message: `GET order with id ${request.params.id}` });
});

router.put('/:id', (request, response) => {
    response.status(200).json({ message: `UPDATE order with id ${request.params.id}` });
});

router.delete('/:id', (request, response) => {
    response.status(200).json({ message: `DELETE order with id ${request.params.id}` });
});

module.exports = router;