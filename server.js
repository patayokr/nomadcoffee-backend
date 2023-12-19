import { ApolloServer } from "apollo-server";
require("dotenv").config();
import schema from "./schema";
const server = new ApolloServer({
  schema,
});

const PORT = process.env.PORT;

server
  .listen()
  .then(() => console.log(`🚀Server is Running on http://localhost:${PORT} ✅`));
