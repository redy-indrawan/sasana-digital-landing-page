import React, { Component } from "react";
import { Title, SubTitle, StyledText } from "../../styles";
import {
  SectionThreeContainer,
  SectionThreeContentContainer,
  SectionThreeContentLeft,
  SectionThreeContentImgOne,
  SectionThreeContentImgTwo,
  SectionThreeContentImgThree,
  SectionThreeContentImgFour,
  SectionThreeContentImgFive,
  SectionThreeContentRight,
} from "./SectionThreeElements";
import imageone from "../../../assets/images/img/section-three-img1.png";
import imagetwo from "../../../assets/images/img/section-three-img2.png";
import imagethree from "../../../assets/images/img/section-three-img3.png";
import imagefour from "../../../assets/images/img/section-three-img4.png";
import imagefive from "../../../assets/images/img/section-three-img5.png";

class SectionThree extends Component {
  render() {
    return (
      <SectionThreeContainer>
        <Title>Kenapa Memilih Sasana Digital?</Title>
        <StyledText>
          Karena kami berkomitmen menghadirkan pelayanan terbaik bagi klien
          dengan alasan:
        </StyledText>
        <SectionThreeContentContainer>
          <SectionThreeContentLeft>
            <SectionThreeContentImgOne src={imageone} />
            <SectionThreeContentImgTwo src={imagetwo} />
            <SectionThreeContentImgThree src={imagethree} />
            <SectionThreeContentImgFour src={imagefour} />
            <SectionThreeContentImgFive src={imagefive} />
          </SectionThreeContentLeft>
          <SectionThreeContentRight>
            <div>
              <SubTitle>One Stop Digital Solution</SubTitle>
              <StyledText>
                Layanan kami menawarkan solusi digital yang tuntas dan tepat
                sasaran dalam membantu bisnis klien bertumbuh. Mulai dari tahap
                awal perencanaan hingga akhir evaluasi.
              </StyledText>
            </div>
            <div>
              <SubTitle>Layanan yang Terintegrasi</SubTitle>
              <StyledText>
                Layanan yang kami hadirkan telah mengintegrasikan antara
                penggunaan teknologi terkini dengan sumber daya manusia yang
                ahli di bidangnya.
              </StyledText>
            </div>
            <div>
              <SubTitle>Terbukti &#38; Terpercaya</SubTitle>
              <StyledText>
                Layanan kami telah dipercaya oleh puluhan bisnis di Indonesia
                hingga mancanegara yang dibuktikan dengan adanya portofolio dari
                setiap kegiatan.
              </StyledText>
            </div>
            <div>
              <SubTitle>Prinsip Kerja</SubTitle>
              <StyledText>
                Prinsip kerja yang kami pegang berlandaskan pada sikap
                Profesionalisme dan Integritas demi memberikan pelayanan terbaik
                kepada klien.
              </StyledText>
            </div>
          </SectionThreeContentRight>
        </SectionThreeContentContainer>
      </SectionThreeContainer>
    );
  }
}

export default SectionThree;
