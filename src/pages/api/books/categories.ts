// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import mongoose from 'mongoose'
import { Book, bookModel } from '@/models/books';

export interface GetCategoriesResponse {
    categories: Array<string>;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<GetCategoriesResponse>
) {
    await mongoose.connect('mongodb://127.0.0.1/Shop');
    const categories = await bookModel.distinct("category");
    res.status(200).json({ categories})
}
