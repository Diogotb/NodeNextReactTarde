const mongoose = require('mongoose');//importando o módulo mongoose
require('dotenv').config();//importando o módulo do dotenv


mongoose.connect(process.env.DATABASE_URL)//estabelecendo conexão
.then(() => console.log('Conectado ao MongoDB'))
.catch(err => console.error('Erro ao conectar ao MongoDB', err));


module.exports = mongoose;
