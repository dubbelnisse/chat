import express from 'express'
import { ApolloServer, gql, PubSub } from 'apollo-server-express'
import {
  typeDefs as chatDefs,
  resolvers as chatResolvers,
} from './resolvers/chat'
import merge from 'lodash.merge'
import { Message, User } from './__generated__/graphql'
import http from 'http'
import config from './config'

export const pubsub = new PubSub()

export const messages: Message[] = []
export const users: User[] = []

const typeDefs = gql`
  """
  An ISO-8601 encoded UTC date string.
  """
  scalar DateTime

  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }

  type Subscription {
    _empty: String
  }
`

const server = new ApolloServer({
  typeDefs: [typeDefs, chatDefs],
  resolvers: merge(chatResolvers),
})

const app = express()

server.applyMiddleware({ app })

const httpServer = http.createServer(app)
server.installSubscriptionHandlers(httpServer)

httpServer.listen({ port: config.port }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${config.port}${server.graphqlPath}`
  )
)
