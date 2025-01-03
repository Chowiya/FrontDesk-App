const app = require('./app');
const mongoose = require('mongoose');
const { MONGO_DB, PORT } = require('./utils/config');





mongoose.connect(MONGO_DB)
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log('Server is running on port @http://127.0.0.1:3001');
    })
})
.catch((error) => {
    console.log('Error connecting to MongoDB', error);
})