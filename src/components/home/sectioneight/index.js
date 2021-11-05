import React, { Component } from "react";
import {
  SectionEightContainer,
  SectionEightContentContainer,
  LogoContainer,
  SectionEightContentInnerContainer,
  ContentLeftContainer,
  ContentLeftTitle,
  ContentLeftText,
  IconContainer,
  StyledEnvelope,
  StyledFacebook,
  StyledInstagram,
  StyledLinkedin,
  ContentMiddleContainer,
  ContentMiddleTitle,
  ContentMiddleText,
  ContentRightContainer,
  ContentRightTitle,
  Copyright,
} from "./SectionEightElements";
import logosasana from "../../../assets/images/logo/logo-sasana-putih.png";

class SectionEight extends Component {
  render() {
    return (
      <SectionEightContainer>
        <SectionEightContentContainer>
          <LogoContainer>
            <img src={logosasana} alt="sasana digital logo" />
          </LogoContainer>
          <SectionEightContentInnerContainer>
            <ContentLeftContainer>
              <ContentLeftTitle>PT. Sasana Solusi Digital</ContentLeftTitle>
              <ContentLeftText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
                et lectus consequat neque, luctus mi non id. Nibh accumsan,
                sapien pellentesque sit elementum libero urna diam. Ipsum vitae
                dolor tellus turpis ullamcorper rutrum faucibus. Consectetur id
                neque quisque dignissim consectetur condimentum urna tellus
                arcu.
              </ContentLeftText>
              <IconContainer>
                <StyledInstagram />
                <StyledLinkedin />
                <StyledEnvelope />
                <StyledFacebook />
              </IconContainer>
            </ContentLeftContainer>
            <ContentMiddleContainer>
              <ContentMiddleTitle>Contact Us</ContentMiddleTitle>
              <ContentMiddleText>
                PT. Sasana Solusi Digital Office No.3 Point LAB Co-Working Space
                Graha Pos Indonesia, Lt. 2 Blok C Jl. Banda Bandung 40115
              </ContentMiddleText>
              <ContentMiddleText>Email: cs@sasanadigital.com</ContentMiddleText>
              <ContentMiddleText>WhatsApp: 0811 2141 053</ContentMiddleText>
              <ContentMiddleText>Telepon: 022 2054 1053</ContentMiddleText>
            </ContentMiddleContainer>
            <ContentRightContainer>
              <ContentRightTitle>NEWSLETTER</ContentRightTitle>
              <ContentRightTitle>BLOG</ContentRightTitle>
              <ContentRightTitle>CARRER</ContentRightTitle>
            </ContentRightContainer>
          </SectionEightContentInnerContainer>
          <Copyright>Copyright 2021 - PT Sasana Solusi Digital</Copyright>
        </SectionEightContentContainer>
      </SectionEightContainer>
    );
  }
}

export default SectionEight;
