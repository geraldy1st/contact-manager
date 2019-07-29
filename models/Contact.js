const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
  user: {
    //   to get the unique id of the user logged in
    type: mongoose.Schema.Types.ObjectId,
    // the references of the collection
    ref: 'users'
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  type: {
    type: String,
    default: 'personal'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('contact', ContactSchema);
