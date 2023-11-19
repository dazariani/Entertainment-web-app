import { dataProps } from "../../data-type";

export interface Props {
  title: string;
  img: string;
  img2: string;
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  scrollValue: number;
  boxRef: React.MutableRefObject<HTMLDivElement | null>;
  width: number;
  data: dataProps;
  setData: (props: dataProps) => void;
}
