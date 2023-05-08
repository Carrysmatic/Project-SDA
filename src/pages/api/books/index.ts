// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import mongoose from 'mongoose'
import { Book, bookModel } from '@/models/books';

export interface GetBooksResponse {
  books: Array<Book>;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GetBooksResponse>
) {

  // TODO:
  // Get the username and password from the environment variables
  // Cache the mongo connection

  // Connect to MongoDB on localhost
  await mongoose.connect('mongodb://127.0.0.1/Shop');
  // await bookModel.create({
  //   title: 'The Lord of the Rings',
  //   description: 'The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien.',
  //   price: 10.99,
  //   quantity: 10,
  //   image: 'https://images-na.ssl-images-amazon.com/images/I/51%2Bk5c%2BZBKL._SX331_BO1,204,203,200_.jpg',
  //   release_date: new Date('1954-07-29')
  // })
  const books = await bookModel.find({});
  res.status(200).json({ books })
}
