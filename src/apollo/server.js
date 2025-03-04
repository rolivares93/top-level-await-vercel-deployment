import { ApolloServer } from '@apollo/server'
import { resolvers } from './resolvers.js'
import { schema } from './schema.js'

export const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
})
