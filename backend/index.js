const express = require('express');

const {listen} = require('express/lib/application');

const app = express();


app.use(express.json());

app.use(express.urlencoded({extended:true}));

const Medico = require('./model/Medico');
const Especialidade = require('./model/Especialidade');

const especialidadeController = require('./controller/EspecialidadeController');
app.use('/', especialidadeController);

const medicoController = require('./controller/MedicoController');
app.use('/', medicoController);




app.listen(3000,()=>{
    console.log('Servidor Inciado')
});