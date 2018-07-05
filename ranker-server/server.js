//mongoose connection
//apollo-client

//./mongoose/ schema(model)

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './server/graphql/resolvers'
import typeDefs from './server/graphql/schema';

const db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    console.log("** Connected to mongod server");
});
mongoose.connect('mongodb://localhost:27017');

const schema = makeExecutableSchema(
  {
    typeDefs,
    resolvers
  }
);

const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));
app.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}));

app.listen(4000, () => console.log('** Now browse to localhost:4000/graphiql'));