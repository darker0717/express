var express = require('express');
var mysql = require('mysql');
var localhost = require('./computer/link')
var router = express.Router();
/* GET users listing. */
router.post('/', function (req, res, next) {

	var connection = mysql.createConnection(localhost);
	connection.connect();
	connection.query('SELECT * from list', function (error, data, fields) {
		if (error) throw error;
		res.send(data);
	});
	connection.end();
});

module.exports = router;