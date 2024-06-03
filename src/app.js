const express = require('express')

const carreraRoute = require('./routes/carreraRoute')
const cursoRoute = require('./routes/cursoRoute')
const profesorRoute = require('./routes/profesorRoute')
const materiaRoute = require('./routes/materiaRoute')
const db = require('./db/models')

const app = express()
app.use(express.json())
app.use(carreraRoute)
app.use(cursoRoute)
app.use(profesorRoute)
app.use(materiaRoute)



app.listen(3000, async ()=>{
    console.log(`La aplicacion arranco correctamente en el puerto 3000`);

    try {
        await db.sequelize.authenticate();
        await db.sequelize.sync({force:true});

        const carreraTest = db.Carrera.create({
            nombre: 'carreraTest',
            grado: '1',
            universidad: 'UTN'
        });

        const materiaTest = db.Materia.create({
            nombre: 'materiaTest',
            cuatrimestral: 1,
            anio: 1,
            carreraId: 1
        });

        const cursoTest = db.Curso.create({
            comision: 'A',
            turno: 'tarde',
            fechaInicio: new Date('2024-06-02'),
            fechaFin: new Date('2024-06-10'),
            materiaId: 1
        });

        const profesorTest = db.Profesor.create({
            nombre: 'profesorTest',
            fechaNacimiento: new Date('2001-01-28'),
            legajo: 1,
            activo: 1
        })
    } catch (error) {
        console.log(error);
    }
})

