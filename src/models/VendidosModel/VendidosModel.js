const {Sequelize, Model} = require("sequelize");
const { belongsTo } = require("../ProductsModel/ProducstMode");



module.exports = class Vendido extends Model{
    static Init(sequelize){
        super.init({
            produto: {
                type: Sequelize.STRING,
                defaultValue:'',
            },
            price:{
                type: Sequelize.DOUBLE,
                defaultValue:''
                
            },
            parc:{
                type: Sequelize.INTEGER,
                defaultValue:'',
            },

            cliente_id:{
                type: Sequelize.INTEGER,
                defaultValue:''
                
            }
        


        },{sequelize})
    }
    static associate(models){
        this.belongsTo(models, { foreignKey: "cliente_id"})
    }
}


 