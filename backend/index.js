const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./credentials.db',sqlite3.OPEN_READWRITE, (err)=>{
    if(err) return console.error(err.message)
});

//create a table
// let sql=`CREATE TABLE validation(username TEXT NOT NULL, password TEXT NOT NULL)`
// db.run(sql);

// let sql = `INSERT INTO validation(username, password) VALUES (?,?)`;
// db.run(
//     sql,['koding' , 'koding101'],
//     (err) => {
//         if (err) return console.error(err.message);
//     }
// );