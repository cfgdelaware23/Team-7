const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
const app = express();
const PORT = 5000;
const url = 'mongodb://localhost:27017';
const dbName = 'myFormDB';
let db;

// Connect to MongoDB
MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
    if (err) {
        console.error('Failed to connect to the database', err);
        process.exit(1);
    }
    console.log('Connected to MongoDB');
    db = client.db(dbName);
});
app.use(cors());
app.use(bodyParser.json());
app.post('/submit-form', (req, res) => {
    const formData = req.body;
    db.collection('formResponses').insertOne(formData, (err, result) => {
        if (err) {
            console.error('Failed to insert form data', err);
            res.status(500).send({ message: 'An error occurred' });
            return;
        }
        res.send({ message: 'Form data submitted successfully' });
    });
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});