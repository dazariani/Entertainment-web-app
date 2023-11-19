import styled from "styled-components";
import searchIcon from "../../images/icon-search.svg";

interface Props {
  inputValue: string;
  setInputValue: (props: string) => void;
  tabNum: number;
}

function SearchInput(props: Props) {
  const { inputValue, setInputValue, tabNum } = props;

  const placeHolder =
    tabNum == 0
      ? "Search for movies or TV series"
      : tabNum == 1
      ? "Search for movies"
      : tabNum == 2
      ? "Search for TV series"
      : "Search for bookmarked shows";

  return (
    <Container>
      <Input
        placeholder={placeHolder}
        value={inputValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInputValue(e.target.value)
        }
      />
    </Container>
  );
}

export default SearchInput;

const Container = styled.div`
  background: ${(props) => props.theme.black};
  padding-top: 24px;
  padding-inline: 16px;
  @media (min-width: 768px) {
    padding-top: 34px;
    padding-inline: 25px;
  }
  @media (min-width: 1440px) {
    padding-top: 34px;
    padding-inline: 36px;
  }
`;
const Input = styled.input`
  width: 100%;
  font-size: 16px;
  font-weight: 300;
  line-height: normal;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme.black};
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-position: left;
  padding-block: 8px;
  padding-left: 50px;
  border: none;
  &:focus {
    outline: none;
  }
  @media (min-width: 768px) {
    font-size: 24px;
  }
  @media (min-width: 1440px) {
    caret-color: ${(props) => props.theme.red};
  }
`;
