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

const getStudent = async function(request,response,ra) {
    try {
        const student = await Student.findOne({where:{RA:ra}});
        if (!student||student === 0) {
            console.log('Não há nenhum aluno cadastrado com este RA');
        }
        else{
            response.json(student);
        }
    } catch (error) {
        console.error('Ocorreu um Problema ao obter os dados deste Aluno',error);
    }
}
const createStudent = async function(aluno,response) {
    let RAexists = await Student.findOne({where:{RA:aluno.ra}});
    if (RAexists) {
        console.log('Já Existe um Aluno com Esse RA');
    } else {
        const newStudent = await Student.create({
            name:aluno.name,
            cpf:aluno.cpf,
            RA:aluno.ra,
            email:aluno.email
        });
        console.log('Aluno Cadastrado com Sucesso');
    }
    //response.status(201).json(newStudent);
}

const updateStudent = async function(aluno,response) {
    const newStudent = await Student.update({
        name:aluno.name,
        cpf:aluno.cpf,
        RA:aluno.ra,
        email:aluno.email
    },{where:{RA:aluno.ra}});
}

const deleteStudent = async function(aluno,response) {
    await Student.destroy({where:{RA:aluno.RA}});
}

module.exports = {getStudent,getStudents,createStudent,updateStudent,deleteStudent}