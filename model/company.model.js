const express = require('express');
const app = express();
var mysql = require('mysql');
var db = require('../config/db');

var sqlInfo = {
	host: db.database.host,
	user: db.database.user,
	password: db.database.password,
	database: db.database.database
};

var con;

function handleDisconnect()
{
	con = mysql.createConnection(sqlInfo);

	con.connect(function(err)
	{
	  if(err){
		console.log('Error connecting to Db');
		console.log(err);
		return;
	  }
	 
	  console.log('Connection established');
	});
	
	con.on('error', function(err) {
		console.log('db error 1', err);
		if(err.code === 'PROTOCOL_CONNECTION_LOST') // Connection to the MySQL server is usually
		{											// lost due to either server restart, or a
		  handleDisconnect();                       // connnection idle timeout (the wait_timeout
		} else {                                    // server variable configures this)
		  console.log('db error 2', err);
		}
	});
}

handleDisconnect();


exports.get_company = async function (query, req, res) { 
	var query_string = 'SELECT * FROM company_list';
	con.query(query_string,function(err,rows)
	{
		if(err)
		{
			console.log(err);
			res.sendStatus(500);
		}
		else
		{
			res.send(rows);
		}
	})
}


exports.get_company_details = async function (query, req, res) { 
    var company_id = req.body.company_id;
	var query_string = 'SELECT * FROM companies_details WHERE company_id="'+company_id+'"';
	con.query(query_string,function(err,rows)
	{
		if(err)
		{
			console.log(err);
			res.sendStatus(500);
		}
		else
		{
			res.send(rows);
		}
	})
}