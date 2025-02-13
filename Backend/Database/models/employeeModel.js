const db = require('../database/dbConfig');

const Employee = {
  createTable: () => {
    const query = `
      CREATE TABLE IF NOT EXISTS employees (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE
      );
    `;
    db.run(query, (err) => {
      if (err) {
        console.error('Error creating employees table:', err.message);
      }
    });
  },

  addEmployee: (name, email) => {
    const query = 'INSERT INTO employees (name, email) VALUES (?, ?)';
    db.run(query, [name, email], (err) => {
      if (err) {
        console.error('Error adding employee:', err.message);
      }
    });
  },

  getAllEmployees: (callback) => {
    const query = 'SELECT * FROM employees';
    db.all(query, [], (err, rows) => {
      if (err) {
        console.error('Error fetching employees:', err.message);
        callback(err, null);
      } else {
        callback(null, rows);
      }
    });
  },
};

module.exports = Employee;
