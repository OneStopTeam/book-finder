import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import { keywordState } from "../atom";
import useWindowDimensions from "../hooks/useWindowDimensions";

export default function Search() {
  const router = useRouter();

  const { width: windowWidth } = useWindowDimensions();

  const [keyword, setKeyword] = useRecoilState(keywordState);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    // home으로 오면 검색어 초기화
    if (router.pathname === "/") {
      setKeyword("");
    }
  }, []);

  const onSubmit = () => {
    // home에서 검색했으면 result 페이지로 이동
    if (router.pathname === "/") {
      router.push("/result");
    }
  };

  const handleChange = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <InputGroup>
        {/* register your input into the hook by invoking the "register" function */}
        <Input
          placeholder="찾으시는 책을 검색하세요"
          {...register("value", { required: true })}
          border="2px"
          borderColor="accent"
          borderRadius="2rem"
          w={windowWidth * 0.8}
          maxW="35rem"
          value={keyword}
          onChange={handleChange}
        />
        <InputRightElement
          children={
            <StyledButton>
              <SearchIcon color="accent" />
            </StyledButton>
          }
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

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  padding-right: 0.5rem;
`;
