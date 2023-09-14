const { request } = require('express');
const Student = require('../models/Aluno');
const { where } = require('sequelize');

const getStudents = async function(request,response) {
    
    try {
        const StudentList = await Student.findAll();
        if (!StudentList || StudentList.length === 0) {
            return response.status(404).send('Nenhum Aluno Cadastrado');
        }
        console.log(StudentList);
    } catch (error) {
        console.error('Erro ao Buscar Alunos', error);
        return response.status(500).send('Erro ao Buscar Alunos');
    }

    //response.JSON(StudentList);
}

const createStudent = async function(aluno,response) {
    const newStudent = await Student.create({
        name:aluno.name,
        cpf:aluno.cpf
    });
    
   // response.status(201).json(newStudent);
}

const updateStudent = async function(aluno,response) {
    const newStudent = await Student.update({
        name:aluno.name,
        cpf:aluno.cpf
    },{where:{id:aluno.id}});
}

const deleteStudent = async function(aluno,response) {
    await Student.destroy({where:{id:aluno.id}});
}

module.exports = {getStudents,createStudent,updateStudent,deleteStudent}