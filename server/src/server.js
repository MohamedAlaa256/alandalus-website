import dotenv from 'dotenv';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import app from './app.js';
import { connectDatabase } from './config/database.js';

const serverDir = dirname(dirname(fileURLToPath(import.meta.url)));
dotenv.config({ path: resolve(serverDir, '.env') });

const port = process.env.PORT || 5000;

try {
  await connectDatabase();

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
} catch (error) {
  console.error('Failed to start server:', error);
  process.exit(1);
}
