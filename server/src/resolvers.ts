import { IResolvers } from "graphql-tools";

const resolvers: IResolvers = {
  Query: {
    hello(): string {
      return `👋 Hello world! 👋`;
    }
  }
};

export default resolvers;
