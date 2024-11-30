import axios from 'axios';

const url = 'https://backend-wispy-night-1838.fly.dev/api/forms';

const submitForm = async (formData) => {
  const uploadFormData = new FormData();

  // Append top-level fields
  for (const key in formData) {
    if (key === 'address') {
      // Handle nested address object
      for (const addressKey in formData.address) {
        uploadFormData.append(`address.${addressKey}`, formData.address[addressKey]);
      }
    }
    else if (key === 'idDetails') {
      // Handle nested idDetails object
      for (const detailKey in formData.idDetails) {
        if (detailKey === 'idDocument') {
          // Special handling for file upload
          uploadFormData.append('idDocument', formData.idDetails.idDocument);
        } else {
          // Append other idDetails fields
          uploadFormData.append(`idDetails.${detailKey}`, formData.idDetails[detailKey]);
        }
      }
    } else {
      // Append other top-level fields
      uploadFormData.append(key, formData[key]);
    }
  }

  console.log('Submitting form data from SERVICE:', Object.fromEntries(uploadFormData));

  try {
    const response = await axios.post(url, uploadFormData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error submitting form data:', error);
    throw error;
  }
}

const getAllForms = async () => {
  const response = await axios.get(url);
  return response.data;
}

const getFormById = async (id) => {
  const response = await axios.get(`${url}/${id}`);
  return response.data;
}

export default { submitForm, getAllForms, getFormById };