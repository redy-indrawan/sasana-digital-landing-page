import React, { Component } from "react";
import { Title, StyledText, SubTitle } from "../../styles";
import {
  SectionFiveContainer,
  SectionFiveCarouselContainer,
  StyledCarousel,
  SectionFiveCarouselItem,
  SectionFiveCarouselImg,
  SectionFiveCarouselContent,
  StyledSubTitle,
} from "./SectionFiveElements";

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
    "../../../assets/images/img/activities",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

class SectionFive extends Component {
  state = {
    items: [
      {
        id: 1,
        name: "section-five-1.png",
        alt: "aktivitas 1",
        height: 255,
        width: 313,
        firstTitle: "Community Training",
        secondTitle: "Kementrian Kelautan dan Perikanan",
        content: "Deskripsi kegiatan yang akan diadakan",
      },
      {
        id: 2,
        name: "section-five-2.png",
        alt: "aktivitas 2",
        height: 255,
        width: 313,
        firstTitle: "Public Training",
        secondTitle: "Digital Marketing Fundamental",
        content: "Deskripsi kegiatan yang akan diadakan",
      },
      {
        id: 3,
        name: "section-five-3.png",
        alt: "aktivitas 3",
        height: 255,
        width: 313,
        firstTitle: "In-House Training",
        secondTitle: "PT Gerbang Sinergi Prima",
        content: "Deskripsi kegiatan yang akan diadakan",
      },
      {
        id: 4,
        name: "section-five-1.png",
        alt: "aktivitas 1",
        height: 255,
        width: 313,
        firstTitle: "Community Training",
        secondTitle: "Kementrian Kelautan dan Perikanan",
        content: "Deskripsi kegiatan yang akan diadakan",
      },
      {
        id: 5,
        name: "section-five-2.png",
        alt: "aktivitas 2",
        height: 255,
        width: 313,
        firstTitle: "Public Training",
        secondTitle: "Digital Marketing Fundamental",
        content: "Deskripsi kegiatan yang akan diadakan",
      },
      {
        id: 6,
        name: "section-five-3.png",
        alt: "aktivitas 3",
        height: 255,
        width: 313,
        firstTitle: "In-House Training",
        secondTitle: "PT Gerbang Sinergi Prima",
        content: "Deskripsi kegiatan yang akan diadakan",
      },
      {
        id: 7,
        name: "section-five-1.png",
        alt: "aktivitas 1",
        height: 255,
        width: 313,
        firstTitle: "Community Training",
        secondTitle: "Kementrian Kelautan dan Perikanan",
        content: "Deskripsi kegiatan yang akan diadakan",
      },
      {
        id: 8,
        name: "section-five-2.png",
        alt: "aktivitas 2",
        height: 255,
        width: 313,
        firstTitle: "Public Training",
        secondTitle: "Digital Marketing Fundamental",
        content: "Deskripsi kegiatan yang akan diadakan",
      },
      {
        id: 9,
        name: "section-five-3.png",
        alt: "aktivitas 3",
        height: 255,
        width: 313,
        firstTitle: "In-House Training",
        secondTitle: "PT Gerbang Sinergi Prima",
        content: "Deskripsi kegiatan yang akan diadakan",
      },
    ],
  };
  render() {
    const { items } = this.state;
    return (
      <SectionFiveContainer>
        <Title>Aktivitas Sasana Digital</Title>
        <StyledText>
          Berikut dokumentasi kegiatan yang pernah kami selenggarakan baik
          bersama instansi negara maupun swasta.
        </StyledText>
        <SectionFiveCarouselContainer className="section-five-carousel">
          <StyledCarousel itemsToShow={3}>
            {items.map((item) => (
              <SectionFiveCarouselItem>
                <SectionFiveCarouselImg
                  key={item.id}
                  src={images[item.name].default}
                  alt={item.alt}
                  height={item.height}
                  width={item.width}
                />
                <SectionFiveCarouselContent>
                  <StyledSubTitle>{item.firstTitle}</StyledSubTitle>
                  <SubTitle>{item.secondTitle}</SubTitle>
                  <StyledText>{item.content}</StyledText>
                </SectionFiveCarouselContent>
              </SectionFiveCarouselItem>
            ))}
          </StyledCarousel>
        </SectionFiveCarouselContainer>
      </SectionFiveContainer>
    );
  }
}

export default SectionFive;
