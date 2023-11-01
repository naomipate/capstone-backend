const express = require('express');
const router = express.Router();

const { getUserByEmail } = require('../queries/user')

router.get('/find-email', async (req, res) => {
    const { email } = req.body;
    try {
         const foundUser = await getUserByEmail(email);
         res.status(200).json(foundUser);
    } catch (error) {
        res.status(500).json({
            error: error
        })
    }
})

router.get('/', (req, res) => {
    res.send('Hello.');
})

module.exports = router;