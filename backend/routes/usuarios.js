const { Router } = require('express');
const router = Router();
const mysqlConnection= require('../env/env')

router.get('/', (req, res)=>{
    mysqlConnection.query('SELECT * FROM usuarios', (err, rows, fields)=>{
        if(!err) {
            res.json(rows);
        }else {
            console.log(err);
        }
    });
});

router.post('/', (req, res)=>{
    const { Correo, Contraseña, Nombre_U, Apellido, Departamento, Ciudad, Ocupacion} = req.body;
  
    let usuario = [ Correo, Contraseña, Nombre_U, Apellido, Departamento, Ciudad, Ocupacion];
  
    let nuevoUsuario = `INSERT INTO usuarios( Correo, Contraseña, Nombre_U, Apellido, Departamento, Ciudad, Ocupacion) 
    VALUES( ?, SHA1(?),?,?,?,?,?)`;
    
    mysqlConnection.query(nuevoUsuario, usuario, (err, results, fields)=>{
        if(err){
            return console.error(err.message);
        } else{
            res.json({message: `se ha registrado otro usuario`})
        }
    });
  
  });

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { Correo, Nombre_U, Apellido, Departamento, Ciudad, Ocupacion } = req.body;
    
    let usuario = [Correo, Nombre_U, Apellido, Departamento, Ciudad, Ocupacion, id];
    
    let actualizarUsuario = `UPDATE usuarios SET Correo = ?, Nombre_U = ?, Apellido = ?, Departamento = ?, Ciudad = ?, Ocupacion = ? WHERE id = ?`;
    
    mysqlConnection.query(actualizarUsuario, usuario, (err, results, fields) => {
        if(err){
            return console.error(err.message);
        } else{
            res.json({message: `Usuario actualizado correctamente`})
        }
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM usuarios WHERE id = ?', [id], (err, rows, fields) => {
        if(!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

 

module.exports = router;