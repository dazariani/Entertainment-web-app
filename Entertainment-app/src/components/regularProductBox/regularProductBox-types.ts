import { dataProps } from "../../data-type";

export interface Props {
  data: dataProps;
  setData: (props: dataProps) => void;
  title: string;
  img: string;
  img2: string;
  img3: string;
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  width: number;
}
