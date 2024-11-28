const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const cors = require('cors');
app.use(cors());

app.use(express.static('dist'));

require('dotenv').config();

const { Form } = require('./models/form');

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
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

app.post('/api/forms', (request, response, next) => {
  const body = request.body;

  const form = new Form({
    fullName: body.fullName,
    email: body.email,
    dateOfBirth: body.dateOfBirth,
    address: body.address,
    idDetails: body.idDetails,
  });

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