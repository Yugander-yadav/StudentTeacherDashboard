import { selectUnstyledClasses } from '@mui/base'
import React from 'react'
import {useState,useRef} from 'react'

function Form(props) {
  let name=useRef()
  let subone=useRef()
  let subtwo=useRef()
  let subthree=useRef()
  const [error,setError]=useState(false)
  const [data,setData]=useState({
    name:" ",
    subone:" ",
    subtwo:" ",
    subthree:" "
  })


  
    
  
  

      const sendData=()=>{
        
        if((data.name.trim()).length===0||data.subone===" "|| data.subone==="Select" ||data.subtwo===" "| data.subtwo==="Select"|| data.subthree===" "| data.subthree==="Select" )
        {
            
           setError(true)
           
          }else{
            setError(false)
            const sample=[
              name,
              subone,
              subtwo,
              subthree
            ]
            props.enter(data,sample)
            
            
            
          }
        
  }
    return (
    <div>
        <form style={{display:"flex","flexDirection":"column","maxWidth":"600px","margin":"auto","border":"1px solid gray","padding":"10px","borderRadius":"10px"}}>
            <div style={{width:"300px",margin:'auto'}}>
            <label  style={{fontSize:"0.7em"}}htmlFor="name">Student Name:</label>
            <input ref={name} id="name" type="text" 
            onBlur={(e)=>{setData({...data,"name":e.target.value})}}>

            </input>
            
            </div>
            <hr></hr>
           <div style={{width:"400px",margin:"auto",display:"flex",margingTop:"15px",justifyContent:"space-between"}}>
                    <div>
                    <label style={{margin:"auto",fontSize:"0.7em"}} htmlFor="subone">SUBJECT 1</label>
            <select ref={subone} id='subone' onChange={(e)=>{setData({...data,"subone":e.target.value})}}  name="teachers">
                <option default value={null}>Select</option>
                <option value="Teacher 1">Teacher 1</option>
                <option value="Teacher 2">Teacher 2</option>
                <option value="Teacher 3">Teacher 3</option>
            </select>
                    </div>
             <div>
             <label  style={{margin:"auto",fontSize:"0.7em"}} htmlFor="subtwo">SUBJECT 2</label>
            <select ref={subtwo} id='subtwo' onChange={(e)=>{setData({...data,subtwo:e.target.value})}}  name="teachers">
                <option default value= {null}>Select</option>
                <option value="Teacher 1">Teacher 1</option>
                <option value="Teacher 2">Teacher 2</option>
                <option value="Teacher 3">Teacher 3</option>
            </select>
             </div>
        <div>
        <label  style={{margin:"auto",fontSize:"0.7em"}}label="subthree">SUBJECT 3</label>
            <select ref={subthree} id='subthree' onChange={(e)=>{setData({...data,subthree:e.target.value})}}  name="teachers">
                <option default value={null}>Select</option>
                <option value="Teacher 1">Teacher 1</option>
                <option value="Teacher 2">Teacher 2</option>
                <option value="Teacher 3">Teacher 3</option>
            </select>
           </div>
        </div>
              {error?<h5 style={{margin:"auto",padding:"10px",color:"red"}}>Data not filled Properly</h5>:""}
            <div style={{margin:"auto"}}>
                <button style={{marginTop:"5px"}} onClick={(e)=>{e.preventDefault()
                sendData()
                }}>Submit</button>
            </div>
        </form>

    </div>
  )
}

export default Form