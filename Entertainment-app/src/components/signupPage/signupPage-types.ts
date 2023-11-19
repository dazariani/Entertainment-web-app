import { userDataType } from "../../user-data";
import { dataProps } from "../../data-type";

export type FormTypes = {
  email: string;
  password: string;
  repPassword: string;
};
export interface Props {
  userData: userDataType;
  setUserData: (props: userDataType) => void;
  dataList: dataProps[];
  setDataList: (props: dataProps[]) => void;
  currentDataIndex: number;
}
