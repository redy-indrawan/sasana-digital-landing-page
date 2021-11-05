import React, { Component } from "react";
import { Title, StyledText } from "../../styles";
import {
  SectionFourContainer,
  SectionFourCarouselContainer,
  StyledCarousel,
  SectionFourCarouselItem,
  SectionFourCarouselImg,
} from "./SectionFourElements";

import "./styles.css";

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context(
    "../../../assets/images/logo/client",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

class SectionFour extends Component {
  state = {
    items: [
      {
        id: 1,
        name: "kementerian-keluatan-dan-perikanan-indonesia.png",
        alt: "logo kementerian keluatan dan perikanan indonesia",
        height: 114,
        width: 110,
      },
      {
        id: 2,
        name: "pegadaian.png",
        alt: "logo pegadaian",
        height: 76,
        width: 130,
      },
      { id: 3, name: "adetex.png", alt: "logo adetex", height: 55, width: 136 },
      { id: 4, name: "murata.png", alt: "logo murata", height: 46, width: 134 },
      { id: 5, name: "kmc.png", alt: "logo kmc", height: 86, width: 129 },
      {
        id: 6,
        name: "marwah.png",
        alt: "logo marwah",
        height: 150,
        width: 150,
      },
      {
        id: 7,
        name: "kementerian-keluatan-dan-perikanan-indonesia.png",
        alt: "logo kementerian keluatan dan perikanan indonesia",
        height: 114,
        width: 110,
      },
      {
        id: 8,
        name: "pegadaian.png",
        alt: "logo pegadaian",
        height: 76,
        width: 130,
      },
    ],
  };
  render() {
    const { items } = this.state;
    return (
      <SectionFourContainer>
        <Title>Klien Hebat Sasana Digital</Title>
        <StyledText>
          Klien Nasional hingga Internasional telah mempercayakan kami
        </StyledText>
        <StyledText>
          sebagai partner yang tepat dalam bertransformasi.
        </StyledText>
        <SectionFourCarouselContainer>
          <StyledCarousel itemsToShow={6}>
            {items.map((item) => (
              <SectionFourCarouselItem>
                <SectionFourCarouselImg
                  key={item.id}
                  src={images[item.name].default}
                  alt={item.alt}
                  height={item.height}
                  width={item.width}
                />
              </SectionFourCarouselItem>
            ))}
          </StyledCarousel>
        </SectionFourCarouselContainer>
      </SectionFourContainer>
    );
  }
}

export default SectionFour;
