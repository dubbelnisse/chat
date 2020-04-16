import { gql } from 'apollo-server-express'
import { messages, pubsub } from '../server'
import {
  QueryResolvers,
  MutationResolvers,
  SubscriptionResolvers,
} from '../__generated__/graphql'
import { v4 as uuidv4 } from 'uuid'

const MESSAGE_ADDED = 'MESSAGE_ADDED'

export const typeDefs = gql`
  type Message {
    id: String!
    userId: String!
    name: String!
    message: String!
    sent: DateTime!
  }

  input MessageInput {
    userId: String!
    name: String!
    message: String!
  }

  extend type Query {
    history: [Message!]!
  }

  extend type Mutation {
    addMessage(input: MessageInput!): [Message!]!
  }

  extend type Subscription {
    messageAdded: Message!
  }
`

interface Resolvers {
  Query: QueryResolvers
  Mutation: MutationResolvers
  Subscription: SubscriptionResolvers
}

export const resolvers: Resolvers = {
  Query: {
    history: () => messages,
  },
  Mutation: {
    addMessage: (_, { input }) => {
      const newInput = {
        ...input,
        id: uuidv4(),
        sent: new Date(),
      }

      pubsub.publish(MESSAGE_ADDED, { messageAdded: newInput })

      if (messages.length > 4) {
        messages.sort((a, b) => a.sent - b.sent).shift()
      }

      messages.push(newInput)

      return messages
    },
  },
  Subscription: {
    messageAdded: {
      subscribe: () => pubsub.asyncIterator([MESSAGE_ADDED]),
    },
  },
}
