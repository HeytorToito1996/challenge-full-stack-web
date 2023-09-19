const connection  = require('./Conexao');

const Student = connection.sequelize.define('Students',{
    name:{
        type:connection.Sequelize.STRING
    },

    email:{
        type:connection.Sequelize.STRING
    },

    RA:{
        type:connection.Sequelize.INTEGER,
        primaryKey:true
    },

    cpf:{
        type:connection.Sequelize.INTEGER
    }
});

//Student.sync({force:true});
module.exports = Student;