// server/index.js

const express = require("express");
const bodyParser = require('body-parser');


const PORT = process.env.PORT || 3001;

const app = express();

// Add middleware to parse JSON
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

let chatMessages = [
    { id: 1, text: "Hi there!", sender: "bot" },
    { id: 2, text: "Hello!", sender: "user" },
    { id: 3, text: "How can I assist you today?", sender: "bot" },
];

app.post('/message', (req, res) => {
    const { message } = req.body; 
    console.log(message)
    res.json({"chatMessages": chatMessages})
    // res.json({"message": message})
    
    // if (Array.isArray(messages)) {
    //     chatMessages = [...chatMessages, ...messages];
    //     res.json({ success: true, messages: chatMessages });
    // } else {
    //     res.status(400).json({ success: false, error: 'Invalid request body' });
    // }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});