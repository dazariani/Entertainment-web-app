import styled from "styled-components";

import bookmarkEmpty from "../../images/icon-bookmark-empty.svg";
import bookmarkFull from "../../images/icon-bookmark-full.svg";
import bookmarkHover from "../../images/icon-bookmark-empty-hover.svg";
import categoryMovie from "../../images/icon-category-movie.svg";
import categoryTv from "../../images/icon-category-tv.svg";
import playBtn from "../../images/icon-play.svg";
import { dataProps } from "../../data-type";

interface Props {
  data: dataProps;
  setData: (props: dataProps) => void;
  title: string;
  img: string;
  img2: string;
  img3: string;
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  width: number;
}

function RegularProductBox(props: Props) {
  const {
    data,
    setData,
    title,
    img,
    img2,
    img3,
    width,
    year,
    category,
    rating,
    isBookmarked,
  } = props;

  // Update isBookmarked data on click
  const handleBookmark = () => {
    data.forEach((item) => {
      if (item.title == title) {
        item.isBookmarked = !item.isBookmarked;
      }
    });
    setData([...data]);
  };
  return (
    <Wrapper>
      <PageMask>
        <PlayBtnBox>
          <PlayBtn src={playBtn} />
          <PlayText>Play</PlayText>
        </PlayBtnBox>
      </PageMask>
      <Container>
        <ImgContainer
          $image={img.substring(1)}
          $image2={img2.substring(1)}
          $image3={img3.substring(1)}
          $width={width}
        >
          <BookmarkContainer>
            <Bookmarkbox onClick={handleBookmark}>
              <BookmarkIcon src={isBookmarked ? bookmarkFull : bookmarkEmpty} />
            </Bookmarkbox>
          </BookmarkContainer>
        </ImgContainer>
        <InfoContainer>
          <FirstLineInfo>
            <Year>{year}</Year>
            <CategoryBox>
              <CategoryIcon
                src={category == "Movie" ? categoryMovie : categoryTv}
              />
              <CategoryName>{category}</CategoryName>
            </CategoryBox>
            <Raiting>{rating}</Raiting>
          </FirstLineInfo>
          <Title>{title}</Title>
        </InfoContainer>
      </Container>
    </Wrapper>
  );
}

export default RegularProductBox;

const Wrapper = styled.div`
  align-self: center;
  justify-self: center;
  @media (min-width: 768px) {
    max-width: 220px;
  }
  @media (min-width: 1440px) {
    position: relative;
    max-width: 280px;
    cursor: pointer;
    &:hover > div:first-child {
      display: flex;
    }
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;
const ImgContainer = styled.div<{
  $image: string;
  $image2: string;
  $width: number;
}>`
  width: 164px;
  height: 110px;
  ${(props) =>
    props.$width < 768
      ? `background-image: url(${props.$image})`
      : props.$width > 768 && props.$width < 1440
      ? `background-image: url(${props.$image2})`
      : `background-image: url(${props.$image3})`};
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
  padding: 8px;
  @media (min-width: 768px) {
    width: 220px;
    height: 140px;
    padding: 16px;
  }
  @media (min-width: 1440px) {
    width: 280px;
    height: 174px;
  }
`;
const BookmarkContainer = styled.div`
  display: flex;
  justify-content: end;
`;
const Bookmarkbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background-color: ${(props) => props.theme.grey};
  border-radius: 50%;
  opacity: 0.7;
  transform: rotate(1.2deg);
  @media (min-width: 1440px) {
    &:hover {
      background-color: ${(props) => props.theme.white};
    }
    &:hover > img {
      content: url(${bookmarkHover});
    }
  }
`;
const BookmarkIcon = styled.img`
  /* &:hover {
    content: url(${bookmarkHover});
  } */
`;
const InfoContainer = styled.div`
  color: ${(props) => props.theme.white};
`;
const FirstLineInfo = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  opacity: 0.75;
  font-size: 11px;
  font-weight: 300;
  line-height: normal;
  @media (min-width: 768px) {
    font-size: 13px;
  }
`;
const Year = styled.span``;
const CategoryBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 6px;
  &::before {
    content: "";
    display: block;
    width: 4px;
    height: 4px;
    background: ${(props) => props.theme.grey};
    border-radius: 50%;
  }

  &::after {
    content: "";
    display: block;
    width: 4px;
    height: 4px;
    background: ${(props) => props.theme.grey};
    border-radius: 50%;
  }
`;
const CategoryIcon = styled.img``;
const CategoryName = styled.span``;
const Raiting = styled.span``;
const Title = styled.h1`
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  color: ${(props) => props.theme.white};
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const PageMask = styled.div`
  display: none;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  height: 174px;
`;
const PlayBtnBox = styled.div`
  text-align: center;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 19px;
  padding: 9px;
  padding-right: 24px;
  color: ${(props) => props.theme.white};
  background-color: rgb(255, 255, 255, 0.25);
  border-radius: 28.5px;
`;
const PlayBtn = styled.img``;
const PlayText = styled.span`
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
`;
