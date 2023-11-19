import { userDataType } from "../../user-data";
import { dataProps } from "../../data-type";

export type FormTypes = {
  email: string;
  password: string;
};

export interface Props {
  dataList: dataProps[];
  userData: userDataType;
  setUserData: (props: userDataType) => void;
  setCurrentDataIndex: (props: number) => void;
  setData: (props: dataProps) => void;
}
