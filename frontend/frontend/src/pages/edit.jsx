

import { Link, useParams, } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios'

const edit = ({data}) => {


        const{id}=useParams();
        console.log(id)
        console.log(data)

        const [users, setUsers] = useState([]);
        const [name, setname] = useState('');
        const [age, setAge] = useState('');
        const [user, setUser] = useState(null);
        const [userId, setUserId] = useState(''); // Track input value for user ID
        const [editUserId, setEditUserId] = useState(null);
        const [editName, setEditName] = useState('');
        const [editAge, setEditAge] = useState('');
    

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

        const handleEditClick = (user) => {
            setEditUserId(user.id);
            setEditName(user.name);
            setEditAge(user.age);
        };
    
  return (
    <div>
                                <input
                                    type="text"
                                    value={editName}
                                    onChange={(e) => setEditName(e.target.value)}
                                />
                                <input
                                    type="number"
                                    value={editAge}
                                    onChange={(e) => setEditAge(e.target.value)}
                                />
                                <button onClick={() => updateUser(data.id)} className="w3-button w3-green">Update</button>
                                <button onClick={() => setEditUserId(null)} className="w3-button w3-red">Cancel</button>

                           

    </div>
  )
}

export default edit
