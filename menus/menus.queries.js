import client from "../client.js";
export default {
  Query: {
    menus: () => client.menu.findMany(),
    menu: (_, { id }) => client.menu.findUnique({ where: { id } }),
  },
};
