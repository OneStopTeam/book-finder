import { useState, useEffect } from "react";
import axios from "axios";

export default function useRelatedBook(author) {
  const [relatedBook, setRelatedBook] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  console.log(author);
  useEffect(() => {
    const getRelatedBook = async () => {
      setIsLoading(true);
      if (author) {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${author}+inauthor`
        );
        setRelatedBook(response.data.items);
      }
      setIsLoading(false);
    };
    getRelatedBook();
  }, []);

  return { isLoading, isError, relatedBook };
}
