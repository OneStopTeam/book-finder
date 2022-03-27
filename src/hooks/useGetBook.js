import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default function useGetBook() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [bookData, setBookData] = useState(null);

  const getBookData = async (id) => {
    if (id) {
      setIsLoading(true);
      try {
        const book = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${id}`
        );
        setIsLoading(false);
        setBookData(book.data.items[0]);
      } catch (error) {
        setIsError(true);
      }
    }
  };
  console.log(bookData);
  return { bookData, isLoading, isError, getBookData };
}
