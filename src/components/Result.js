import React from "react";
import { useStore } from "easy-peasy";
import Item from "./Item";
import Typography from "@material-ui/core/es/Typography/Typography";

export default function Result() {
  const items = useStore(state => state.items);
  return (
    <>
      {items.length ? (
        items.map((todo, index) => <Item key={index} todo={todo} />)
      ) : (
        <Typography>検索結果は0です</Typography>
      )}
    </>
  );
}
