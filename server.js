const express = require('express')
const app = express()
const port = 3000

const path = require('path')
const basePath = path.join(__dirname,'templates')



app.use(express.urlencoded({
    extended: true
})) // Montar um ob. json
app.use(express.json())


//Rota para mostrar o formulario

app.get('/users/add', (req,res)=>{
    res.sendFile(`${basePath}/FormContato.html`)

})

//Rota para cadastrar as informações do Formulario

app.post('/user/save', (req,res)=>{
    const {name, numero, age, email} = req.body
    // const name = req.body
    // const age = req.body
    console.log(`Nome: ${name}, Contato: ${numero}, email: ${email}, Idade: ${age}`)
    res.sendFile(`${basePath}/FormContato.html`)
})


app.listen(port,()=>{
    console.log('servidor rodando...')
  
})