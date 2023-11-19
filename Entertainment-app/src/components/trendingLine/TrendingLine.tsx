import styled from "styled-components";
import ProductBox from "../TrendingProductBox/TrendingProductBox";
import { dataProps } from "../../data-type";
import { useRef } from "react";

interface Props {
  data: dataProps | null;
  setData: (props: dataProps | null) => void;
  scrollValue: number;
  setScrollValue: (props: number) => void;
  width: number;
}

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
    <Wrapper
    // onClick={() => {
    //   data[0].email = "datoazarini";
    //   data[0].password = "password";

    //   setData(data);
    //   console.log(data);
    // }}
    >
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

const Wrapper = styled.div`
  background: ${(props) => props.theme.black};
`;
const Container = styled.div`
  width: 100%;
  padding-left: 16px;
  @media (min-width: 768px) {
    padding-left: 25px;
  }
  @media (min-width: 1440px) {
    padding-left: 36px;
  }
`;
const ContentBox = styled.div<{ $width: number }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: ${(props) => (props.$width < 768 ? "16px" : "40px")};
  align-items: center;
  overflow: hidden;
`;

const SectionTitle = styled.h1`
  font-size: 20px;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -0.312px;
  color: ${(props) => props.theme.white};
  margin-bottom: 16px;
  margin-top: 24px;
  @media (min-width: 768px) {
    font-size: 32px;
    letter-spacing: -0.5px;
    margin-top: 34px;
    margin-bottom: 25px;
  }
`;
