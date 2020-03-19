import express from "express";
import { ApolloServer } from "apollo-server-express";
import { createServer } from "http";
import compression from "compression";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers
});

app.use(compression());

server.applyMiddleware({ app, path: "/graphql" });

const httpServer = createServer(app);

httpServer.listen({ port: 3000 }, () =>
  console.log(`\n🚀 GraphQL is now running on http://localhost:3000/graphql`)
);
