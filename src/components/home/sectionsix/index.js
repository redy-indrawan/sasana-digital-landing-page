import React, { Component } from "react";
import { StyledText, SubTitle, Title } from "../../styles";
import sasanaicon from "../../../assets/images/icon/sasana-digital.png";
import {
  SectionSixContainer,
  SectionSixCardContainer,
  SectionSixCardItem,
  SectionSixCardContent,
  SectionSixCardContentInner,
  ContentOne,
  ContentTwo,
  StyledContentText,
  StyledLocation,
  StyledClock,
  StyledStarFill,
  StyledStarHalf,
  StyledStarEmpty,
  StyledReview,
  StyledButton,
  SeeMoreButtonContainer,
  SeeMoreButton,
} from "./SectionSixElements";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import covereventone from "../../../assets/images/img/event/COVER-EVENT-01.png";
import covereventtwo from "../../../assets/images/img/event/COVER-EVENT-02.png";
import covereventthree from "../../../assets/images/img/event/COVER-EVENT-03.png";

class SectionSix extends Component {
  render() {
    return (
      <SectionSixContainer>
        <Title>Acara &#38; Pelatihan Sasana Digital</Title>
        <StyledText>
          Berbagai kegiatan menarik Sasana Digital yang dapat segera Anda ikuti.
        </StyledText>
        <SeeMoreButtonContainer>
          <SeeMoreButton>See More Event</SeeMoreButton>
        </SeeMoreButtonContainer>

        <SectionSixCardContainer>
          <SectionSixCardItem>
            <div>
              <img src={covereventone} alt="cover event one" />
            </div>
            <SectionSixCardContent>
              <SectionSixCardContentInner>
                <ContentOne>
                  <StyledStarFill />
                  <StyledStarFill />
                  <StyledStarFill />
                  <StyledStarFill />
                  <StyledStarHalf />
                  <StyledReview>4.5/5</StyledReview>
                </ContentOne>
                <SubTitle>Marketplace Hack : Tokopedia</SubTitle>
                <ContentTwo>
                  <StyledClock />
                  <StyledContentText>27-Aug-2021 | 12.00 AM</StyledContentText>
                </ContentTwo>
                <ContentTwo>
                  <StyledLocation />
                  <StyledContentText>UDEMY</StyledContentText>
                </ContentTwo>
                <ContentTwo>
                  <img src={sasanaicon} alt="sasana digital icon" />
                  <StyledContentText>By Sasana Digital</StyledContentText>
                </ContentTwo>
              </SectionSixCardContentInner>

              <StyledButton>Paid Course</StyledButton>
            </SectionSixCardContent>
          </SectionSixCardItem>

          <SectionSixCardItem>
            <div>
              <img src={covereventtwo} alt="cover event two" />
            </div>
            <SectionSixCardContent>
              <SectionSixCardContentInner>
                <ContentOne>
                  <StyledStarFill />
                  <StyledStarFill />
                  <StyledStarFill />
                  <StyledStarFill />
                  <StyledStarFill />
                  <StyledReview>5/5</StyledReview>
                </ContentOne>
                <SubTitle>Marketplace Hack : Shopee</SubTitle>
                <ContentTwo>
                  <StyledClock />
                  <StyledContentText>27-Aug-2021 | 12.00 AM</StyledContentText>
                </ContentTwo>
                <ContentTwo>
                  <StyledLocation />
                  <StyledContentText>UDEMY</StyledContentText>
                </ContentTwo>
                <ContentTwo>
                  <img src={sasanaicon} alt="sasana digital icon" />
                  <StyledContentText>By Sasana Digital</StyledContentText>
                </ContentTwo>
              </SectionSixCardContentInner>

              <StyledButton>Paid Course</StyledButton>
            </SectionSixCardContent>
          </SectionSixCardItem>

          <SectionSixCardItem>
            <div>
              <img src={covereventthree} alt="cover event three" />
            </div>
            <SectionSixCardContent>
              <SectionSixCardContentInner>
                <ContentOne>
                  <StyledStarEmpty />
                  <StyledStarEmpty />
                  <StyledStarEmpty />
                  <StyledStarEmpty />
                  <StyledStarEmpty />
                  <StyledReview>0</StyledReview>
                </ContentOne>
                <SubTitle>Digital Marketing untuk Bisnis UMKM</SubTitle>
                <ContentTwo>
                  <StyledClock />
                  <StyledContentText>27-Aug-2021 | 12.00 AM</StyledContentText>
                </ContentTwo>
                <ContentTwo>
                  <StyledLocation />
                  <StyledContentText>UDEMY</StyledContentText>
                </ContentTwo>
                <ContentTwo>
                  <img src={sasanaicon} alt="sasana digital icon" />
                  <StyledContentText>By Sasana Digital</StyledContentText>
                </ContentTwo>
              </SectionSixCardContentInner>
              <StyledButton>Coming Soon</StyledButton>
            </SectionSixCardContent>
          </SectionSixCardItem>
        </SectionSixCardContainer>
      </SectionSixContainer>
    );
  }
}

export default SectionSix;
