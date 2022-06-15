const express = require('express');

const especialidade = require('../model/Especialidade');


const router = express.Router();

router.post(
    '/especialidade/cadastrarEspecialidade',
    (req, res)=>{
       
        
         let { nome_especialidade} = req.body;

        especialidade.create(
            {nome_especialidade}
        ).then(
            ()=>{
                res.send('Especialidade cadastrada com sucesso!');
            }
        );

    });


    router.get(
        '/especialidade/listarEspecialidade',
        (req, res)=>{
            //{order:['id', 'DESC']}
            especialidade.findAll()
                     .then(
                         (especialidades)=>{
                            res.send(especialidades);
                         }
                     );
    
            res.send('ROTA DE LISTAGEM GERAL DE ESPECIALIDADES');
        }
    );
    router.get( '/epecialidade/listarEspecialidade/:id', (req, res)=>{

        let {id} = req.params;
        // console.log("ID: " + id);
    
        especialidade.findByPk(id)
                 .then(
                     (especialidade)=>{
                        res.send(especialidade);
                     }
                 );
    
    });
    
    router.put(
        '/especialidade/alterarEspecialidade',
        (req, res)=>{
    
            
            let {id, nome_especialidade} = req.body;
    
            especialidade.update(
                    {nome_especialidade},
                    {where: {id}}
            ).then(
                ()=>{
                    res.send('EPECIALIDADE ATUALIZADA');
                }
            );
    
        }
    );

    router.delete(
        '/especialidade/excluirEspecialidade',
        (req, res)=>{
    
            let {id} = req.body;
    
            especialidade.destroy(
                {where: {id}}
            ).then(
    
                ()=>{
                    res.send('ESPECIALIDADE EXCLUÍDA COM SUCESSO');
                }
    
            );
    
        }
    );

    module.exports = router;