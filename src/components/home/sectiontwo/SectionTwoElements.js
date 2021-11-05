import styled from "@emotion/styled";
import { FaArrowRight } from "react-icons/fa";

export const SectionTwoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  margin-top: 5%;

  padding-bottom: 73px;
`;

export const SectionTwoCardContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SectionTwoCardItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;

  width: 353px;
  height: 501px;

  margin: 20px 10px 10px 10px;

  background: #fff;
  border: 1px solid #b9b9b9;
  box-sizing: border-box;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
  border-radius: 10px;

  &:hover {
    background: var(--clr-primary);
  }
`;

export const SectionTwoCardImgContainer = styled.div`
  position: static;
  width: 313px;
  height: 204px;
  left: 20px;
  top: 20px;
  background: #f3f4f6;
  border-radius: 10px;

  display: flex;
  justify-content: center;

  margin-bottom: 20px;
`;

export const SectionTwoCardImg = styled.img`
  width: 256px;
  height: auto;
  margin: auto;
`;

export const SectionTwoCardContent = styled.div`
  color: var(--clr-secondary);

  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;

  text-align: justify;

  ${SectionTwoCardItem}:hover & {
    color: #fff;
  }
`;

export const SectionTwoCardSubTitle = styled.div`
  color: var(--clr-secondary);

  font-family: Arial;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 28px;

  margin-top: 10px;
  margin-bottom: 10px;

  ${SectionTwoCardItem}:hover & {
    color: #fff;
  }
`;

export const SectionTwoCardOptions = styled.div`
  color: var(--clr-primary);

  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  transition: 0.3s;

  ${SectionTwoCardItem}:hover & {
    color: #fff;
  }
`;

export const SectionTwoCardMore = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  color: var(--clr-primary);

  font-family: var(--font-poppins);
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 28px;

  margin-top: 10px;

  cursor: pointer;
  transition: 0.3s;

  ${SectionTwoCardItem}:hover & {
    color: #fff;
  }
`;

export const StyledFaArrowRight = styled(FaArrowRight)`
  font-size: 16px;
  margin-left: 8px;
`;
