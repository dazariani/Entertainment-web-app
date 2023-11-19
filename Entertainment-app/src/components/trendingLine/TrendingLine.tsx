import ProductBox from "../TrendingProductBox/TrendingProductBox";
import { useRef } from "react";
import {
  Wrapper,
  Container,
  ContentBox,
  SectionTitle,
} from "./trendingLine-styles";
import { Props } from "./trendingLine-types";

function TrendingLine(props: Props) {
  const imageWidthRef = useRef<HTMLDivElement | null>(null);

  const { data, setData, scrollValue, setScrollValue, width } = props;

  // Trending section scrolling actions
  const handleScroll = (e: WheelEvent) => {
    let scrollStep;
    let gapSize = width < 768 ? 16 : 40; // according to design
    if (imageWidthRef.current) {
      scrollStep = (imageWidthRef.current?.offsetWidth + gapSize) / 8;

      if (
        e.deltaY > 0 &&
        data &&
        Math.abs(scrollValue) <
          (imageWidthRef.current.offsetWidth + gapSize) *
            (data.filter((item) => item.isTrending).length - 1)
      ) {
        setScrollValue(scrollValue - scrollStep);
      }
      if (e.deltaY < 0 && Math.abs(scrollValue) > 0) {
        setScrollValue(scrollValue + scrollStep);
      }
    }
  };

  return (
    <Wrapper>
      <Container>
        <SectionTitle>Trending</SectionTitle>

        <ContentBox
          $width={width}
          onMouseEnter={() => {
            // Disable entire page scroll
            document.body.style.overflow = "hidden";
          }}
          onMouseLeave={() => {
            // Enable entire page scroll
            document.body.style.overflow = "visible";
          }}
          onWheel={(e: WheelEvent) => handleScroll(e)}
        >
          {data?.map((item, ind) => {
            if (item.isTrending && item.thumbnail.trending) {
              const {
                title,
                thumbnail: {
                  trending: { small, large },
                },
                year,
                category,
                rating,
                isBookmarked,
              } = item;
              return (
                <ProductBox
                  data={data}
                  setData={setData}
                  boxRef={imageWidthRef}
                  scrollValue={scrollValue}
                  title={title}
                  img={small}
                  img2={large}
                  year={year}
                  category={category}
                  rating={rating}
                  isBookmarked={isBookmarked}
                  width={width}
                  key={ind}
                />
              );
            }
          })}
        </ContentBox>
      </Container>
    </Wrapper>
  );
}

export default TrendingLine;
