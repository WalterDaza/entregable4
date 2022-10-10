import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

const defaultValues = {
    email: "",
    password: "",
    first_name:"",
    last_name:"",
    birthday: ""
}

const Form = ({createNewUser, updateInfo, updateUserbyId, setUpdateInfo, setFormIsClose}) => {

    const {handleSubmit, reset, register} = useForm () 
    //useForm = libreria para un CRUD

    const submit = data =>{
        if(updateInfo){
            updateUserbyId(updateInfo.id, data) // funcion update
            setUpdateInfo()
        }else{
            createNewUser(data) // funcion create
        }
        reset(defaultValues)
        setFormIsClose(true)
    }

    useEffect (() => {
            if(updateInfo){
                reset(updateInfo)  // se recibe la informción del carUser y se implementa en el reset para renderizar en el form
            }
    },[updateInfo])

    const handleCloseForm = () => {
        setFormIsClose(true)
    }

  return (
    <form className='form' onSubmit={handleSubmit(submit)}>
        <i onClick={setFormIsClose} className='form_x bx bxs-x-circle'></i>
        <h2 className='form_title'>{updateInfo ? "Update Info" : "New User"}</h2>
        <div className='form_container_label_input'>
            <label className='form_label' htmlFor="first_name">First name</label>
            <input className='form_input' placeholder='Enter you first name' type="text" id="first_name" {...register("first_name")}/>
        </div>
        <div className='form_container_label_input'>
            <label className='form_label' htmlFor="last_name">Last name</label>
            <input className='form_input' placeholder='Enter you last name' type="text" id="last_name" {...register("last_name")}/>
        </div>
        <div className='form_container_label_input'>
            <label className='form_label' htmlFor="email">Email</label>
            <input className='form_input' placeholder='Enter you email' type="email" id="email" {...register("email")}/>
        </div>
        <div className='form_container_label_input'>
            <label className='form_label' htmlFor="password">Password</label>
            <input className='form_input' placeholder='Enter you password' type="password" id="password" {...register("password")}/>
        </div>
        <div className='form_container_label_input'>
            <label className='form_label' htmlFor="birthday">Birthday</label>
            <input className='form_input' type="date" id="birthday" {...register("birthday")}/>
        <button className='form_button'>{updateInfo ? "Update" : "Create"}</button>
        </div>
    </form>
  )
}

export default Form