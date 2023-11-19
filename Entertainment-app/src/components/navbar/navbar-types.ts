import { dataProps } from "../../data-type";
import { userDataType } from "../../user-data";

export interface Props {
  tabNum: number;
  setTabNum: (props: number) => void;
  data: dataProps | null;
  setData: (props: dataProps | null) => void;
  userData: userDataType;
  setUserData: (props: userDataType) => void;
}
