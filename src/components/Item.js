import React from 'react'
import Card from "@material-ui/core/es/Card/Card";
import styled from '@emotion/styled'
import ListItem from '@material-ui/core/ListItem';
import Typography from "@material-ui/core/es/Typography/Typography";

const CardContens = styled(Card)`
  &:first-child {
  margin-top: 30px;
  }
  margin-bottom: 20px;
  padding: 10px;
`;

export default function Item({ todo: { html_url, full_name, description, stargazers_count, forks_count, watchers_count } }) {
  return (
    <div>
      <CardContens>
        <ListItem component={"a"} href={html_url}>{full_name}</ListItem>
        <Typography>{description}</Typography>
        <Typography>star:{stargazers_count}</Typography>
        <Typography>fork:{forks_count}</Typography>
        <Typography>watch:{watchers_count}</Typography>
      </CardContens>
    </div>
  )
}
