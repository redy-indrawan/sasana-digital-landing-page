import React, { Component } from "react";
import { 
    SectionTwoContainer, 
    SectionTwoCardContainer, 
    SectionTwoCardItem, 
    SectionTwoCardImgContainer,
    SectionTwoCardImg,
    SectionTwoCardSubTitle, 
    SectionTwoCardOptions, 
    SectionTwoCardMore,
    StyledFaArrowRight
} from "./SectionTwoElements";
import {Title, SubTitle, StyledText} from "../../styles";
import CardImgOne from "../../../assets/images/logo/logo-sasana-marketing-studio.png";
import CardImgTwo from "../../../assets/images/logo/logo-sasana-empowering.png";
import CardImgThree from "../../../assets/images/logo/logo-sasana-design-studio.png";


class SectionTwo extends Component {
    render () {
        return (
            <SectionTwoContainer>
                <Title>Layanan Transformasi Digital</Title>
                <StyledText>Mulai perjalanan bisnis Anda dalam bertransformasi melalui 3 layanan utama kami.</StyledText>
                <SectionTwoCardContainer>
                    <SectionTwoCardItem>
                        <SectionTwoCardImgContainer>
                            <SectionTwoCardImg src={CardImgOne} />
                        </SectionTwoCardImgContainer>
                        <SubTitle>Digital Marketing</SubTitle>
                        <StyledText>Maksimalkan peran dan strategi Digital Marketing untuk semua kegiatan pemasaran dalam bisnis Anda.</StyledText>
                        <SectionTwoCardSubTitle>Pilihan Layanan</SectionTwoCardSubTitle>
                        <SectionTwoCardOptions>
                            Konsultasi | Training
                        </SectionTwoCardOptions>
                        <SectionTwoCardMore><span>Selengkapnya </span><StyledFaArrowRight /></SectionTwoCardMore>
                    </SectionTwoCardItem>

                    <SectionTwoCardItem>
                        <SectionTwoCardImgContainer>
                            <SectionTwoCardImg src={CardImgTwo} />
                        </SectionTwoCardImgContainer>
                        <SubTitle>Digital Solution</SubTitle>
                        <StyledText>Tingkatkan kinerja perusahaan melalui layanan Digital Solution untuk Produktivitas Bisnis yang berkelanjutan.</StyledText>
                        <SectionTwoCardSubTitle>Pilihan Layanan</SectionTwoCardSubTitle>
                        <SectionTwoCardOptions>
                            Konsultasi | Training
                        </SectionTwoCardOptions>
                        <SectionTwoCardMore><span>Selengkapnya </span><StyledFaArrowRight /></SectionTwoCardMore>
                    </SectionTwoCardItem>

                    <SectionTwoCardItem>
                        <SectionTwoCardImgContainer>
                            <SectionTwoCardImg src={CardImgThree} />
                        </SectionTwoCardImgContainer>
                        <SubTitle>Digital Media Tools</SubTitle>
                        <StyledText>Optimalkan peran Desain Visual dalam kegiatan pemasaran di bisnis Anda melalui layanan Digital Media Tools.</StyledText>
                        <SectionTwoCardSubTitle>Pilihan Layanan</SectionTwoCardSubTitle>
                        <SectionTwoCardOptions>
                            UI Design | Graphic Design | Social Media
                        </SectionTwoCardOptions>
                        <SectionTwoCardMore><span>Selengkapnya </span><StyledFaArrowRight /></SectionTwoCardMore>
                    </SectionTwoCardItem>
                </SectionTwoCardContainer>
            </SectionTwoContainer>
        )
    }
}

export default SectionTwo;