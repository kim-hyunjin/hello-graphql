import { ApolloServer, gql } from 'apollo-server';

const users = [
  {
    id: '1',
    lastName: 'Kim',
    firstName: 'Hyunjin',
  },
  {
    id: '2',
    lastName: 'Doe',
    firstName: 'John',
  },
];

let tweets = [
  {
    id: '1',
    text: 'hello',
    author: users[0],
  },
  {
    id: '2',
    text: 'how are you?',
    author: users[1],
  },
];

// SDL (Schema Definition Language)
const typeDefs = gql`
  type Query {
    allTweets: [Tweet!]!
    tweet(id: ID!): Tweet
    allUsers: [User!]!
  }

  type Mutation {
    postTweet(text: String!, userId: ID!): Tweet!
    deleteTweet(id: ID!): Boolean!
  }

  type Tweet {
    id: ID!
    text: String!
    author: User!
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String
    fullname: String!
  }
`;

const resolvers = {
  Query: {
    allTweets() {
      return tweets;
    },
    tweet(root, { id }) {
      return tweets.find((tweet) => tweet.id === id);
    },
    allUsers() {
      return users;
    },
  },
  Mutation: {
    postTweet(root, { text, userId }) {
      const user = users.find((user) => user.id === userId);
      const newTweet = {
        id: tweets.length + 1,
        text,
        author: user,
      };
      tweets.push(newTweet);
      return newTweet;
    },
    deleteTweet(root, { id }) {
      const tweet = tweets.find((tweet) => tweet.id === id);
      if (!tweet) return false;

      tweets = tweets.filter((tweet) => tweet.id !== id);
      return true;
    },
  },
  User: {
    fullname(root) {
      return `${root.firstName} ${root.lastName}`;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Running on ${url}`);
});
