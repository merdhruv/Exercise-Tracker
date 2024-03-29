const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
  origin : ["https://exercise-tracker-opal.vercel.app/"],
  methods : ["POST","GET"],
  credentials : true
}));
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true});

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Connected to MongoDB!');
  });
app.get("/", (req,res)=>{
  res.json("hello");
})
const exerciseRouter = require('./routes/exercise');
const userRouter = require('./routes/user');

app.use('/exercise', exerciseRouter);
app.use('/user', userRouter);

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});