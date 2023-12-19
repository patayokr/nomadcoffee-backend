import { gql } from "apollo-server";

export default gql`
  type Menu {
    id: Int!
    name: String!
    price: Int!
  }
  type Query {
    menus: [Menu!]!
    menu(id: Int!): Menu
  }

  type Mutation {
    createMenu(name: String!, price: Int!): Menu
    deleteMenu(id: Int!): Menu
    updateMenu(id: Int!, price: Int!): Menu
  }
`;
