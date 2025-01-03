const express = require('express'); 

const authRouter = express.Router();

authRouter.get('/', (req, res) => {
    res.json({message: 'Hello World'})
 
})

module.exports = authRouter;