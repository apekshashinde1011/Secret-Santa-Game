const fs = require('fs');
const csv = require('csv-parser');
const Employee = require('../models/employeeModel');

const parseEmployeeCSV = (filePath) => {
  const employees = [];
  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (row) => {
      const { Employee_Name, Employee_EmailID } = row;
      if (Employee_Name && Employee_EmailID) {
        employees.push({ name: Employee_Name, email: Employee_EmailID });
      }
    })
    .on('end', () => {
      employees.forEach((emp) => {
        Employee.addEmployee(emp.name, emp.email);
      });
      console.log('CSV file successfully processed and employees added.');
    })
    .on('error', (err) => {
      console.error('Error reading CSV file:', err.message);
    });
};

module.exports = parseEmployeeCSV;
