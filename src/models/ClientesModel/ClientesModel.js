const {Sequelize, Model} = require("sequelize");



module.exports = class Cliente extends Model{
    static Init(sequelize){
        super.init({
            nome: {
                type: Sequelize.STRING,
                defaultValue:'',
            },
            email:{
                type: Sequelize.STRING,
                defaultValue:'',
                unique: {
                    args: true,
                    msg: "Email já existe!"
                }

            },
            tel:{
                type: Sequelize.INTEGER,
                defaultValue:''
                
            }

        },{sequelize})
    }
    static associate(models){
        this.hasMany(models, { foreignKey: "vendidos_id"})
    }
}


 