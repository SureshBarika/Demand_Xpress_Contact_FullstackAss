const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// middlewares 
app.use(cors())
app.use(express.json())

// routes 

const contactRoutes = require("./routes/contacts")

app.use("/contacts",contactRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on  http://localhost:${PORT}`);
})
