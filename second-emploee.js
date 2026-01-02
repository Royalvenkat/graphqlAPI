import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql
type Employee {
id:ID!
firstName:String!
lastName:String!
jobLevel:Int!
}
type Query {
  employees: [Employee!]!
  message: String!
}
`;

const employeeArray = [
  { id: "1", firstName: "venkat", lastName: "ramana", jobLevel: 5 },
  { id: "2", firstName: "john", lastName: "doe", jobLevel: 3 },
  { id: "3", firstName: "jane", lastName: "smith", jobLevel: 4 },
];

const resolvers = {
  Query: {
    employees: () => employeeArray,
    message: () => "Hello World",
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server);
console.log(`🚀 Server is running at ${url}`);
