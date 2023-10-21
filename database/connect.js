const mongoose = require("mongoose")
const user = process.env.USER
const pass = process.env.PASS

function connectToDatabase(){
    mongoose.connect(`mongodb+srv://${user}:${pass}@cluster0.zrrjzyh.mongodb.net/?retryWrites=true&w=majority`)

    const connection = mongoose.connection

    connection.on("open", ()=>{
        console.log("Conectado ao banco de dados com sucesso!")
    })

    connection.on("error", (error)=>{
        console.log("Erro ao conectar ao banco de dados: " + error)
    })
}

connectToDatabase()
module.exports = mongoose