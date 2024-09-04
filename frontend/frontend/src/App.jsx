import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  
  const [localData , setLocalData]= useState('')

  useEffect(()=>{
    axios.get('http://localhost:5000/').then((response)=>{
      setLocalData(response.data);
    }).catch((error)=>{
      console.log("fail to fatch",error)
    })
  },[])

  console.log(localData)

  return (
    <>
      <div>
        This is data from my API 
        brand {localData.brand}
      </div>
      
    </>
  )
}

export default App
