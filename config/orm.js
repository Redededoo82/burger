var connection = require("../config/connections");

//helper functions for insert and update database.
function printQuestionMarks(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push("?");
	};
	return arr.toString();
};

function objToSql(ob) {
	var arr = [];
	for (var key in ob) {
		var value = ob[key];
		if (Object.hasOwnProperty.call(ob, key)) {
			if (typeof value === "string" && value.indexOf(" ") >= 0) {
				value = "'" + value + "'";
			}
			arr.push(key + "=" + value);
		};
	};
	return arr.toString();
};


// console.log('eeeeeeeeeeeeeeeeeee');

//orm object to run selection/insert/update queries
var orm = {
	
	selectAll: function (table, cb) {
		var queryString = "SELECT * FROM " + table + ";";
		connection.query(queryString, function (err, res) {
			if (err) {
				throw err;
			};
			cb(res);
		});
		
	},
	insertOne: function (table, cols, vals, cb) {
		var queryString = "INSERT INTO" + table;
		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += printQuestionMarks(vals.length);
		queryString += ") ";
		connection.query(queryString, vals, function (err, res) {
			if (err) {
				throw err;
			}
			cb(res);
		});
	},

	updateOne: function (table, objColVals, condition, cb) {
			var queryString = "UPDATE " + table;
			queryString += " SET ";
			queryString += objToSql(objColVals);
			queryString += " WHERE ";
			queryString += condition;
			connection.query(queryString, function (err, res) {
				if (err) {
					throw err;
				}
				cb(res);
			});
		}
	};
	module.exports = orm;







	






