import React, { useRef } from 'react'

const UnControlledComp = () => {
    let inputName=useRef(null)
    let inputEmail=useRef(null)

    const handleSubmit = e => {
        e.preventDefault();
        console.log('Name:',inputName.current.value, 'Email:',inputEmail.current.value);
      };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Name' ref={inputName} />
        <input type="text" placeholder='Email' ref={inputEmail} />
      </form>
    </div>
  )
}

export default UnControlledComp
