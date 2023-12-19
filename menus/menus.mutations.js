import client from "../client.js";
export default {
  Mutation: {
    createMenu: (_, { price, name }) =>
      client.menu.create({
        data: {
          name,
          price,
        },
      }),

    deleteMenu: (_, { id }) =>
      client.menu.delete({
        where: {
          id,
        },
      }),
    updateMenu: (_, { id, price }) =>
      client.menu.update({
        data: {
          price,
        },
        where: {
          id,
        },
      }),
  },
};
