import React from 'react'
import Card from "@material-ui/core/es/Card/Card";
import styled from '@emotion/styled'
import Typography from "@material-ui/core/es/Typography/Typography";

const CardContens = styled(Card)`
  margin-bottom: 20px;
  padding: 10px;
`;

export default function Item({ todo: { full_name, description, stargazers_count, forks_count, watchers_count } }) {
  return (
    <div>
      <CardContens>
        <Typography>{full_name}</Typography>
        <Typography>{description}</Typography>
        {stargazers_count}
        {forks_count}
        {watchers_count}
      </CardContens>
    </div>
  )
}
