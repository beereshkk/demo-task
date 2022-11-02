const mongoose = require('mongoose');

const configureDB = () => {
  mongoose
    .connect('mongodb://localhost:27017/dashboard-task')
    .then(() => {
      console.log('connected to db');
    })
    .catch(() => {
      console.log('error connecting to database');
    });
};

module.exports = configureDB;
