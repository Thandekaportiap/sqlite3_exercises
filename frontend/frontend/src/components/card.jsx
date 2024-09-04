import React, { useState, useEffect } from 'react';
import axios from 'axios';

const card = ({data, setEditName,setEditAge, handleEditClick,deleteUser,setEditUserId,updateUser, editUserId,

    editName,editAge }) => {
    
  return (
    <>
     <div className="w3-card-4" style={{width:"100%", }}>
    <header className="w3-container w3-blue">
      <h1>{data.name}</h1>
    </header>

    <div className="w3-container">
      {data.id}
    </div>

    <footer className="w3-container w3-blue">
    {editUserId === data.id ? (
                            <>
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
                                <button onClick={() => updateUser(data.id)}>Update</button>
                                <button onClick={() => setEditUserId(null)}>Cancel</button>
                            </>
                        ) : (
                            <>
                                <button onClick={() => handleEditClick(data)}>Edit</button>
                                <button onClick={() => deleteUser(data.id)}>Delete</button>
                            </>
                        )}
        </footer>
  </div>
    </>
  )
}

export default card
