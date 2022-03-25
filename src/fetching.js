import axios from "axios";

export const fetchResult = async (keyword) => {
  const {
    data: { items },
  } = await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=${keyword}&maxResults=40&key=${process.env.NEXT_PUBLIC_API_KEY}`
  );

  return items;
};
