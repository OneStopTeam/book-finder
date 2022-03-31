import axios from "axios";

export const fetchResult = async (startIndex, keyword) => {
  const {
    data: { items },
  } = await axios
    .get(
      `https://www.googleapis.com/books/v1/volumes?q=${keyword}&startIndex=${startIndex}&maxResults=20&key=${process.env.NEXT_PUBLIC_API_KEY}`
    )
    .catch((error) => {
      console.log(error.response);
    });

  return items;
};
