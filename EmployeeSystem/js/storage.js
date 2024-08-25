const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',           // Replace with your MySQL username
  password: 'password',   // Replace with your MySQL password
  database: 'my_database' // Replace with your database name
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database.');
});

// Function to insert user data into the database
function registerUser(username, email, password) {
  const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
  connection.query(sql, [username, email, password], (err, results) => {
    if (err) {
      console.error('Error inserting data:', err.stack);
      return;
    }
    console.log('Data successfully inserted, ID:', results.insertId);
  });
}

// Example of registering a user
registerUser('JohnDoe', 'johndoe@example.com', 'securepassword');

// Close the connection when you're done
connection.end((err) => {
  if (err) {
    console.error('Error closing the connection:', err.stack);
    return;
  }
  console.log('Connection closed.');
});
