import axios from 'axios';

const url = '/api/form';

const submitForm = async (formData) => {
  const response = await axios.post(url, formData);
  return response.data;
}

const getAllForms = async () => {
  const response = await axios.get(url);
  return response.data;
}

const getFormById = async (id) => {
  const response = await axios.get(`${url}/${id}`);
  return response.data;
}

export default formService;