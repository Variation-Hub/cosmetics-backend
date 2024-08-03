const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
require("dotenv").config();
const morgan = require('morgan');
const paymentRoute = require("./routes/paymentRoute")


const PORT = process.env.PORT || 8000;
const app = express();

app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL).then((connection) => {
    console.log("DB connected");
}).catch((err) => {
    console.error(err)
})

app.get('/', (req, res) => {
    res.send("Server is running")
});
app.use('/', paymentRoute);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
