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
  //   title: "Sapiens: A Brief History of Humankind",
  //   description: "Sapiens: A Brief History of Humankind is a book by Yuval Noah Harari that explores the history of Homo sapiens, from the emergence of our species in Africa to the present day.",
  //   price: 12.99,
  //   quantity: 5,
  //   image: "https://images-na.ssl-images-amazon.com/images/I/51WOaO+VJTL._SX327_BO1,204,203,200_.jpg",
  //   release_date: "2014-02-10T00:00:00.000+00:00",
  //   author: "Yuval Noah Harari",
  //   category: "Non-fiction"
  // })
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
