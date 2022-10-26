const express = require('express')
const app = express()

app.use(express.static('public'));


app.get('/', (req, res) => {
    res.send('Agora vai!!!')
  })

  app.get('/categorias', (req, res) => {
    res.send('Listar categorias')
  })

  app.post('/categorias', (req, res) => {
    res.status(201).send('Criando categorias')
  })

  app.put('/altCategorias', (req, res) => {
    res.send('Alterar categorias')
  })

  app.delete('/exCategorias', (req, res) => {
      res.send('Excluir categoria')
  })

  app.listen(3000, () => {
    console.log('Servidor web ok!')
  })