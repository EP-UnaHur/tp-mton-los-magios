const express = require('express')

const carreraRoute = require('./routes/carreraRoute')
const cursoRoute = require('./routes/cursoRoute')
const profesorRoute = require('./routes/profesorRoute')
const materiaRoute = require('./routes/materiaRoute')
const cursoProfesorRoute = require('./routes/cursoProfesorRoute')

const app = express()
app.use(express.json())
app.use(carreraRoute)
app.use(cursoRoute)
app.use(profesorRoute)
app.use(materiaRoute)
app.use(cursoProfesorRoute)


app.listen(3000, async ()=>{
    console.log(`La aplicacion arranco correctamente en el puerto 3000`);
})

