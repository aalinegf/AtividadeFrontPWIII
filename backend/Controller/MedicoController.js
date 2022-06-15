const express = require('express');

const app = express();
const router = express.Router();

const medico = require('../model/Medico');



router.post('/medico/cadastrarMedico' ,(req, res)=>{

    

const { nome_medico, email_medico, telefone_medico, celular_medico, tblEspecialidadeId } = req.body;


medico.create(
    {
        nome_medico,
        email_medico,
        telefone_medico,
        celular_medico,
        tblEspecialidadeId

    }
).then(
    ()=>{
        res.send('Medico cadastrado com sucesso!');      
    }
);
});


router.get('/medico/listarMedico', (req, res)=>{

    medico.findAll()
          .then((medicos)=>{
              res.send(medicos)
          });
});

router.get('/medico/listarMedicoCodigo/:id', (req, res)=>{

    const { id } = req.params

    medico.findByPk(id)
          .then((medicoId)=>{
              res.send(medicoId)
          });
});

router.delete('/medico/excluirMedico', (req,res)=>{
    const {id} = req.body;

    medico.destroy(
        {where:{id}}
    ).then(
        () =>{
            res.send('Medico excluido com sucesso!')
        }
    )
});

router.put('/medico/alterarMedico', (req,res)=>{

    const {nome_medico, email_medico, telefone_medico,celular_medico, tblEspecialidadeId, id} = req.body;

    medico.update(
        {
            nome_medico,
            telefone_medico,
            email_medico,
            telefone_medico,
            celular_medico,
            tblEspecialidadeId
        },
        {where: {id}}
    ).then(
        () =>{
            res.send('Medico atualizado com sucesso')
        }
    )
})


module.exports = router;





