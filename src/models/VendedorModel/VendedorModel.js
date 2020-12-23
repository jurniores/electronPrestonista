const {Sequelize, Model} = require("sequelize");



module.exports = class Vendedor extends Model{
    static Init(sequelize){
        super.init({
            nome: {
                type: Sequelize.STRING,
                defaultValue:'',
            },
            salario:{
                type: Sequelize.DOUBLE,
                defaultValue:''
                
            }

        },{sequelize})
    }
    static associate(models){
        this.hasMany(models, { foreignKey: "vendedor_id"})
    }
}


 