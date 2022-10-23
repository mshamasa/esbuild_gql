import {ApolloServer} from 'apollo-server'
import {ApolloServerPluginLandingPageLocalDefault} from 'apollo-server-core'

import {typeDefs, resolvers} from './schema'

// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [
    ApolloServerPluginLandingPageLocalDefault({ embed: true }),
  ]
});

const startServer = async () => {

const {url}= await server.listen();
  console.log(`🚀  Server ready at ${url}`);
}

startServer();
