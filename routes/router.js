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

router.post('/editarAluno/:ra',function(request,response) {
    console.log('Atualizou Gostoso');
});

router.get('/excluirAluno',function(request,response){
    response.send('Excluiu');
})

module.exports = router