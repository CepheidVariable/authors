const mongoose = require('mongoose'),
    db = process.env.DB_URI;

mongoose.connect(`mongodb://localhost/${db}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Success: MongoDB '${db}' connected`))
    .catch(err => console.log("Warning: database connection failed!\n", err));