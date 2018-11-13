import express from 'express';
import mongoose from 'mongoose';

const app = express();
mongoose.connect('mongodb://localhost/graphql-test', { useNewUrlParser: true })
    .then(() => console.log('mongodb connected'))
    .catch(err => console.log(err));
//MongoDB models
import Car from './models/Car';


const { ApolloServer, gql } = require('apollo-server-express');
//graphql
// Imports: GraphQL
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
// Imports: Middleware
import bodyParser from 'body-parser';
import { makeExecutableSchema } from 'graphql-tools';
import  typeDefs  from './schema';
import  resolvers  from './resolvers';
//settings express
app.set('port', 3000 | process.env.PORT);

//como van a lucir los esquemas en graphql , typedefs : como van a lucir los datos ,resolvers : metodos con los cuales interactuemos
const schema = makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers:resolvers 
});
//routes
//ruta donde las aplicaciones que se conectec a este servidor van a poder pedir consultas y crear datos ,
// express . json es para que convierta toda la informacion del cliente en un json
// app.use('/graphql', bodyParser.json(), graphqlExpress({
//     //configuraciones
//     schema,
//     context: {
//         Car
//     }//modelos en los cual seguia (modelo de mongo db)
// }));

const server = new ApolloServer({
    schema: schema,
    context: {
        Car
    }
  });
server.applyMiddleware({ app });



server.applyMiddleware({
    app, // app is from an existing express app
    gui: {
      endpoint: '/graphql'
    }
  });
//start the server
app.listen(app.get('port'), () => {
    console.log('server on port 3000');
});