const {Sequelize, Model} = require("sequelize");



module.exports = class Produto extends Model{
    static Init(sequelize){
        super.init({
            nome: {
                type: Sequelize.STRING,
                defaultValue:'',
            },
            tipo:{
                type: Sequelize.STRING,
                defaultValue:''
                
            },
            price:{
                type: Sequelize.DOUBLE,
                defaultValue:''
                
            },
            code: {
                type: Sequelize.STRING,
                defaultValue:''
            }


        },{sequelize})
    }

}


 