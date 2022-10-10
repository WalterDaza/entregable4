import React from 'react'

const CardUser = ({user, deleteUserById, setUpdateInfo, setFormIsClose}) => {

    const handleUpdate = () => { //guarda la informacion del usuario para pasarla al form
        setUpdateInfo(user)
        setFormIsClose(false)
    }

  return (
    <article className='carduser'>
        <h2 className='carduser_title'>{`${user.first_name} ${user.last_name}`}</h2>
        <h3 className='carduser_info email'><i className='bx bx-envelope'></i> {user.email}</h3>
        <h3 className='carduser_info birthday'><i className='bx bx-calendar'></i> {user.birthday}</h3>
        <section className='carduser_button_container'>
            <button className='button_update'onClick={handleUpdate}>
              <i className='bx bx-edit-alt'></i></button>
            <button className='button_delete' onClick={() => deleteUserById(user.id)}>
              <i className='bx bx-trash'></i></button>
        </section>
    </article>

  )
}

export default CardUser