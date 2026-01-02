export const typeDefs = `#graphql

type employee{
  id:ID!
  firstName:String!
  lastName:String!
  jobLevel:Int!
    }
  type technology{
    name:String!
    version:String!}

    type Query{
        employees: [employee!]!
        message: String!
        technologies: technology! 
}

`;
