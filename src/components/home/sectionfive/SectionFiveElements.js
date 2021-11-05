import styled from "@emotion/styled";
import Carousel from "react-elastic-carousel";
import sectionfivebg from "../../../assets/images/img/section-five-bg.png";

export const SectionFiveContainer = styled.div`
  padding-top: 43px;
  padding-bottom: 43px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: #f5f5f7;

  background-image: url(${sectionfivebg});
  /* background-size: cover; */
  background-repeat: no-repeat;
  background-size: auto;
`;

export const SectionFiveCarouselContainer = styled.div`
  width: 100%;
  margin-top: 36px;
  padding-left: 70px;
  padding-right: 70px;
`;

export const StyledCarousel = styled(Carousel)`
  height: 100%;
`;

export const SectionFiveCarouselItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;

  width: 353px;
  height: 469px;

  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  margin: 10px;

  &:hover {
    background: var(--clr-primary);
  }
`;

export const SectionFiveCarouselImg = styled.img`
  margin: auto;
  display: block;
`;

export const SectionFiveCarouselContent = styled.div`
  height: 100%;
  margin-top: 20px;
`;

export const StyledSubTitle = styled.div`
  font-weight: 400;
  margin-bottom: 0;

  color: var(--clr-secondary);

  font-family: Arial;
  font-style: normal;
  font-size: 1.5625rem;
  line-height: 29px;

  ${SectionFiveCarouselItem}:hover & {
    color: #fff;
  }
`;
