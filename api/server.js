const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema');
const cors = require('cors');

const app = express();
app.use('/graphql', cors(), graphqlHTTP({
  schema: schema,
  graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
