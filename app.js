const express = require('express')
const app = express()

app.get('/', (request, response) => {
    response.send('Apenas um teste!')
  })

app.post('/teste', (request, response) => {
    response.send('segunda categoria!')
  })

app.put('/categorias', (request, response) => {
    response.send('terceira categoria!')
  })

  
app.listen(3333, () => {
    console.log('Testando servidor!')
})
