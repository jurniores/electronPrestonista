const {Sequelize} = require("sequelize");


const configData = require('../config/databases');
const Vendedor = require('../models/VendedorModel/VendedorModel');
const Produto = require('../models/ProductsModel/ProducstMode');
const Vendas = require('../models/VendasModel/VendasModel');


const models = [Produto, Vendedor, Vendas];

const connection = new Sequelize(configData);

models.forEach(valor=>valor.Init(connection));



Vendedor.associate(Vendas);
Vendas.associate(Vendedor);

