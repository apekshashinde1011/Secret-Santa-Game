const Employee = require('../models/employeeModel');

const AssignmentService = {
  generateAssignments: (employees) => {
    const assignments = [];
    const availableReceivers = [...employees];

    employees.forEach((giver) => {
      const possibleReceivers = availableReceivers.filter(
        (receiver) => receiver.email !== giver.email
      );

      if (possibleReceivers.length === 0) {
        throw new Error('Not enough participants to assign Secret Santa.');
      }

      const randomIndex = Math.floor(Math.random() * possibleReceivers.length);
      const receiver = possibleReceivers[randomIndex];

      assignments.push({
        giverName: giver.name,
        giverEmail: giver.email,
        receiverName: receiver.name,
        receiverEmail: receiver.email,
      });

      const receiverIndex = availableReceivers.findIndex(
        (r) => r.email === receiver.email
      );
      availableReceivers.splice(receiverIndex, 1);
    });

    return assignments;
  },
};

module.exports = AssignmentService;
