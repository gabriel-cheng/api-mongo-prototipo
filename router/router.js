const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Você está na home!');
});

module.exports = router;