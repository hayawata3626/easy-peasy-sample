import React from "react";
import Card from "@material-ui/core/es/Card/Card";
import styled from "@emotion/styled";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/es/Typography/Typography";

const CardContents = styled(Card)`
  max-width: 800px;
  margin: 20px auto;
  padding: 10px;
`;

const RepositoryTitle = styled(ListItem)`
  && {
    padding: 0;
  }
`;

const CardDetail = styled("div")`
  display: flex;
`;

export default function Item({
  todo: {
    html_url,
    full_name,
    description,
    stargazers_count,
    forks_count,
    watchers_count
  }
}) {
  return (
    <div>
      <CardContents>
        <RepositoryTitle component={"a"} href={html_url}>
          {full_name}
        </RepositoryTitle>
        <Typography>{description}</Typography>
        <CardDetail>
          <Typography>
            <span>🌟</span>: {stargazers_count}
          </Typography>
          <Typography>
            <span>🍴</span> {forks_count}
          </Typography>
          <Typography>
            <span>👀</span> {watchers_count}
          </Typography>
        </CardDetail>
      </CardContents>
    </div>
  );
}
