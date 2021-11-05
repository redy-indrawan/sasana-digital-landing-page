import styled from "@emotion/styled";
import { FiMapPin, FiClock } from "react-icons/fi";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export const SectionSixContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 39px;
  padding-bottom: 42px;
  height: auto;
`;

export const SectionSixCardContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SectionSixCardItem = styled.div`
  width: 358px;
  height: 583px;
  background: #ffffff;
  border: 2px solid #c2c2c2;
  box-sizing: border-box;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  overflow: hidden;

  cursor: pointer;

  margin-left: 10px;
  margin-right: 10px;
`;

export const SectionSixCardContent = styled.div`
  margin-top: 18px;
  margin-left: 23px;
`;

export const SectionSixCardContentInner = styled.div`
  height: 220px;
`;

export const ContentOne = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 21px;
`;

export const ContentTwo = styled.div`
  display: flex;
  align-items: center;
  height: 21px;
  margin-top: 20px;
`;

export const StyledContentText = styled.div`
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;

  color: #5e5e5e;

  margin-left: 20px;
`;

export const StyledLocation = styled(FiMapPin)`
  font-size: 33px;
  margin: 5px;

  color: var(--clr-secondary);
`;

export const StyledClock = styled(FiClock)`
  font-size: 33px;
  margin: 5px;

  color: var(--clr-secondary);
`;

export const StyledStarFill = styled(FaStar)`
  color: #fdca2e;
  font-size: 30px;
`;
export const StyledStarHalf = styled(FaStarHalfAlt)`
  color: #fdca2e;
  font-size: 30px;
`;
export const StyledStarEmpty = styled(FaRegStar)`
  color: #fdca2e;
  font-size: 30px;
`;

export const StyledReview = styled.div`
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  color: #ee4d2d;
  margin-left: 17px;
`;

export const StyledButton = styled.button`
  margin-top: 46px;
  color: var(--clr-primary);
  width: 170px;
  height: 41px;
  background: #ebebeb;
  border-radius: 5px;

  font-family: Arial;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
`;

export const SeeMoreButtonContainer = styled.button`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 40px;
  margin-bottom: 30px;
  margin-right: 20px;
`;

export const SeeMoreButton = styled.button`
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  color: var(--clr-primary);

  width: 147px;
  height: 48px;
  border: 2px solid var(--clr-primary);
  box-sizing: border-box;
  border-radius: 8px;
  float: right;

  &:hover {
    background: var(--clr-primary);
    color: #fff;
  }
`;
