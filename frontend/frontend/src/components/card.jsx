import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Edit from '../pages/edit';
import { Link, useParams } from 'react-router-dom'

const card = ({data, setEditName,setEditAge, handleEditClick,deleteUser,setEditUserId,updateUser, editUserId,

    editName,editAge }) => {


          
    
  return (
    <>
     <div className="w3-card-4" style={{width:"100%",height:"30vh",}}>
    <header className="w3-container w3-blue" style={{height:"10vh"}}>
      <h1>{data.name}</h1>
    </header>

    <div className="w3-container" style={{height:"10vh"}}>
      {data.id}
    </div>

    <footer className="w3-container w3-blue" style={{height:"10vh"}}>
   {/* <Edit  
   data={data} setEditName={setEditName}
                  setEditAge={setEditAge}
                  handleEditClick={handleEditClick}
                  deleteUser={deleteUser}
                  setEditUserId={setEditUserId}
                  updateUser={updateUser}
                  editUserId={editUserId}
                  editName={editName}
                  editAge={editAge}/> */}

<Link to={`${data.id}`}><button onClick={() => handleEditClick(data)} className="w3-button w3-green">Edit</button></Link>

<button onClick={() => deleteUser(data.id)} className="w3-button w3-red">Delete</button>
        </footer>
  </div>
    </>
  )
}

export default card
