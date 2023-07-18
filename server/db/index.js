require('dotenv').config();
const { Pool } = require('pg');
 
//passing the objects for connecting into postgres database
const pool = new Pool(
{
  user: 'postgres',
  password: '%d..,DD2022',
  host: 'localhost',
  port: 5432,
  database: 'yelp'
}
);//This function picks the objects from the .env file and connects them to the database.

const getClient = async () => {
    try {
      const client = await pool.connect();
      return client;
    } catch (error) {
      return null;
    }
  };
  
  pool.connect(function(err) {
    if (err) throw err;
    console.log("Connected to Postgresql Server ");
  });

module.exports = {
    query :(text,params) => pool.query(text, params),
}

//module.exports = {pool, getClient};