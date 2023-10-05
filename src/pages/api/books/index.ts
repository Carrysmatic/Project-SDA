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


  // Connect to MongoDB on localhost
  await mongoose.connect('mongodb://127.0.0.1/Shop');

  const categoryQueryParameter = req.query.category;
  const searchQueryParameter = req.query.search;
  const perPage = req.query.perPage;
  const pageNo = req.query.pageNo;


  const filter: mongoose.FilterQuery<Book> = {};
  if (categoryQueryParameter) {
    filter.category = categoryQueryParameter;
  };
  let searchFilter = {};
  if (searchQueryParameter) {
    searchFilter = {
      $or: [
        {
          title: {
            "$regex": searchQueryParameter,
            "$options": "i"
          }
        },
        {
          description: {
            "$regex": searchQueryParameter,
            "$options": "i"
          }
        },
        {
          author: {
            "$regex": searchQueryParameter,
            "$options": "i"
          }

        }
      ]
    };

  }





  const books = await bookModel.find({ ...filter, ...searchFilter }, {}, { skip: Number(pageNo) * Number(perPage), limit: Number(perPage) });
  res.status(200).json({ books })
}
