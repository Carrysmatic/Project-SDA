import mongoose, { Model } from "mongoose";

export interface Book {
    books: any;
    title: string;
    author: string;
    description: string;
    price: number;
    quantity: number;
    release_date: Date;
    category: string;
    _id: string;
}

export const bookSchema = new mongoose.Schema<Book>({
    title: String,
    author: String,
    description: String,
    price: Number,
    quantity: Number,
    release_date: Date,
    category: String,
    _id: {
        $oid: String
    }
});

type bookModel = Model<Book, {}, {}>;

export const bookModel = (mongoose.models.Book as bookModel) || mongoose.model('Book', bookSchema, "Books");


