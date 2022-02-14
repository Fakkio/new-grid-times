import React from "react";
import styled from "styled-components/macro";

import {MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES} from "../../data";

import SectionTitle from "../SectionTitle";
import MainStory from "../MainStory";
import SecondaryStory from "../SecondaryStory";
import OpinionStory from "../OpinionStory";
import Advertisement from "../Advertisement";
import {COLORS, QUERIES} from "../../constants";

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </StoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "main-story"
    "secondary-stories"
    "opinion-stories"
    "advertisement";
  gap: 48px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: 1fr min(16rem, 30%);
    grid-template-areas:
      "main-story secondary-stories"
      "advertisement advertisement"
      "opinion-stories opinion-stories";
    gap: 0;
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 4fr 3fr 2fr;
    grid-template-areas:
      "main-story secondary-stories opinion-stories"
      "main-story advertisement advertisement";
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${QUERIES.tabletAndUp} {
    margin-right: 16px;
    padding-right: 16px;
    border-right: 1px solid ${COLORS.gray[300]};
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${QUERIES.laptopAndUp} {
    margin-right: 16px;
    padding-right: 16px;
    border-right: 1px solid ${COLORS.gray[300]};
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;

  @media ${QUERIES.tabletOnly} {
    ${OpinionSection} > & {
      flex-direction: row;
    }
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media ${QUERIES.laptopAndUp} {
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid ${COLORS.gray[300]};
  }
`;

export default MainStoryGrid;
