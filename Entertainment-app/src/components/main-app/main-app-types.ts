import { dataProps } from "../../data-type";
import { userDataType } from "../../user-data";

export interface Props {
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
