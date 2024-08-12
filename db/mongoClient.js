import mongoose from "mongoose";
import dotenv from "dotenv";
//mongodb+srv://diegopizarro1986:<password>@cluster-books.zacbl.mongodb.net/?retryWrites=true&w=majority&appName=cluster-books

dotenv.config();

export const connectDB = async () => {
    try {
        const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster-books.zacbl.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority&appName=cluster-books`
        await mongoose.connect(uri, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true
        });
        console.log('MongoDB connected')
    } catch (error) {
        console.error(error)
        throw new Error('Error connecting to MongoDB')
    }
};