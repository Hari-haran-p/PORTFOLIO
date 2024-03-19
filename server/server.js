const mongoose = require("mongoose");
const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

  const uri = "mongodb+srv://hariharanpcs21:hariharan123333888@cluster0.nw5s3ir.mongodb.net/demo?retryWrites=true&w=majority";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((err) => {
  console.error("Error connecting to MongoDB:", err);
});

const userschema = new mongoose.Schema({
    site_name:"string",
    site_link:"string",
    img:"string"
})

const user = mongoose.model('example', userschema, 'example');

app.get('/', (req, res) => {
  user.find()
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Internal Server Error");
    });
});

const port = 5000;

app.listen(port, () => {
  console.log(`Connected to the port ${port}`);
});
