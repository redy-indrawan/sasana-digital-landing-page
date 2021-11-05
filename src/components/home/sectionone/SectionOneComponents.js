import React from "react";
import { SectionOneContainer, SectionOneLeft, SectionOneRight, SectionOneImg } from "./SectionOneElements";
import { Title, StyledText } from "../../styles";
import sectiononeimg from "../../../assets/images/img/section-one.png";

const useViewport = () => {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  // Return the width so we can use it in our components
  return { width };
}

export const SectionOneComponents = () => {
  const { width } = useViewport();
  const breakpoint = 1279;

  return width < breakpoint ?
    <SectionOneContainer className="flex">
        <SectionOneLeft className="content-left flex-1 ">
            <Title>Akselerasikan Bisnis Anda Melalui Pemanfaatan Teknologi Digital</Title>
            <StyledText>Berangkat dari berbagai permasalahan digital yang sering kali dihadapi suatu bisnis, </StyledText>
            <StyledText>Sasana Digital berkomitmen menghadirkan sebuah solusi efektif melalui Transformasi Digital.</StyledText>
        </SectionOneLeft>
    </SectionOneContainer>
    :
    <SectionOneContainer className="flex">
        <SectionOneLeft className="content-left flex-1 ">
            <Title>Akselerasikan Bisnis Anda Melalui Pemanfaatan Teknologi Digital</Title>
            <StyledText>Berangkat dari berbagai permasalahan digital yang sering kali dihadapi suatu bisnis, </StyledText>
            <StyledText>Sasana Digital berkomitmen menghadirkan sebuah solusi efektif melalui Transformasi Digital.</StyledText>
        </SectionOneLeft>
        <SectionOneRight className="content-right flex-1">
            <SectionOneImg src={sectiononeimg} alt="Segera mulai perjalanan bisnis anda" />
        </SectionOneRight>
    </SectionOneContainer>
}
