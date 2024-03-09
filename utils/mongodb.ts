import { MongoClient, Db } from "mongodb";

let uri = process.env.MONGODB_URI;
let dbName = process.env.MONGODB_DB;

let cachedClient: MongoClient;
let cacheDb: Db;

if (!uri) {
  throw new Error("Por favor defina a variável MONDODB_URI");
}

if (!dbName) {
  throw new Error("Por favor defina a variável MONDODB_DB");
}

export async function connectToDataBase() {
  if (cachedClient && cacheDb) {
    return { client: cachedClient, db: cacheDb };
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopoLogy: true,
  });

  const db = await client.db(dbName);

  cachedClient = client;
  cacheDb = db;

  return { client, db };
}
