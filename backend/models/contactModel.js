const db = require("../db")

// add new contact

const addContact = (contact,callback) => {
    const {name,email,phone} = contact 
    db.run(
        "INSERT INTO contacts (name,email,phone) VALUES (?, ?, ?)",
        [name, email, phone],
        function(error) {
            callback(error, {id:this.lastID, ...contact})
        }
    )
};

// get contacts with pagination
const getContacts = (page,limit,callback) => {
    const offset = (page -1) * limit;

    db.all(
        "SELECT * FROM contacts LIMIT ? OFFSET ?",
        [limit,offset],
        (err,rows) => {
            if (err) return callback(err);

            // get total count of contacts
            db.get("SELECT COUNT(*) AS count FROM contacts", (countErr,result) => {
                if (countErr) return callback(countErr);

                callback(null, {data:rows,total:result.count})
            })
        }
    )
}

// delete contact bt ID 
const deleteContact = (id,callback) => {
    db.run("DELETE FROM contacts WHERE id = ?",[id],function(err) {
        callback(err, this.changes > 0)
    })
}

module.exports = {addContact,getContacts,deleteContact}