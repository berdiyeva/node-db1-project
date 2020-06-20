const knex = require("knex");

const knexfile = require("../knexfile.js");

// change to "production" and update knexfile.js to use postgres.
const database = "production";

const config = {
	client: "sqlite3",
	connection: {
		filename: "./data/budget.db3",
	},
	useNullAsDefault: true,
};

module.exports = knex(config);

module.exports = knex(knexfile[database]);

// module.exports = knex(config.development);
