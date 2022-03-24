import { SearchIcon } from "@chakra-ui/icons";
import { useRouter } from "next/dist/client/router";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";

import { valueState } from "../atom";

export default function Search() {
  const router = useRouter();

  const setSearchValue = useSetRecoilState(valueState);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setSearchValue(data.value);
    if (router.pathname === "/") {
      router.push("/result");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input
        placeholder="찾으시는 책을 검색하세요"
        {...register("value", { required: true })}
      />
      {/* errors will return when field validation fails  */}
      {errors.value && <span>검색어를 입력하세요 📙</span>}
      <button>
        <SearchIcon />
      </button>
    </form>
  );
}
