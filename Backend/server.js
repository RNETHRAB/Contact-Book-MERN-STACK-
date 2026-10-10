const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const Contact = require("./contact");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to the database
connectDB();

// Routes
app.post("/api/contacts", async (req, res) => {
   const contact = await Contact.create(req.body);
   res.send(contact);
});

//get all contacts
app.get("/api/contacts", async (req, res) => {
    const contact = await Contact.find();
    res.send(contact);
});

//update contact
app.put("/api/contacts/:id", async (req, res) => {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(contact);
});

//delete contact
app.delete("/api/contacts/:id", async (req, res) => {
    await Contact.findByIdAndDelete(req.params.id);
    res.send({ message: "Contact deleted" });
});


// Start the server
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});