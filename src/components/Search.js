import React, { useRef } from "react";
import Button from "@material-ui/core/Button";
import RootRef from "@material-ui/core/RootRef";
import { useAction } from "easy-peasy";
import Input from "@material-ui/core/es/Input/Input";

function Search() {
  const search = useAction(dispatch => dispatch.fetched);
  const domRef = React.createRef();
  const inputEl = useRef(null);
  const handleSearchClick = () => {
    const inputValue = domRef.current.childNodes[0].value;
    search(inputValue);
  };
  return (
    <div>
      <RootRef rootRef={domRef}>
        <Input ref={inputEl} type="text" />
        <Button variant="contained" color="primary" onClick={handleSearchClick}>
          Search
        </Button>
      </RootRef>
    </div>
  );
}

export default Search;
