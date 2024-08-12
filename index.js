import app from './app.js';
import { connectDB } from './db/mongoClient.js';

const PORT = 4000;
connectDB();
app.listen(4000, () => {
  console.log(`Server is running on port ${PORT}`);
});



