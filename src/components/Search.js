import React, { useRef } from "react";
import Button from "@material-ui/core/Button";
import RootRef from "@material-ui/core/RootRef";
import { useAction } from "easy-peasy";
import styled from "@emotion/styled";
import Input from "@material-ui/core/es/Input/Input";

const Wrapper = styled("div")`
  display: flex;
  justify-content: center;
`;

const SearchButton = styled(Button)`
  && {
    margin-left: 20px;
  }
`;

export default function Search() {
  const search = useAction(dispatch => dispatch.fetched);
  const domRef = React.createRef();
  const inputEl = useRef(null);

  const handleSearchClick = () => {
    const inputValue = domRef.current.childNodes[0].value;
    search(inputValue);
  };

  return (
    <Wrapper>
      <RootRef rootRef={domRef}>
        <Input ref={inputEl} type="text" />
        <SearchButton
          variant="contained"
          color="primary"
          onClick={handleSearchClick}
        >
          Search
        </SearchButton>
      </RootRef>
    </Wrapper>
  );
}
