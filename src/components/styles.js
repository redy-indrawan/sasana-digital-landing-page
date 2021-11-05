import styled from "@emotion/styled";
import { SectionTwoCardItem } from "./home/sectiontwo/SectionTwoElements";
import { SectionFiveCarouselItem } from "./home/sectionfive/SectionFiveElements";

export const Title = styled.div`
  color: var(--clr-secondary);

  font-family: Arial;
  font-style: normal;
  font-weight: bold;
  font-size: 2.4375rem;
  line-height: 120%;

  margin-bottom: 20px;

  ${SectionTwoCardItem}:hover & {
    color: #fff;
  }
`;

export const SubTitle = styled.div`
  color: var(--clr-secondary);

  font-family: Arial;
  font-style: normal;
  font-weight: bold;
  font-size: 1.5625rem;
  line-height: 29px;

  margin-bottom: 10px;

  ${SectionTwoCardItem}:hover & {
    color: #fff;
  }

  ${SectionFiveCarouselItem}:hover & {
    color: #fff;
  }
`;

export const StyledText = styled.div`
  color: var(--clr-secondary);

  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 150%;

  text-align: justify;

  ${SectionTwoCardItem}:hover & {
    color: #fff;
  }

  ${SectionFiveCarouselItem}:hover & {
    color: #fff;
  }
`;
