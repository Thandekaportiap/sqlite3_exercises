import { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './card';

const getAllusers = () => {
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

    const updateUser = async (id) => {
        try {
            await axios.put(`http://localhost:5000/users/${id}`, { name: editName, age: editAge });
            setEditUserId(null);
            setEditName('');
            setEditAge('');
            fetchUsers();
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    const deleteUser = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/users/${id}`);
            fetchUsers();
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const handleEditClick = (user) => {
        setEditUserId(user.id);
        setEditName(user.name);
        setEditAge(user.age);
    };

  
  return (
    <div style={{display:"grid",gridTemplateColumns: "repeat(3, 0fr)",gap:"10px", justifyContent:"center",alignItems:"center"}}>
                {users.map(item =>(
                  <Card key={item.id} data={item}
                  setEditName={setEditName}
                  setEditAge={setEditAge}
                  handleEditClick={handleEditClick}
                  deleteUser={deleteUser}
                  setEditUserId={setEditUserId}
                  updateUser={updateUser}
                  editUserId={editUserId}
                  editName={editName}
                  editAge={editAge}
                  >
                     
                    </Card> 
                ))}
            
    </div>
  )
}

export default getAllusers
