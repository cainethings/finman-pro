import { createApp } from './app';

// Temporary direct env read — replaced by the validated config module (next scaffolding task).
const port = process.env.PORT ?? 3000;

const app = createApp();

app.listen(port, () => {
  console.log(`Finman API listening on port ${port}`);
});
