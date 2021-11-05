import styled from "@emotion/styled";
import Carousel from "react-elastic-carousel";

export const SectionFourContainer = styled.div`
  padding-top: 43px;
  padding-bottom: 43px;
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionFourCarouselContainer = styled.div`
  width: 100%;
  margin-top: 14px;
  padding-left: 70px;
  padding-right: 70px;
`;

export const StyledCarousel = styled(Carousel)`
  height: 100%;
`;

export const SectionFourCarouselItem = styled.div`
  position: static;
  margin: 10px;
  width: 166px;
  height: 175px;
  background: linear-gradient(
    180deg,
    #fbfafc 0%,
    rgba(251, 250, 252, 0.4) 100%
  );
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  display: flex;
  justify-content: center;
`;

export const SectionFourCarouselImg = styled.img`
  margin: auto;
  display: block;
`;
