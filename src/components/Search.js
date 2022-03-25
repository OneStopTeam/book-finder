import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { useForm } from "react-hook-form";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";

import { keywordState } from "../atom";
import useWindowDimensions from "../hooks/useWindowDimensions";

export default function Search() {
  const router = useRouter();

  const { width: windowWidth } = useWindowDimensions();

  const setKeyword = useSetRecoilState(keywordState);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setKeyword(data.keyword);

    // home에서 검색했으면 result 페이지로 이동
    if (router.pathname === "/") {
      router.push("/result");
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <InputGroup>
        {/* register your input into the hook by invoking the "register" function */}
        <Input
          placeholder="찾으시는 책을 검색하세요"
          _placeholder={{ color: "#292626" }}
          {...register("keyword", { required: true })}
          border="2px"
          borderColor="accent"
          borderRadius="2rem"
          w={windowWidth * 0.8}
          maxW="35rem"
        />
        <InputRightElement
          children={<SearchIcon mr=".5rem" color="accent" />}
        />
      </InputGroup>
      {/* errors will return when field validation fails  */}
      {errors.value && <Text>검색어를 입력하세요 📙</Text>}
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
