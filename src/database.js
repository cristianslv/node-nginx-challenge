import mysql from 'mysql'

const connection = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
})

connection.query("CREATE TABLE IF NOT EXISTS people(id int NOT NULL AUTO_INCREMENT, name varchar(255) NOT NULL, PRIMARY KEY(id))")

export default connection;
