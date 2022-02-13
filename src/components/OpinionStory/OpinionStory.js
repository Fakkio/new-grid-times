import React from "react";
import styled from "styled-components/macro";
import {COLORS, QUERIES} from "../../constants";

const OpinionStory = ({id, title, author, avatar}) => {
  return (
    <Link href={`/story/${id}`}>
      <Wrapper>
        <Avatar alt="" src={avatar} />
        <div>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </div>
      </Wrapper>
    </Link>
  );
};

const Link = styled.a`
  &:not(:first-child) {
    padding-top: 16px;
    border-top: 1px solid ${COLORS.gray[300]};
    margin-top: 16px;
  }
`;

const Wrapper = styled.article`
  color: var(--color-gray-900);
  display: flex;
  flex-direction: row-reverse;
  gap: 16px;
  justify-content: space-between;

  @media ${QUERIES.tabletOnly} {
    flex-direction: column;
    gap: 8px;
  }
`;

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;
