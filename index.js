const { app, BrowserWindow } = require("electron");
require('dotenv').config();
require('./src/databases/index');

const Vendedor = require("./src/models/VendedorModel/VendedorModel");
const Produto = require("./src/models/ProductsModel/ProducstMode");
const Vendas = require("./src/models/VendasModel/VendasModel");
const Cliente = require("./src/models/ClientesModel/ClientesModel");
const VendidosC = require("./src/models/VendidosModel/VendidosModel");



async function createWindow() {
    const view = new BrowserWindow({
        width: 1000,
        height: 650,
        webPreferences: {
            nodeIntegration: true
        }

    })

    view.loadURL(`file://${__dirname}/index.html`)

    
}


app.on("ready", createWindow)