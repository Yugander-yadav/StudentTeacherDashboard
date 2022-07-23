import React,{useState, useEffect,useCallback} from 'react'
import DenseTable from './Table';
import Form from './Form'
import ButtonAppBar from './Navbar'
import Container from '@mui/material/Container';
import axios from "axios"

function App() {
  const [get,setget]=useState(false)
  const [data,setData]=useState([])
  const [updateRequired,setUpdateRequired]=useState(0)
  let table_data=[]
  let updated={};
   

  const download =async()=>{
   
    const response = await fetch("https://62914c5e27f4ba1c65ca9625.mockapi.io/google")
    const  datas= await response.json()
    setData(datas)
    }



  const upload =(formdata,tableData)=>{
    console.log(formdata)
    const response=axios.post("https://62914c5e27f4ba1c65ca9625.mockapi.io/google",formdata).then((response)=>{
      
  setData([...data,response.data])
  
  })



  
    
}




const deleteData=(id,ind)=>{
  const response = axios.delete(`https://62914c5e27f4ba1c65ca9625.mockapi.io/google/${id}`).then((response)=>{
  if(response.status==200){
  let sample=[...data]
  sample.splice(ind,1)
  console.log(sample)

    setData([...sample])
  
  }
  else{
    console.log("...")
  }
  })

}



   useEffect(()=>{
    download()
      
    }
  
   ,[updateRequired])
   
  
  




  return (
    
    <div>
      <ButtonAppBar/>
      <Container sx={{m:"1rem"}}> 
      <Form updateClicked={updated} enter={upload}></Form>
      
      <DenseTable deleteRow={deleteData} data={data}></DenseTable>

      </Container>

      
    </div>
  )
}

export default App