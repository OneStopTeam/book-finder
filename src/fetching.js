export const fetchResult = async (keyword) => {
  // keyword로 검색한 책
  const {
    data: { items },
  } = await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=${keyword}`
  );

  return items;
};
