import { PGVectorStore } from "@langchain/community/vectorstores/pgvector";
import { PoolConfig } from "pg";
import embeddings from "../embeddings/embeddings.ollama";

const config = {
  postgresConnectionOptions: {
    type: "postgres",
    host: "127.0.0.1",
    port: 5433,
    user: "myuser",
    password: "ChangeMe",
    database: "api",
  } as PoolConfig,
  tableName: "testlangchain",
  columns: {
    idColumnName: "id",
    vectorColumnName: "vector",
    contentColumnName: "content",
    metadataColumnName: "metadata",
  },
};
  
export const makeVectorStore = async (embeddings: any) => {
  const pgvectorStore = await PGVectorStore.initialize(
    embeddings,
    config
  );
  return pgvectorStore
}
  