const {Sequelize, Model} = require("sequelize");
const { belongsTo } = require("../ProductsModel/ProducstMode");



module.exports = class Venda extends Model{
    static Init(sequelize){
        super.init({
            nome: {
                type: Sequelize.STRING,
                defaultValue:'',
            },
            price:{
                type: Sequelize.DOUBLE,
                defaultValue:''
                
            },
            vendedor_id:{
                type: Sequelize.INTEGER,
                defaultValue:''
                
            }
        


        },{sequelize})
    }
    static associate(models){
        this.belongsTo(models, { foreignKey: "vendedor_id"})
    }
}


 