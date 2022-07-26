import { ApolloServer, gql } from 'apollo-server';

// SDL (Schema Definition Language)
const typeDefs = gql`
  type Query {
    allTweets: [Tweet]
    tweet(id: ID): Tweet
  }

  type Mutation {
    postTweet(text: String, userId: ID): Tweet
    deleteTweet(id: ID): Boolean
  }

  type Tweet {
    id: ID
    text: String
    author: User
  }

  type User {
    id: ID
    username: String
  }
`;

const server = new ApolloServer({ typeDefs });

server.listen().then(({ url }) => {
  console.log(`Running on ${url}`);
});
