# RR Know Your Customer Form

## Project Overview
RR Know Your Customer Form is a three-step form that collects personal information from users. The form is designed to guide users through different stages of data input, providing a smooth experience for entering required details. This project integrates with a MongoDB database for data storage and utilizes various libraries to provide a responsive and user-friendly interface.

## Features
- Three-step form to input personal information.
- React front-end with form validation.
- Node.js backend to handle requests and store data in MongoDB.
- Responsive design using React Bootstrap.
- User-friendly file upload and display.

## Libraries & Tools Used
- **React** – Front-end framework for building the user interface.
- **Node.js** – Backend runtime for handling API requests.
- **MongoDB** – Database for storing user data (requires MongoDB Atlas account).
- **axios** – HTTP client for making requests to the backend.
- **React Bootstrap** – UI component library for responsive design.
- **Lucide React** – Icon library for enhancing UI.
- **Vercel** – Deployment platform for hosting the application.

## Deployment

### Live Version
The application is live and can be accessed at:  
[RR Know Your Customer Form](https://vercel.com/kevins4202s-projects/rrdigital/25n3nsaaYcoxpJvobcotEHA6PHnP)

### Local Deployment

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/rr-know-your-customer-form.git
   cd rr-know-your-customer-form

2. **Install dependencies**:
   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
3. **Set up MongoDB Atlas**:
   - [Create a MongoDB Atlas Account](https://www.mongodb.com/cloud/atlas)
   - Create a new cluster and get your MongoDB connection string.
   - In the `backend` folder, create a `.env` file with the following:
     ```bash
     MONGODB_URI=your-mongodb-cluster-uri
   Replace `your-mongodb-cluster-uri` with your MongoDB connection string.

4. **Run the Backend**:
   ```bash
   npm run start
The application will be running at `http://localhost:3001`.\
The backend data can be accessed at `http://localhost:3001/api/forms` or in your MongoDB database.

## License
This project is open-source and available under the MIT License.
