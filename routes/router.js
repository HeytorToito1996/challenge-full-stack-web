const express = require('express');
const router = express.Router();
const controllers = require('../controllers/StudentController.js');

router.get('/',function(request,response) {
    response.send('Início da Aplicação');
})

router.get('/consulta',async function(request,response) {
    await controllers.getStudents(request,response);
    response.send('Aqui Serão Listados os Alunos');
})

router.get('/cadastroAluno',function(request,response) {
    response.send('Aqui é onde aparecerá o formulário de cadastro de novos alunos');
});

router.post('/cadastrarAluno',async function(request,response) {
   try {
    const aluno = {
        name:request.body.name,
        cpf: request.body.cpf
    }
    const newStudent = await controllers.createStudent(aluno);
    console.log('Aluno Cadastrado com Sucesso');

   } 
   catch (error) {
    console.error('Ocorreu um problema ao cadastrar este aluno', error);
    response.status(500).send('Falha ao Cadastrar este aluno');
   }
})

router.get('/editaAluno/:ra',function(request,response) {
    response.send('Aqui é onde aparecerá o formulário para edição do cadastro de um determinado aluno');
})

router.post('/editarAluno/',async function(request,response) {
    try {
        const student = {
            name:request.body.name,
            cpf:request.body.cpf,
            id:request.body.id
        }
        const newStudent = await controllers.updateStudent(student);
        console.log('Aluno Atualizado com Sucesso');
    } catch (error) {
        console.error('Ocorreu um Problema ao Atualizar as Informações do Aluno',error);
        response.status(500).send('Falha ao Atualizar as Informações deste aluno');
    }
});

router.get('/excluirAluno/:id',async function(request,response){
    try {
        const student = {
            name:request.body.name,
            cpf:request.body.cpf,
            id:request.params.id
        }
        const deletedStudent = await controllers.deleteStudent(student);
        console.log('Aluno Excluído com Sucesso');
    } catch (error) {
        console.error('Ocorreu um problema ao Excluir este registro do Banco de dados');
        response.status(500).send('Falha ao Excluir este Aluno');
    }
})

module.exports = router