const pgp = require('pg-promise')();
const db = pgp({
    host: 'localhost',
    port: 5432,
    database: 'shopping',
    user: 'postgres',
    password: '1234'
});
console.log("Whats is db",db)
db.one('SELECT $1 AS value', 'psql running successfully')
   .then((data) =>{
      console.log(data.value)
   })
   .catch((error) =>{
       console.log('ERROR:',error)
   })

   module.exports = {
    pgp,
    db,
   };