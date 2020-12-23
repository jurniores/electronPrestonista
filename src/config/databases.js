require('dotenv').config();

module.exports = {
    dialect: process.env.DIALECT,
    host: process.env.HOST,
    port: process.env.PORT,
    username: process.env.NAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
}