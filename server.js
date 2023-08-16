const express = require('express')
const app = express()
const door = 3333
const arrayObjeto = []

const path = require('path')
const basePath = path.join(__dirname, 'templates')



app.use(express.urlencoded({
    extended: true
})) // Montar um ob. json
app.use(express.json())

//Rota Página Home

app.get('/', (req,res)=>{
    res.sendFile(`${basePath}/Home.html`)

})

// Rota para mostrar cursos

app.get('/Cursos', (req,res)=>{
    res.sendFile(`${basePath}/cursos.html`)

})


//Rota para mostrar o formulario

app.get('/formContato', (req, res)=>{
    res.sendFile(`${basePath}/formContato.html`)

})



//Rota para cadastrar as informações do Formulario

app.post('/user/save', (req,res)=>{
    const {name, number, age, email} = req.body
    arrayObjeto.push({
        nome: name, 
        number: number,
        idade: age,
        email: email
    })

    console.log(arrayObjeto)
    // const name = req.body
    // const age = req.body
    // console.log(`Nome: ${nome}, Contato: ${numero}, email: ${email}, Idade: ${age}`)
    res.sendFile(`${basePath}/FormContato.html`)
})


app.listen(door ,()=>{
    console.log(`servidor rodando na porta ${door}`)
  
})