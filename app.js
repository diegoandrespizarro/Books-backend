import express from 'express';
import fileUpload from 'express-fileupload';

import testRoutes from './routes/test.routes.js';
import booksRoutes from './routes/books.routes.js';

const app = express();

app.use(express.json());
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './tmp'
}));

app.use("/api", testRoutes);
app.use("/api", booksRoutes);

export default app;
