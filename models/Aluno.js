const connection  = require('./Conexao');

const Student = connection.sequelize.define('Students',{
    name:{
        type:connection.Sequelize.STRING
    },

    cpf:{
        type:connection.Sequelize.INTEGER
    }
});

//Student.sync({force:true});
module.exports = Student;