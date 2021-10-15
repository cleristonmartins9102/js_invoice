var mysql  = require('mysql')

const GetConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Pa$$w0rd',
  database: 'zoho'
})

module.exports = GetConnection