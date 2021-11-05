import React, { Component } from "react";
import {
  SectionSevenContainer,
  SectionSevenContainerInner,
  SectionSevenContentContainer,
  SectionSevenTitle,
  SectionSevenContent,
  StyledButton,
} from "./SectionSevenElements";

class SectionSeven extends Component {
  render() {
    return (
      <SectionSevenContainer>
        <SectionSevenContainerInner>
          <SectionSevenContentContainer>
            <SectionSevenTitle>
              Segera mulai perjalanan bisnis Anda dalam bertransformasi.
            </SectionSevenTitle>
            <SectionSevenContent>
              Sasana Digital akan dengan senang hati melayani Anda dan membantu
              bisnis Anda bertumbuh di tengah ketatnya persaingan bisnis digital
              saat ini.
            </SectionSevenContent>
          </SectionSevenContentContainer>
          <StyledButton>Training Bersama Kami</StyledButton>
        </SectionSevenContainerInner>
      </SectionSevenContainer>
    );
  }
}

export default SectionSeven;
