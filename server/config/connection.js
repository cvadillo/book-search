const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'localhost:3001', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;