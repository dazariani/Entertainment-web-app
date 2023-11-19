import { dataProps } from "../../data-type";

export interface Props {
  data: dataProps | null;
  setData: (props: dataProps | null) => void;
  scrollValue: number;
  setScrollValue: (props: number) => void;
  width: number;
}
