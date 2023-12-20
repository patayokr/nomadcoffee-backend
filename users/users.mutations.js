import client from "../client";
import bcrypt from "bcrypt";

export default {
  Mutation: {
    createAccount: async (
      _,
      { username, email, name, location, password, avatarUrl, githubUsername }
    ) => {
      try {
        const existingUser = await client.user.findFirst({
          where: {
            OR: [{ username }, { email }],
          },
        });

        if (existingUser)
          throw new Error("The email or username is already in use");

        const uglyPassword = await bcrypt.hash(password, 10);

        const user = await client.user.create({
          data: {
            username,
            email,
            name,
            location,
            password: uglyPassword,
            avatarUrl,
            githubUsername,
          },
        });

        return { ok: true };
      } catch (e) {
        return {
          ok: false,
          error: e,
        };
      }
    },
  },
};
