const { DataTypes, Model } = require('sequelize')
const sequelize = require('../bd')
const Usuario = new require('./usuario')
const tipo = new require ('./tipo')
class Tarefa extends Model{}
Tarefa.init({
      descricao:{
        type:DataTypes.STRING(100),
        allowNull:false
      },
      prioridade:{
        type:DataTypes.ENUM("Alta","Média", "Baixa"),
        allowNull:false
      },
      data_conclusao:{
        type:DataTypes.STRING(100),
        allowNull:false
      },
      data_cadastro:{
        type:DataTypes.STRING(100),
        allowNull:false
      }
        
},{
    sequelize,
    modelName:'tarefa'
  }
)
Usuario.hasMany(Tarefa)
Tarefa.belongsTo(Usuario)
tipo.hasOne(Tarefa)
Tarefa.belongsTo(tipo)
sequelize.sync()
module.exports = Tarefa 