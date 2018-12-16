import React from "react";
import { useStore } from "easy-peasy";
import Result from "./components/Result";
import Search from "./components/Search";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function App() {
  const loading = useStore(state => state.loading);
  return (
    <div>
      <Search />
      {loading ? <CircularProgress /> : <Result />}
    </div>
  );
}
