import styled from "@emotion/styled";
import sectionthreebg from "../../../assets/images/img/section-three-top-left-bg.png";
import sectionthreebgtwo from "../../../assets/images/img/section-three-bottom-right-bg.png";

export const SectionThreeContainer = styled.div`
  background-color: #f5f5f7;
  background-image: url(${sectionthreebg}), url(${sectionthreebgtwo});
  background-position: left top, right bottom;
  background-repeat: no-repeat, no-repeat;

  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 59px;
  padding-bottom: 59px;
`;

export const SectionThreeContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 20px;
`;

export const SectionThreeContentLeft = styled.div`
  position: relative;
  width: 500px;
  height: 570px;
`;

export const SectionThreeContentImgOne = styled.img`
  width: 373.74px;
  height: auto;
  position: absolute;
  z-index: 10;
`;

export const SectionThreeContentImgTwo = styled.img`
  width: 319px;
  height: auto;
  position: absolute;
  z-index: 9;
  top: 2.5rem;
  left: 6rem;
`;

export const SectionThreeContentImgThree = styled.img`
  width: 209px;
  height: auto;
  position: absolute;
  z-index: 8;
  top: 8rem;
  left: 14.5rem;
`;

export const SectionThreeContentImgFour = styled.img`
  width: 319px;
  height: auto;
  position: absolute;
  z-index: 9;
  top: 2.5rem;
  left: -3rem;
`;

export const SectionThreeContentImgFive = styled.img`
  width: 209px;
  height: auto;
  position: absolute;
  z-index: 8;
  top: 8rem;
  left: -4.6rem;
`;

export const SectionThreeContentRight = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 40px;

  max-width: 527px;
  width: 100%;
  height: 100%;

  justify-content: space-evenly;
`;
