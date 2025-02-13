const Employee = require('../models/employeeModel');
const AssignmentService = require('../services/assignmentService');

const AssignmentController = {
  assignSecretSanta: (req, res) => {
    Employee.getAllEmployees((err, employees) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to retrieve employees.' });
      }

      try {
        const assignments = AssignmentService.generateAssignments(employees);
        res.json(assignments);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    });
  },
};

module.exports = AssignmentController;
