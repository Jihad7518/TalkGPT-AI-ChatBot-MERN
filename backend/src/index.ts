
import app from './app';
import { connectToDatabase } from './db/conection';
import { config } from 'dotenv'
config();

const PORT = process.env.PORT || 5000;

connectToDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT} and connected to MONGODB`);
    });
  })
  .catch((error) => {
    console.error(`Error connecting to the database: ${error.message}`);
    process.exit(1);
  });
