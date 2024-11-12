const express = require('express');
const router = express.Router();

// Payments
router.get('/', (request, response) => {
    response.status(200).json({ message: 'GET all payments' });
});

router.post('/', (request, response) => {
    response.status(200).json({ message: `CREATE new payments` });
});

router.get('/:id', (request, response) => {
    response.status(200).json({ message: `GET payments with id ${request.params.id}` });
});

router.put('/:id', (request, response) => {
    response.status(200).json({ message: `UPDATE payments with id ${request.params.id}` });
});

router.delete('/:id', (request, response) => {
    response.status(200).json({ message: `DELETE payments with id ${request.params.id}` });
});

module.exports = router;