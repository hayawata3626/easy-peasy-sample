import React from "react";
import { useStore } from "easy-peasy";
import Result from "./components/Result";
import Search from "./components/Search";
import CircularProgress from "@material-ui/core/CircularProgress";
import styled from "@emotion/styled";

const CircularProgressWrapper = styled("div")`
  display: flex;
  position: fixed;
  top: 0;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export default function App() {
  const loading = useStore(state => state.loading);
  return (
    <div>
      <Search />
      {loading ? (
        <CircularProgressWrapper>
          <CircularProgress size={60} />
        </CircularProgressWrapper>
      ) : (
        <Result />
      )}
    </div>
  );
}
