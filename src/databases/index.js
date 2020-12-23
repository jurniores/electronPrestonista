const { Sequelize } = require("sequelize");


const configData = require('../config/databases');
const Vendedor = require('../models/VendedorModel/VendedorModel');
const Produto = require('../models/ProductsModel/ProducstMode');
const VendasV = require('../models/VendasModel/VendasModel');
const Cliente = require('../models/ClientesModel/ClientesModel');
const VendidoC = require('../models/VendidosModel/VendidosModel')


const models = [Produto, Vendedor, VendasV, Cliente, VendidoC];

const connection = new Sequelize(configData);

models.forEach(valor => valor.Init(connection));



Vendedor.associate(VendasV);
VendasV.associate(Vendedor);
Cliente.associate(VendidoC);
VendidoC.associate(Cliente);

