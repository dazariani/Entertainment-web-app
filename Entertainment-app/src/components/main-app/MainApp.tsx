import styled from "styled-components";
import { dataProps } from "../../data-type";
import { userDataType } from "../../user-data";
import Navbar from "../navbar/Navbar";
import SearchInput from "../searchInput/SearchInput";
import TrendingLine from "../trendingLine/TrendingLine";
import RecommendedSection from "../recommendedSection/MainContent";

interface Props {
  tabNum: number;
  setTabNum: (props: number) => void;
  inputValue: string;
  setInputValue: (props: string) => void;
  scrollValue: number;
  setScrollValue: (props: number) => void;
  data: dataProps | null;
  setData: (props: dataProps | null) => void;
  width: number;
  resultCount: number;
  setResultCount: (props: number) => void;
  userData: userDataType;
  setUserData: (props: userDataType) => void;
}
function MainApp(props: Props) {
  const {
    tabNum,
    setTabNum,
    inputValue,
    setInputValue,
    scrollValue,
    setScrollValue,
    data,
    setData,
    width,
    resultCount,
    setResultCount,
    userData,
    setUserData,
  } = props;
  return (
    <>
      <Navbar
        data={data}
        setData={setData}
        tabNum={tabNum}
        setTabNum={setTabNum}
        userData={userData}
        setUserData={setUserData}
      />
      <ContentBox $tabNum={tabNum}>
        <SearchInput
          tabNum={tabNum}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />

        {inputValue === "" && tabNum === 0 && (
          <>
            <TrendingLine
              scrollValue={scrollValue}
              setScrollValue={setScrollValue}
              data={data}
              setData={setData}
              width={width}
            />
          </>
        )}
        <RecommendedSection
          resultCount={resultCount}
          setResultCount={setResultCount}
          inputValue={inputValue}
          data={data}
          setData={setData}
          tabNum={tabNum}
          width={width}
        />
      </ContentBox>
    </>
  );
}

export default MainApp;

const ContentBox = styled.div<{ $tabNum: number }>`
  @media (min-width: 1440px) {
    width: ${(props) => (props.$tabNum > 0 ? "100%" : "92%")};
  }
`;
