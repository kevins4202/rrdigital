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
    fullName: { type: String, required: true },
    email: { 
      type: String, 
      required: true, 
      unique: true, 
      match: /.+\@.+\..+/ // Basic email validation
    },
    dateOfBirth: { type: String, required: true },
    address: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      postalCode: { 
        type: Number, 
        required: true,
      },
      country: { type: String, required: true },
    },
    idDetails: {
      idType: { type: String, required: true },
      idNumber: { type: String, required: true },
      idDocument: Buffer
    },
  }, { timestamps: true, collection: 'forms' });

formSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

const Form = mongoose.model('Form', formSchema);

module.exports = { Form };