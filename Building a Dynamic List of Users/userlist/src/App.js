import React, { useState } from 'react';

const UserCard = ({ name, email, age }) => (
  <div style={{ backgroundColor:'coral',border: '2px solid', padding: '10px', marginBottom: '10px', borderRadius: '8px' }}>
    <h3>Name: {name}</h3>
    <p>Email: {email}</p>
    <p>Age: {age}</p>
  </div>
);

const App = () => {
  const [users, setUsers] = useState([
    { name: 'Alice', email: 'alice@example.com', age: 25 },
  ]);
  const [form, setForm] = useState({ name: '', email: '', age: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Email is invalid";
    if (!/^\d+$/.test(form.age) || parseInt(form.age) <= 0) errs.age = "Age must be positive";
    return errs;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddUser = () => {
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    const newUser = {
      name: form.name.trim(),
      email: form.email.trim(),
      age: parseInt(form.age),
    };
    setUsers([...users, newUser]);
    setForm({ name: '', email: '', age: '' });
    setErrors({});
  };

  return (
    <div style={{ textAlign:'center',maxWidth: '400px', margin: 'auto' }}>
      <h2>User List</h2>
      {users.map((user, index) => (
        <UserCard key={index} {...user} />
      ))}

      <h3>Add New User</h3>
      <input
        type="text" 
        style={{border:'2px solid gray',marginBottom:'5px',borderRadius:'5px'}}
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />
      <div style={{ color: 'red' }}>{errors.name}</div>

      <input
      style={{border:'2px solid gray',marginBottom:'5px',borderRadius:'5px'}}
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      <div style={{ color: 'red' }}>{errors.email}</div>

      <input
      style={{border:'2px solid gray',marginBottom:'5px',borderRadius:'5px'}}
        type="number"
        name="age"
        placeholder="Age"
        value={form.age}
        onChange={handleChange}
      />
      <div style={{ color: 'red' }}>{errors.age}</div>

      <button onClick={handleAddUser} style={{ backgroundColor:'lightcoral',padding:'5px',borderRadius:'5px',borderBlockStyle:'none',marginTop: '10px' }}>Add User</button>
    </div>
  );
};

export default App;
