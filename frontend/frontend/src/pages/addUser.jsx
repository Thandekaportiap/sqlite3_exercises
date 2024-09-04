import React, { useState, useEffect } from 'react';
import axios from 'axios';


const addUser = () => {
    const [users, setUsers] = useState([]);
    const [name, setname] = useState('');
    const [age, setAge] = useState('');
    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState(''); // Track input value for user ID
    const [editUserId, setEditUserId] = useState(null);
    const [editName, setEditName] = useState('');
    const [editAge, setEditAge] = useState('');

    useEffect(() => {
        fetchUsers();
    }, []); // Run only once on component mount

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:5000/users');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const fetchUser = async (id) => {
        try {
            const response = await axios.get(`http://localhost:5000/users/${id}`);
            setUser(response.data);
        } catch (error) {
            console.error('Error fetching user:', error);
            setUser(null);
        }
    };

    const addUser = async () => {
        try {
            await axios.post('http://localhost:5000/users', { name, age });
            setname('');
            setAge('');
            fetchUsers();
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

  return (
    <div>
         <h2>Add User</h2>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setname(e.target.value)}
            />
            <input
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />
            <button onClick={addUser}>Add</button>

    </div>
  )
}

export default addUser
