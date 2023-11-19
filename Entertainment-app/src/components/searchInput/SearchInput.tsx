import { Container, Input } from "./serachInput-styles";
import { Props } from "./searchInput-types";

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
