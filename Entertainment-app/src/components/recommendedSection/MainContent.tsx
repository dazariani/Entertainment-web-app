import styled from "styled-components";
import RegularProductBox from "../regularProductBox/RegularProductBox";
import { dataProps } from "../../data-type";

interface Props {
  data: dataProps | null;
  setData: (props: dataProps | null) => void;
  inputValue: string;
  resultCount: number;
  setResultCount: (props: number) => void;
  tabNum: number;
  width: number;
}

function RecommendedSection(props: Props) {
  const { data, setData, inputValue, tabNum, width } = props;

  // Search result number
  let filteredDataLength =
    tabNum == 0
      ? data?.filter((item) =>
          item.title.toLowerCase().includes(inputValue.toLowerCase())
        ).length
      : tabNum == 1
      ? data?.filter(
          (item) =>
            item.category == "Movie" &&
            item.title.toLowerCase().includes(inputValue.toLowerCase())
        ).length
      : tabNum == 2
      ? data?.filter(
          (item) =>
            item.category == "TV Series" &&
            item.title.toLowerCase().includes(inputValue.toLowerCase())
        ).length
      : tabNum == 3
      ? data?.filter(
          (item) =>
            item.isBookmarked &&
            item.title.toLowerCase().includes(inputValue.toLowerCase())
        ).length
      : null;

  // Display categories on different pages
  const getCategory = (tabIndex: number, bookCategory: number) => {
    let result =
      inputValue === "" &&
      tabNum == tabIndex &&
      data?.map((item, ind) => {
        let condition =
          bookCategory == 0
            ? tabIndex == 0
              ? item.isTrending == false
              : tabIndex == 1
              ? item.category == "Movie"
              : tabIndex == 2
              ? item.category == "TV Series"
              : tabIndex == 3
              ? item.isBookmarked == true && item.category == "Movie"
              : null
            : tabIndex == 3
            ? item.isBookmarked == true && item.category == "TV Series"
            : null;

        if (condition) {
          const {
            title,
            thumbnail: {
              regular: { small, medium, large },
            },
            year,
            category,
            rating,
            isBookmarked,
          } = item;
          return (
            <RegularProductBox
              data={data}
              setData={setData}
              title={title}
              img={small}
              img2={medium}
              img3={large}
              width={width}
              year={year}
              category={category}
              rating={rating}
              isBookmarked={isBookmarked}
              key={ind}
            />
          );
        }
      });
    return result;
  };

  // Display search result content according to tabs(index)
  const getSearchResult = (tabIndex: number) => {
    let result =
      inputValue !== "" &&
      tabNum == tabIndex &&
      data
        ?.filter((item) => {
          let condition =
            tabIndex == 1
              ? item.category == "Movie"
              : tabIndex == 2
              ? item.category == "TV Series"
              : tabIndex == 3
              ? item.isBookmarked == true
              : " ";
          return (
            condition &&
            item.title.toLowerCase().includes(inputValue.toLowerCase())
          );
        })
        .map((item, ind) => {
          const {
            title,
            thumbnail: {
              regular: { small, medium, large },
            },
            year,
            category,
            rating,
            isBookmarked,
          } = item;

          return (
            <RegularProductBox
              data={data}
              setData={setData}
              title={title}
              img={small}
              img2={medium}
              img3={large}
              width={width}
              year={year}
              category={category}
              rating={rating}
              isBookmarked={isBookmarked}
              key={ind}
            />
          );
        });

    return result;
  };

  return (
    <Wrapper>
      <SectionTitle>
        {inputValue == ""
          ? tabNum == 0
            ? "Recommended for you"
            : tabNum == 1
            ? "Movies"
            : tabNum == 2
            ? "TV Series"
            : tabNum == 3
            ? "Bookmarked Movies"
            : ""
          : `Found ${filteredDataLength} results for '${inputValue}'`}
      </SectionTitle>

      <Container>
        {/* --------------  H O M E  ---------------- */}
        {/* Recomended product on home page */}
        {getCategory(0, 0)}
        {/* Search results on home page */}
        {getSearchResult(0)}

        {/* --------------  M O V I E S  ---------------- */}
        {/* Default movies page */}
        {getCategory(1, 0)}
        {/* Movies page search results */}
        {getSearchResult(1)}

        {/* -----------------  TV  S H O W S  ----------------- */}
        {/* Default tv shoes page */}
        {getCategory(2, 0)}
        {/* Tv shows page search results */}
        {getSearchResult(2)}

        {/* -----------------  B O O K M A R K E D   ----------------- */}
        {/* Default bookmarked page */}
        {getCategory(3, 0)}
        {/* Bookmarked page search results */}
        {getSearchResult(3)}
      </Container>
      {tabNum == 3 && inputValue == "" && (
        <SectionTitle>Bookmarked TV Series</SectionTitle>
      )}

      <Container $width={width}>{getCategory(3, 1)}</Container>
    </Wrapper>
  );
}

export default RecommendedSection;

const Wrapper = styled.div`
  background: ${(props) => props.theme.black};
  padding-inline: 16px;
  padding-bottom: 60px;
  @media (min-width: 768px) {
    padding-inline: 25px;
  }
  @media (min-width: 1440px) {
    padding-inline: 35px;
    padding-right: 60px;
  }
  @media (min-width: 1560px) {
    padding-inline: 35px;
  }
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(164px, 1fr));
  gap: 16px;
  min-height: 152.7px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    row-gap: 24px;
    column-gap: 29px;
    min-height: 190.45px;
  }
  @media (min-width: 1440px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    row-gap: 32px;
    column-gap: 35px;
    min-height: 224.45px;
  }
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
    margin-bottom: 24px;
    margin-top: 39px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 32px;
    margin-top: 40px;
    font-size: 32px;
  }
`;
