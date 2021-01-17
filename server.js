const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// //Set up mongoose connection
// var mongoose = require('mongoose');
// var mongoDB = 'mongodb+srv://dbUser:<dbUserPassword>@cluster0.scf5n.mongodb.net/<dbUserData>?retryWrites=true&w=majority';
// mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));



mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/social-network', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
},{
    "auth": {
      "authSource": "admin"
    },
    "user": "dbUser",
    "pass": "dbUserPassword"
  });

// // Use this to log mongo queries being executed!
mongoose.set('debug', true);

app.use(require('./routes'));

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));