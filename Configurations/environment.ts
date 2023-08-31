import dotenv from "dotenv";

dotenv.config();

const { DATABASE_URL, PORT, NODE_ENV, CLIENT_ID, SECRET_KEY } = process.env;

const config : any = {
  database: {
    uri: DATABASE_URL,
  },
  jwt: {
    secretKey: SECRET_KEY,
  },
  oauth: {
    google: {
      clientId: CLIENT_ID,
    },
  },
  port: PORT || 3000,
  nodeEnv: NODE_ENV || "development",
};

export default {...config};