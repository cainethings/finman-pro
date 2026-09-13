import express, { type Express } from 'express';

// Builds the app without binding a port, so it stays testable in isolation.
export function createApp(): Express {
  const app = express();

  app.get('/health', (_req, res) => {
    res.status(200).json({ status: 'ok' });
  });

  return app;
}
