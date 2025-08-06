import React, { useState } from 'react';

function Dynamodb() {
  const [formData, setFormData] = useState({ userId: '', name: '', email: '', age: '' });
  const [userIdToFetch, setUserIdToFetch] = useState('');
  const [fetchedUser, setFetchedUser] = useState(null);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const addUser = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      const res = await fetch('http://localhost:4000/add_user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage('User added successfully');
        setFormData({ userId: '', name: '', email: '', age: '' });
      } else {
        setMessage(data.error || 'Failed to add user');
      }
    } catch (err) {
      setMessage('Server error');
    }
  };

  const getUser = async () => {
    setMessage('');
    try {
      const res = await fetch(`http://localhost:4000/users/${userIdToFetch}`);
      const data = await res.json();
      if (res.ok && data.userId) {
        setFetchedUser(data);
        setMessage('');
      } else {
        setFetchedUser(null);
        setMessage('User not found');
      }
    } catch (err) {
      setMessage('Error fetching user');
    }
  };

  const getAllUsers = async () => {
    setMessage('');
    try {
      const res = await fetch('http://localhost:4000/users');
      const data = await res.json();
      if (res.ok) {
        setFetchedUser(data);
        setMessage('');
      } else {
        setMessage('Failed to fetch users');
      }
    } catch (err) {
      setMessage('Error fetching users');
    }
  }

  const deleteUser = async (id) => {
  setMessage('');
  try {
    const res = await fetch(`http://localhost:4000/users/${id}`, {
      method: 'DELETE',
    });
    const data = await res.json();
    if (res.ok) {
      setMessage('User deleted successfully');
      // Refresh the list
      if (Array.isArray(fetchedUser)) {
        setFetchedUser((prev) => prev.filter((u) => u.userId !== id));
      } else if (fetchedUser?.userId === id) {
        setFetchedUser(null);
      }
    } else {
      setMessage(data.error || 'Failed to delete user');
    }
  } catch (err) {
    setMessage('Error deleting user');
  }
};


  return (
    <div style={styles.container}>
      <h2>Add User</h2>
      <form onSubmit={addUser} style={styles.form}>
        <input
          type="number"
          name="userId"
          placeholder="User ID"
          value={formData.userId}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Add User</button>
      </form>

      <h2>Get User by ID</h2>
      <input
        type="text"
        placeholder="Enter User ID"
        value={userIdToFetch}
        onChange={(e) => setUserIdToFetch(e.target.value)}
        style={styles.input}
      />
      <button onClick={getUser} style={styles.button}>Get User</button>
      <br />
      <button onClick={getAllUsers} style={styles.button}>Get All Users</button>

      
      {message && <p>{message}</p>}

     {Array.isArray(fetchedUser) ? (
  <div>
    <h3>All Users:</h3>
    {fetchedUser.map((user) => (
      <div key={user.userId} style={styles.card}>
        <p><strong>ID:</strong> {user.userId}</p>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Age:</strong> {user.age}</p>
        <button
      onClick={() => deleteUser(user.userId)}
      style={{ ...styles.button, background: '#dc3545' }}
    >
      Delete
    </button>
      </div>
    ))}
  </div>
) : fetchedUser ? (
  <div style={styles.card}>
    <h3>User Details:</h3>
    <p><strong>ID:</strong> {fetchedUser.userId}</p>
    <p><strong>Name:</strong> {fetchedUser.name}</p>
    <p><strong>Email:</strong> {fetchedUser.email}</p>
    <p><strong>Age:</strong> {fetchedUser.age}</p>
  </div>
) : null}

    </div>
  );
}

const styles = {
  container: { maxWidth: '500px', margin: 'auto', padding: '2rem' },
  form: { display: 'flex', flexDirection: 'column', gap: '1rem' },
  input: { padding: '0.5rem', fontSize: '1rem' },
  button: { padding: '0.6rem', background: '#28a745', color: '#fff', border: 'none', cursor: 'pointer' },
  card: { background: '#f1f1f1', padding: '1rem', marginTop: '1rem' }
};

export default Dynamodb;
