import styled from "@emotion/styled";
import sectionsevenbg from "../../../assets/images/img/section-seven-bg.png";
import sectionsevenbgtwo from "../../../assets/images/img/section-seven-bg-2.png";

export const SectionSevenContainer = styled.div`
  background-image: url(${sectionsevenbgtwo}), url(${sectionsevenbg});
  background-position: right center, left;
  background-repeat: no-repeat, no-repeat;
  background-size: 70%, cover;
  width: 100%;
  height: 335px;
  max-width: 1440px;
`;

export const SectionSevenContainerInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 71px;
  margin-right: 171px;
  margin-left: 171px;
  margin-bottom: 82px;
`;

export const SectionSevenContentContainer = styled.div`
  width: 600px;
`;

export const SectionSevenTitle = styled.div`
  font-family: Arial;
  font-style: normal;
  font-weight: bold;
  font-size: 39px;
  line-height: 120%;

  color: #fff;

  margin-bottom: 32px;
`;

export const SectionSevenContent = styled.div`
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 28px;

  display: flex;
  align-items: center;

  color: #fff;
`;

export const StyledButton = styled.button`
  width: 263px;
  height: 70px;

  background: #f46f4f;
  box-shadow: 0px 0px 20px var(--clr-primary);
  border-radius: 4px;

  color: #fff;

  font-family: Arial;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 28px;

  &:hover {
    transform: scale(1.1);
    transition: 250ms ease-out;
  }
`;
