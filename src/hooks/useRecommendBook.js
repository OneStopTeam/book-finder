import { useState, useEffect } from "react";
import axios from "axios";

export default function useRecommendBook() {
  const [recommend, setRecommend] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  function randomItem(a) {
    return a[Math.floor(Math.random() * a.length)];
  }

  useEffect(() => {
    const getRecommendBook = async () => {
      setIsLoading(true);
      try {
        if (randomItem(recommendKeyword)) {
          const response = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${randomItem(
              recommendKeyword
            )}`
          );
          setRecommend(response.data.items);
          setIsLoading(false);
        }
      } catch (error) {
        setIsError(true);
      }
    };
    getRecommendBook();
  }, []);

  return { isLoading, isError, recommend };
}

const recommendKeyword = [
  "시",
  "소설",
  "유아",
  "에세이",
  "경제",
  "여행",
  "사회",
  "컴퓨터",
  "뷰티",
  "건강",
  "전공",
  "만화",
  "역사",
  "문화",
  "경영",
  "세계",
  "기술",
  "미술",
  "음악",
  "체육",
  "취미",
  "외국어",
];
