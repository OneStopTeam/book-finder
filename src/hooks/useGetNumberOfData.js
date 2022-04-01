import { useEffect, useState } from "react";
import axios from "axios";

export default function useGetNumberOfData(keyword) {
  const [numberOfData, setNumberOfData] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // 검색 결과 개수 구하기
  useEffect(async () => {
    let count = 0; // 검색 결과 개수

    for (let i = 0; count < 200; i++ * 40) {
      const {
        data: { items },
      } = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${keyword}&startIndex=${i}&maxResults=40&key=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      // items이 더 이상 없으면 종료
      if (!items) {
        break;
      }
      // 개수 증가
      count += items.length;
    }

    setNumberOfData(count);
    setIsLoading(false);
  }, [keyword]);

  return { numberOfData, isLoading };
}
