import styled from "@emotion/styled";
import {
  FaEnvelope,
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";

export const SectionEightContainer = styled.div`
  height: auto;
  width: 100%;
  background: #1d3463;
`;

export const SectionEightContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  margin-top: 93px;
  margin-left: 170px;
  margin-right: 319px;
`;

export const LogoContainer = styled.div`
  width: 341px;
  height: 54px;
`;

export const SectionEightContentInnerContainer = styled.div`
  display: flex;

  margin-top: 30px;
  margin-bottom: 87px;
`;

export const ContentLeftContainer = styled.div`
  width: 506px;
`;

export const ContentLeftTitle = styled.div`
  font-family: Arial;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 29px;

  color: #fff;
`;

export const ContentLeftText = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;

  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 28px;

  color: #ffffff;
`;

export const ContentMiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 300px;

  margin-left: 44px;
  margin-right: 44px;
`;

export const ContentMiddleTitle = styled.div`
  font-family: Arial;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 28px;

  color: #ffffff;

  margin-bottom: 30px;
`;

export const ContentMiddleText = styled.div`
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  text-align: center;

  color: #ffffff;
  margin-bottom: 5px;
`;

export const ContentRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentRightTitle = styled.div`
  font-family: Arial;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 150%;

  color: #ffffff;

  margin-bottom: 20px;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledEnvelope = styled(FaEnvelope)`
  color: white;
  margin-right: 52px;
  font-size: 30px;
`;

export const StyledFacebook = styled(FaFacebookSquare)`
  color: white;
  font-size: 30px;
`;

export const StyledLinkedin = styled(FaLinkedin)`
  color: white;
  margin-right: 52px;
  font-size: 30px;
`;

export const StyledInstagram = styled(FaInstagramSquare)`
  color: white;
  margin-right: 52px;
  font-size: 30px;
`;

export const Copyright = styled.div`
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
  color: #ffffff;

  margin-bottom: 60px;
`;
