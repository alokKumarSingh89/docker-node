const db = require("../db");
(async () => {
    try {
        await db('users').insert({name:'Alok'})
        await db('users').insert({ name: 'Jaggi' });
        console.log('Added dummy users');
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
})()