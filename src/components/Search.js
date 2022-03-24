import { SearchIcon } from "@chakra-ui/icons";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";

import { bookState } from "../atom";

export default function Search() {
  const setBook = useSetRecoilState(bookState);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setBook(data.book);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input
        placeholder="찾으시는 책을 검색하세요"
        {...register("book", { required: true })}
      />
      {/* errors will return when field validation fails  */}
      {errors.book && <span>검색어를 입력하세요 📙</span>}
      <button>
        <SearchIcon />
      </button>
    </form>
  );
}
