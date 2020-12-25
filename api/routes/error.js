const express = require('express');
const router = express.Router();

router.get('*', function (req, res, next) {
    const error = new Error(
        `${req.ip} tried to access ${req.originalUrl}`,
    );
    error.statusCode = 301;
    next(error);
});

module.exports = router;
