import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default function useGetBook() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [bookData, setBookData] = useState({});

  const getBookData = async (id) => {
    if (id) {
      try {
        const book = await axios.get(
          `https://www.googleapis.com/books/v1/volumes/${id}?key=${API_KEY}`
        );
        const { data } = book;
        setBookData(data);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        return;
      }
    }
  };

  return { bookData, isLoading, isError, getBookData };
}
