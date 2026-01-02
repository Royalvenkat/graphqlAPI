import { employeeArray, welcomeMessage } from "./employe.data.js";

export const resolvers = {
  Query: {
    employees: () => employeeArray,
    message: () => welcomeMessage,
    technologies: () => ({
      name: "GraphQL",
      version: "1.0.0",
    }),
  },
};
