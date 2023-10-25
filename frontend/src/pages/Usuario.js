import React from "react";

class Usuarios extends React.Component {
    state ={
        data: []
    }
    async componentDidMount(){
        await this.fetchUsuarios()
    }
    fetchUsuarios = async () => {
        let res = await fetch("http://localhost:4001/api/usuarios")
        let data = await res
        
        console.log(data)
    }
    rende(){
        return (
            <div>
                <h1>Usuarios</h1>

            </div>
        )
    }

}
export default Usuarios;