import React, { useEffect, useState } from "react";
import axios from "axios";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Pagination from "./components/Pagination";
import "./App.css";

const API_URL = "https://demand-xpress-contact-backend.onrender.com/contacts";

function App() {
  const [contacts, setContacts] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const limit = 5;

  // Fetch contacts when page changes
  useEffect(() => {
    fetchContacts();
  }, [page]);

  const fetchContacts = async () => {
    try {
      const res = await axios.get(`${API_URL}?page=${page}&limit=${limit}`);
      setContacts(res.data.data);
      setTotal(res.data.total);
    } catch (err) {
      console.error("Error fetching contacts:", err);
    }
  };

  const addContact = async (contact) => {
    try {
      const res = await axios.post(API_URL, contact);
      // Optimistic update: prepend new contact
      setContacts([res.data, ...contacts]);
      setTotal(total + 1);
    } catch (err) {
      console.error("Error adding contact:", err);
    }
  };

  const deleteContact = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setContacts(contacts.filter((c) => c.id !== id));
      setTotal(total - 1);
    } catch (err) {
      console.error("Error deleting contact:", err);
    }
  };

  return (
    <div className="container">
      <h1>📒 Contact Book</h1>
      <ContactForm onAdd={addContact} />
      <ContactList contacts={contacts} onDelete={deleteContact} />
      <Pagination
        page={page}
        setPage={setPage}
        total={total}
        limit={limit}
      />
    </div>
  );
}

export default App;
