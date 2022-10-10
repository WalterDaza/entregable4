import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardUser from './components/CardUser'
import DeleteInfo from './components/DeleteInfo'
import Form from './components/Form'
import "./Formstyle.css"

function App() {

  const baseURL = "https://users-crud1.herokuapp.com"

  const [users, setUsers] = useState()
  const [updateInfo, setUpdateInfo] = useState() // se crea para pasa info de CardUser a Form. por el Update
  const [formIsClose, setFormIsClose] = useState(true)
  const [deleteUser, setDeleteUser] = useState(true)


  // acceder a todos los users (.get)
  const getAllUsers =()=>{
      const URL = `${baseURL}/users/`
      axios.get(URL)
        .then(res => setUsers(res.data))
        .catch(err => console.log(err))
  }

  // console.log(users)

  useEffect(() => {
    getAllUsers()
  },[])

  // crear un nuevo usuario (.post)
  const createNewUser = data => {
    const URL = `${baseURL}/users/`
    axios.post(URL, data)
      .then(res => {
        console.log(res)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  //eliminar un usuario (.delete)
  const deleteUserById = id => {
    const URL = `${baseURL}/users/${id}/`
    axios.delete(URL)
      .then(res => {
        console.log(res.data)
        getAllUsers()
        setDeleteUser(false)
      })
      .catch(err => console.log(err))
  }

  //actulizar un usuario (.path)
  const updateUserbyId = (id, data) => {
    const URL = `${baseURL}/users/${id}/`
    axios.patch(URL, data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  const handleOpenForm = () => {
    setFormIsClose(false)
  }

  return (
    <div className="App">
      <div className='cabecera_container'>
      <h1 className='title_web'>Users CRUD</h1>
      <button onClick={handleOpenForm} className="button_create_web">Create a New User</button>
      </div>
      <div className={`form_container ${formIsClose && "disable_form"}`}>
      <Form 
      createNewUser = {createNewUser}
      updateInfo={updateInfo}//update se envia a Form la informacion guardada de CardUser
      updateUserbyId={updateUserbyId} // funcion de updates
      setUpdateInfo={setUpdateInfo}
      setFormIsClose={setFormIsClose}
      />
      </div>
      <div className='CardUser_container'>
      {
        users?.map(user => (
          <CardUser 
          key = {user.id}
          user={user}
          deleteUserById={deleteUserById}
          setUpdateInfo={setUpdateInfo}//update guarda infromacion del user en cardUser
          setFormIsClose={setFormIsClose}
          setDeleteUser={setDeleteUser}
          />
        ))
      }
      </div>
      <div className={`deleteuser_cointainer ${deleteUser && "disable_deleteuser"}`}>
        <DeleteInfo
           setDeleteUser= {setDeleteUser}
        />
        </div>
    </div>
  )
}

export default App
