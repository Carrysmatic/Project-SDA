import mongoose, { Model } from "mongoose";

export interface Book {
    title: string;
    author: string;
    description: string;
    price: number;
    quantity: number;
    image: string;
    release_date: Date;
}

export const bookSchema = new mongoose.Schema<Book>({
    title: String,
    author: String,
    description: String,
    price: Number,
    quantity: Number,
    image: String,
    release_date: Date
});

// We manually create a book model, this isn't great but TS and mongoose and NextJS don't play well together
type bookModel = Model<Book, {}, {}>;

// Hack to reuse the model when nextjs recompiles
// Remember to restart the server when the model changes
export const bookModel = (mongoose.models.Book as bookModel) || mongoose.model('Book', bookSchema, "Books");