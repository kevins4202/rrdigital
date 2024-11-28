const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

require("dotenv").config();

const url = process.env.MONGODB_URI;

mongoose.connect(url)
  .then(result => {
    console.log('Connected to MongoDB');
  }).catch(error => {
    console.log('Error connecting to MongoDB:', error.message);

  });

const formSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  dateOfBirth: Date,
  address: {
    street: String,
    city: String,
    state: String,
    postalCode: String,
    country: String,
  },
  idDetails: {
    idType: String,
    idNumber: String,
    idDocument: Buffer,
  },
}, {collection: 'forms'});

formSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

const Form = mongoose.model('Form', formSchema);

module.exports = { Form };