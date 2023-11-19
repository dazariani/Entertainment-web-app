import { dataProps } from "../../data-type";

export interface Props {
  data: dataProps | null;
  setData: (props: dataProps | null) => void;
  inputValue: string;
  resultCount: number;
  setResultCount: (props: number) => void;
  tabNum: number;
  width: number;
}
