import React, { useState } from 'react'

const ControlledComp = () => {
    let [name,setName]=useState('')
    let [email,setemail]=useState('')

    let handleSubmit=(event)=>{
        event.preventDefault()
        console.log('Controlled Form','Name:',name,'Email:',email);
        
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} placeholder='Name' onChange={(e)=>setName(e.target.value)} />
        <input type="email" value={email} placeholder='Email' onChange={(e)=>setemail(e.target.value)} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default ControlledComp
