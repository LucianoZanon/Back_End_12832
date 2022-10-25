const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Agora vai!!!')
  })

  app.get('/categorias', (req, res) => {
    res.send('Listar categorias')
  })

  app.post('/categorias', (req, res) => {
    res.status(201).send('Criando categorias')
  })

  app.put('/categorias', (req, res) => {
    res.send('Alterar categorias')
  })

  app.delete('/categorias', (req, res) => {
    res.send('Excluir categorias')
  })

app.listen(3000, () => {
    console.log('Servidor web ok!')
})