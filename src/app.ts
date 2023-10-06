import express, { Express } from 'express';
import cors from 'cors';
import { connectDb, disconnectDB } from 'config';


const app = express();


export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;
