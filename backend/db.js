const sqlite3 = require("sqlite3").verbose()

// use database file 
const db = new sqlite3.Database("./contacts.db", (err) => {
    if (err) {
        console.error("Error opening database " + err.message);
    }else {
        console.log("Connected to SQLite database.");
    }
})

// create table if not exists 

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS contacts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT NOT NULL   
    ) `)
})

module.exports = db ;