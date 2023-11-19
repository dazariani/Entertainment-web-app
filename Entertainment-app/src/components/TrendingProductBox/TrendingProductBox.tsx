import bookmarkEmpty from "../../images/icon-bookmark-empty.svg";
import bookmarkFull from "../../images/icon-bookmark-full.svg";
import categoryMovie from "../../images/icon-category-movie.svg";
import categoryTv from "../../images/icon-category-tv.svg";
import playBtn from "../../images/icon-play.svg";
import { Props } from "./trendingProductBox-types";

import {
  Wrapper,
  Container,
  BookmarkContainer,
  Bookmarkbox,
  BookmarkIcon,
  InfoContainer,
  InfoLeft,
  YearCategoryBox,
  Year,
  CategoryBox,
  CategoryIcon,
  CategoryName,
  Title,
  RaitingBox,
  PageMask,
  PlayBtnBox,
  PlayBtn,
  PlayText,
} from "./trendingProductBox-styles";

const ProductBox = function ProductBox(props: Props) {
  const {
    data,
    setData,
    title,
    img,
    img2,
    year,
    category,
    rating,
    isBookmarked,
    scrollValue,
    boxRef,
    width,
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
    <Wrapper
      ref={boxRef}
      style={{ transform: `translateX(${scrollValue}px) ` }}
    >
      <PageMask>
        <PlayBtnBox>
          <PlayBtn src={playBtn} />
          <PlayText>Play</PlayText>
        </PlayBtnBox>
      </PageMask>
      <Container
        $image={img.substring(1)}
        $image2={img2.substring(1)}
        $width={width}
      >
        {/* Bookmark */}
        <BookmarkContainer>
          <Bookmarkbox onClick={handleBookmark}>
            <BookmarkIcon src={isBookmarked ? bookmarkFull : bookmarkEmpty} />
          </Bookmarkbox>
        </BookmarkContainer>
        {/* Bottom info */}
        <InfoContainer>
          <InfoLeft>
            <YearCategoryBox>
              <Year>{year}</Year>
              <CategoryBox>
                <CategoryIcon
                  src={category == "Movie" ? categoryMovie : categoryTv}
                />
                <CategoryName>{category}</CategoryName>
              </CategoryBox>
            </YearCategoryBox>
            <Title>{title}</Title>
          </InfoLeft>

          <RaitingBox>{rating}</RaitingBox>
        </InfoContainer>
      </Container>
    </Wrapper>
  );
};

export default ProductBox;
