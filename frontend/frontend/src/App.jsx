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


function App() {
  
  // const [localData , setLocalData]= useState('')
  // useEffect(()=>{
  //   axios.get('http://localhost:5000/').then((response)=>{
  //     setLocalData(response.data);
  //   }).catch((error)=>{
  //     console.log("fail to fatch",error)
  //   })
  // },[])
  // console.log(localData)

  return (
    <>
 <BrowserRouter>
 <NavBar/>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<GetAllusers />} />
          <Route path="/addUser" element={<AddUser />} />
          {/* <Route path="contact" element={<Contact />} /> */}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    



      
    </>
  )
}

export default App
