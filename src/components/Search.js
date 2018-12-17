import React, { useRef } from "react";
import Button from "@material-ui/core/Button";
import { useAction } from "easy-peasy";
import styled from "@emotion/styled";

const Wrapper = styled("div")`
  display: flex;
  justify-content: center;
`;

const Input = styled("input")`
  padding: 10px 20px;
  font-size: 20px;
`;

const SearchButton = styled(Button)`
  && {
    margin-left: 18px;
  }
`;
export default function Search() {
  const search = useAction(dispatch => dispatch.fetched);
  const inputEl = useRef(null);

  const handleSearchClick = () => {
    search(inputEl.current.value);
  };

  return (
    <Wrapper>
      <Input ref={inputEl} type="text" />
      <SearchButton
        variant="contained"
        color="primary"
        onClick={handleSearchClick}
      >
        Search
      </SearchButton>
    </Wrapper>
  );
}
