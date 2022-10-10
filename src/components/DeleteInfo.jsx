import React from 'react'

const DeleteInfo = ({setDeleteUser}) => {

    const handleDeleteUser = () => {
        setDeleteUser(true)
      }

  return (
    <div className='delete'>
        <h1>Delete User</h1>
        <p>The user has been deleted successfully</p>
        <button className='form_button' onClick={handleDeleteUser}>Accept</button>
    </div>
  )
}

export default DeleteInfo