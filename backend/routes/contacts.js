const express = require("express")

const router = express.Router()
const Contact = require("../models/contactModel")

// post /constacts - add new contact
router.post("/" , (req,res) => {
    const {name,email,phone} = req.body

    if (!name || !email || !phone) {
        return res.status(400).json({error:"All fields are required"})
    }

    Contact.addContact({name,email,phone}, (err,newContact) => {
        if (err) return res.status(500).json({error : err.message})
            res.status(201).json(newContact)
    })
})

// get /contacts?page=1&limit=10 - get contacts with pagination
router.get("/" , (req,res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10 ;

    Contact.getContacts(page,limit,(err,result) => {
        if (err) return res.status(500).json({error:err.message})
            res.json(result)
    })
})

// DELETE /contacts/:id - delete contact by ID
router.delete("/:id", (req,res) => {
    const id = req.params.id

    Contact.deleteContact(id,(err,deleted) => {
        if (err) return res.status(500).json({error:err.message })
        if (!deleted) return res.status(404).json({error:"Contact not found"})

        res.json(deleted)
    })
})

module.exports = router