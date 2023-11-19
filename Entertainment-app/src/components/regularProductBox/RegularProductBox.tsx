import bookmarkEmpty from "../../images/icon-bookmark-empty.svg";
import bookmarkFull from "../../images/icon-bookmark-full.svg";
import categoryMovie from "../../images/icon-category-movie.svg";
import categoryTv from "../../images/icon-category-tv.svg";
import playBtn from "../../images/icon-play.svg";
import { Props } from "./regularProductBox-types";

import {
  Wrapper,
  Container,
  ImgContainer,
  BookmarkContainer,
  Bookmarkbox,
  BookmarkIcon,
  InfoContainer,
  FirstLineInfo,
  Year,
  CategoryBox,
  CategoryIcon,
  CategoryName,
  Raiting,
  Title,
  PageMask,
  PlayBtnBox,
  PlayBtn,
  PlayText,
} from "./regularProductBox-styles";

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
