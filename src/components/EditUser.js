import React from 'react'

function EditUser({setData}) {

  const handleClick = () => {
    setData("anything")
  }


  return (
    <div>
      <h3>This is the EditUser component</h3>
    
      <button onClick={handleClick}>
        Click me
      </button>
    
    </div>
  )
}

export default EditUser