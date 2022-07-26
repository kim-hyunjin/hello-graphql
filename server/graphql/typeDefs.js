import { gql } from 'apollo-server';

// SDL (Schema Definition Language)
export const typeDefs = gql`
  type Query {
    """
    Get all the Tweets
    """
    allTweets: [Tweet!]!
    """
    Get Tweet with id
    """
    tweet(id: ID!): Tweet
    """
    Get all the Users
    """
    allUsers: [User!]!
  }

  type Mutation {
    """
    Create a Tweet, and return created Tweet
    """
    postTweet(text: String!, userId: ID!): Tweet!
    """
    Deletes a Tweet if found, else returns false
    """
    deleteTweet(id: ID!): Boolean!
  }

  """
  Tweet object represents a resource for a tweet
  """
  type Tweet {
    id: ID!
    text: String!
    author: User!
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String
    """
    Is the sum of first name + last name as a string
    """
    fullname: String!
  }
`;
