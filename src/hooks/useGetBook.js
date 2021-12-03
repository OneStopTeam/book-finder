import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default function useGetBook(id) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [bookData, setBookData] = useState({});

  const getBookData = async () => {
    if (id) {
      setIsLoading(true);
      try {
        const book = await axios.get(
          `https://www.googleapis.com/books/v1/volumes/${id}?key=${API_KEY}`
        );
        const { data } = book;

        setBookData(data);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      }
    }
  };

  return { bookData, isLoading, isError, getBookData };
}
