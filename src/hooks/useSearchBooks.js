import { useState } from "react";
import axios from "axios";

export default function useSearchBooks() {
  const [first, setFirst] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [books, setBooks] = useState([]);
  const [keyword, setKeyword] = useState("");

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setKeyword(value);
  };

  const searchBook = async () => {
    setIsLoading(true);
    setFirst(false);
    try {
      if (keyword) {
        const books = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${keyword}`
        );
        const {
          data: { items },
        } = books;
        setBooks(items);
      }
      setKeyword("");
      setIsLoading(false);
    } catch (error) {
      setKeyword("");
      setIsError(true);
    }
  };

  return { first, books, isLoading, isError, searchBook, handleChange };
}
