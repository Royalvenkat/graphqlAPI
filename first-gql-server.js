import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql
type Message {
  text: String
  length: Int
}
type Company{
  name: String
  ceo: String
}

type RandomValue {
  value: Float
}

type Description {
    hero: String
    villain: String
}
    enum Episode {
    POGO
    CN
    ZEE
} 
type Movie {
  title: String
  director: String
  year: Int
  description: Description!
  episode: Episode!
}

type Query {
  hello: String
  hellomessage: Message
  hellorandom: RandomValue
  company: Company
  movie: Movie
}
`;

const resolvers = {
  Query: {
    hello: () => "HELLO WORLD venkat here!!",
    company: () => {
      return {
        name: "Tech Corp",
        ceo: "Alice Johnson",
      };
    },
    movie: () => ({
      title: "Inception",
      director: "Christopher Nolan",
      year: 2010,
      description: {
        hero: "Dom Cobb",
        villain: "Mal Cobb",
      },
      episode: "CN",
    }),

    hellomessage: () => ({
      text: "This is a hello message",
      length: "This is a hello message".length,
    }),

    hellorandom: () => ({
      value: Math.random(),
    }),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server);
console.log(`🚀 Server is running at ${url}`);
