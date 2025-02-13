const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware
const assignmentRoutes = require('./routes/assignmentRoutes');
const Employee = require('./models/employeeModel');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors()); // Enable CORS
app.use(bodyParser.json());
app.use('/api', assignmentRoutes);

// Initialize the database table
Employee.createTable();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
