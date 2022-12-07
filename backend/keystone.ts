import { config, createSchema } from "@keystone-next/keystone/schema";
import "dotenv/config"; // biar logadingnya pake dotenv

const databaseURL =
  process.env.DATABASE_URL || "mongodb://localhost/keystone-sick-fits-tutorial"; // define + panggil database URL

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // how long the cookie, how long the user sign in
  secret: process.env.COOKIE_SECRET, // diimport dari file .env
};

export default config({
  // @ts-ignore
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  db: {
    adapter: "mongoose",
    url: databaseURL,
    // TODO : Add data seeding here
  },
  // setting lists
  lists: createSchema({
    // schema items go in here
  }),
  ui: {
    // TODO : change this for roles
    isAccessAllowed: () => true,
  },

  // TODO : Add session values here
});
