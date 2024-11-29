const express = require('express');
const app = express();
const multer = require('multer');

const PORT = process.env.PORT || 3001;
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.static('dist'));

require('dotenv').config();
const upload = multer({ 
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024 
  }
});

const { Form } = require('./models/form');

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('File:  ', request.file)
  console.log('---')
  next()
}

app.use(requestLogger);

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>');
});

app.get('/api/forms', (request, response) => {
  Form.find({}).then(forms => {
    response.json(forms);
  });
});

app.get('/api/forms/:id', (request, response, next) => {
  Form.findById(request.params.id)
    .then(form => {
      if (form) {
        response.json(form);
      } else {
        response.status(404).end();
      }
    })
    .catch(error => next(error));
});

app.post('/api/forms', upload.single('idDocument'), (request, response, next) => {
  const body = request.body;
  console.log("Posting form data from index.js:", body);
  const fileBuffer = request.file.buffer;
  console.log('File buffer size:', fileBuffer.length);

  const form = new Form({
    fullName: body.fullName,
    email: body.email,
    dateOfBirth: body.dateOfBirth,
    address: {
      street: body['address.street'],
      city: body['address.city'],
      state: body['address.state'],
      postalCode: body['address.postalCode'],
      country: body['address.country']
    },
    idDetails: {
      idType: body['idDetails.idType'],
      idNumber: body['idDetails.idNumber'],
      idDocument: fileBuffer
    }
  });

  console.log('Form data:', form);

  form.save()
    .then(savedForm => {
      response.json(savedForm);
    })
    .catch(error => next(error));
});


const errorHandler = (error, req, res, next) => {
  console.error(error.message);

  if (error.name === 'CastError') {
    return res.status(400).json({ error: 'Malformatted ID' });
  } else if (error.name === 'ValidationError') {
    return res.status(400).json({ error: error.message });
  }

  next(error);
};

app.use(errorHandler);

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});