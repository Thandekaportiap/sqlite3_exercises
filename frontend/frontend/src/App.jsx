import { useEffect, useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios'
import Card from './components/card'
import NavBar from './components/navBar'
import GetAllusers from './components/getAllusers'
import Footer from './components/footer';
import NoPage from './pages/noPage';
import AddUser from './pages/addUser';
import Layout from './pages/layout';
import Edit from './pages/edit';


function App() {
  
  const [localData , setLocalData]= useState('')
  useEffect(()=>{
    axios.get('http://localhost:5000/users').then((response)=>{
      setLocalData(response.data);
    }).catch((error)=>{
      console.log("fail to fatch",error)
    })
  },[])
  console.log(localData)

  return (
    <>
 <BrowserRouter>
 <NavBar/>
      <Routes>
        
         
          <Route path="/"  >
            <Route index element={<GetAllusers/>}/>
            <Route path=":id" element={<Edit data={localData}/>}/>
          </Route>
          <Route path="/addUser" element={<AddUser />} />
          {/* <Route path="contact" element={<Contact />} /> */}
          <Route path="*" element={<NoPage />} />

      </Routes>
      <Footer/>
    </BrowserRouter>
    



      
    </>
  )
}

export default App
