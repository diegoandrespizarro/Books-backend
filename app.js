import express from 'express';
import fileUpload from 'express-fileupload';

import testRoutes from './routes/test.routes.js';
import booksRoutes from './routes/books.routes.js';
import { createRoles } from './utils/roles.js';
import userRoutes from './routes/users.routes.js';
const app = express();

app.use(express.json());
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './tmp'
}));

createRoles();

app.use("/api", testRoutes);
app.use("/api", booksRoutes);
app.use("/users/auth", userRoutes);

export default app;
