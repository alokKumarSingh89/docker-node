const db = require('../db');
(async () => {
   try {
       await db.schema.dropTableIfExists('users');
       await db.schema.withSchema('public').createTable('users', table => {
           table.increments();
           table.string('name');
       })
       console.log("Table Created");
       process.exit(0);
   } catch (error) {
       console.log(error);
       process.exit(1);
   } 
})()