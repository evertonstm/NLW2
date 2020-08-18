import express from 'express';

const app = express();

app.use(express.json());

//GET: Buscar ou lista uma informação
//POST: Criar alguma nova informação
//PUT: Atualizar uma informação existente
//DELETE: Deletar uma informação existente

//Parametros
//Corpo (request Body): Dados para criação de um registro
//route params: identificar qual recurso eu quero atualizar ou deletar
//query Params: paginação, filtros, ordenação

app.post('/users', (request, response ) => {
  console.log(request.body)

  const users = [
    {name: "Everton Reis", age:25},
    {name:"DAvid", age:21},
  ]
  return response.json(users)
});

app.listen(3333);
