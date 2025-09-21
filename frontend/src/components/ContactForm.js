import React, { useState } from "react";

function ContactForm({ onAdd }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let err = {};
    if (!form.name.trim()) err.name = "Name is required";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = "Invalid email";
    if (!/^\d{10}$/.test(form.phone)) err.phone = "Phone must be 10 digits";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    onAdd(form);
    setForm({ name: "", email: "", phone: "" });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      {errors.name && <p className="error">{errors.name}</p>}

      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      {errors.email && <p className="error">{errors.email}</p>}

      <input
        type="text"
        placeholder="Phone"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />
      {errors.phone && <p className="error">{errors.phone}</p>}

      <button type="submit">Add Contact</button>
    </form>
  );
}

export default ContactForm;
