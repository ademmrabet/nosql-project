const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');


const app = express();
app.use(cors());
app.use(express.json());

app.use(bodyParser.json());


// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/inventory",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.on('open', function(ref){
    console.log('Connected to mongo server!')
})

//définition de Schema
const keyboardSchema = new mongoose.Schema({
    barcode: String,
    keyboard_lan: String,
    buy_date: String,
    distribution_date: String,
    status: String,
});

const keyboard = mongoose.model("keyboard", keyboardSchema);

// Création des Routes
app.get("/api/keyboards", async (req, res) => {
    const keyboards = await keyboard.find();
    res.json({ data: keyboards, lastUpdated: new Date()});
});

// API endpoint to execute MongoDB queries
app.post('/api/execute', async (req, res) => {
    const { code } = req.body;

    try {
        // Example: Execute a predefined query
        const result = await mongoose.connection.db.collection('keyboards').find({}).toArray();
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//intialisation de serveur
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});