
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

app.get("/get-messeges", (req, res) => {
    res.json({"chatMessages": chatMessages})
});

let idNum = 3
let chatMessages = [
    { id: 1, text: "It would be interesting to see how income playes a role in education.", sender: "bot" },
    { id: 2, text: "Yea that would be!", sender: "user" },
];

app.post('/api/send-message', (req, res) => {
    const { message } = req.body; 
    chatMessages.push({id: (idNum + 1), text: message, sender:"user"})
    idNum += 1
    res.json({"chatMessages": chatMessages})
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});