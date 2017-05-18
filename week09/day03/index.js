const mysql = require('mysql');

var conn = mysql.createConnection({
  host: "localhost",
  user: "'root'",
  password: "root",
  database: "bookstore"
});

conn.connect(function(err){
  if(err){
    console.log("Error connecting to Db");
    return;
  }
  console.log("Connection established");
});

const country = 'USA';
const query = "SELECT * FROM author WHERE country = ?"
conn.query(query, [country], function(err,rows){
if (err){
  console.log("para van", err);
} else {
  console.log("Data received from Db:\n");
  rows.forEach(function(rows) {
    console.log(rows.aut_name);
  })
  }
});

conn.end();
