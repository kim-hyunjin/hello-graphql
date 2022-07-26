import { tweets, users } from '../data.js';

const queryResolver = {
  allTweets() {
    return tweets;
  },
  tweet(_, { id }) {
    return tweets.find((tweet) => tweet.id === id);
  },
  allUsers() {
    return users;
  },
};

const mutationResolver = {
  postTweet(_, { text, userId }) {
    const newTweet = {
      id: tweets.length + 1,
      text,
      userId,
    };
    tweets.push(newTweet);
    return newTweet;
  },
  deleteTweet(_, { id }) {
    const tweet = tweets.find((tweet) => tweet.id === id);
    if (!tweet) return false;

    tweets = tweets.filter((tweet) => tweet.id !== id);
    return true;
  },
};

const userResolver = {
  fullname(root) {
    return `${root.firstName} ${root.lastName}`;
  },
};

const tweetResolver = {
  author(root) {
    return users.find((user) => user.id === root.userId);
  },
};

export const resolvers = {
  Query: queryResolver,
  Mutation: mutationResolver,
  User: userResolver,
  Tweet: tweetResolver,
};
