/* eslint-disable no-console */
import { ApolloServer } from 'apollo-server-express';
import compression from 'compression';
import express from 'express';
import { createServer } from 'http';
import config from '../config';
import resolvers from '../graphql/resolvers';
import typeDefs from '../graphql/schema';
import { getUser, connectDatabase } from '../utils';
import { Context } from '../types';

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }): Promise<Context> => {
    const token = req.headers.authorization || '';
    const user = await getUser(token);
    return { user };
  }
});

app.use(compression());

server.applyMiddleware({ app, path: '/graphql' });

const httpServer = createServer(app);

connectDatabase()
  .then(() => {
    httpServer.listen({ port: config.port }, () => console.log(`\n🚀 GraphQL is now running on http://localhost:${config.port}/graphql`));
  })
  .catch((err) => {
    console.log(err);
  });
