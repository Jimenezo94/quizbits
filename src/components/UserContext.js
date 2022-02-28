import React from 'react'

const UserContext = React.createContext({
    id: "00",
    correo: "",
    contraseña:"",
})

export default UserContext