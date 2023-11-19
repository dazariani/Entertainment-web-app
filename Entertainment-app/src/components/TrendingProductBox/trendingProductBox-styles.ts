import styled from "styled-components";
import bookmarkHover from "../../images/icon-bookmark-empty-hover.svg";

export const Wrapper = styled.div`
  @media (min-width: 1440px) {
    cursor: pointer;
    &:hover > div:first-child {
      display: flex;
    }
  }
`;
export const Container = styled.div<{
  $image: string;
  $image2: string;
  $width: number;
}>`
  width: ${(props) => (props.$width < 768 ? "240px" : "470px")};
  height: ${(props) => (props.$width < 768 ? "140px" : "230px")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${(props) =>
    props.$width < 768
      ? `background-image: url(${props.$image});`
      : `background-image: url(${props.$image2});`};
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 8px;
  color: ${(props) => props.theme.white};
  padding: 16px 16px 24px 24px;
`;
export const BookmarkContainer = styled.div`
  display: flex;
  justify-content: end;
`;
export const Bookmarkbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background-color: ${(props) => props.theme.grey};
  border-radius: 50%;
  opacity: 0.7;
  transform: rotate(1.2deg);
  @media (min-width: 1440px) {
    &:hover {
      background-color: ${(props) => props.theme.white};
    }
    &:hover > img {
      content: url(${bookmarkHover});
    }
  }
`;
// Top part of movie box
export const BookmarkIcon = styled.img``;
// Bottom part of movie box
export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const InfoLeft = styled.div``;
export const YearCategoryBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 300;
  line-height: normal;
  opacity: 0.75;
  margin-bottom: 5px;
  @media (min-width: 768px) {
    font-size: 15px;
    gap: 12px;
  }
`;
export const Year = styled.span``;
export const CategoryBox = styled.li`
  display: flex;
  align-items: center;
  gap: 7px;
  &::before {
    content: "";
    display: block;
    width: 4px;
    height: 4px;
    background: ${(props) => props.theme.grey};
    border-radius: 50%;
  }
  @media (min-width: 768px) {
    gap: 10px;
  }
`;
export const CategoryIcon = styled.img``;
export const CategoryName = styled.span``;

export const Title = styled.span`
  font-size: 15px;
  font-weight: 500;
  line-height: normal;
  @media (min-width: 768px) {
    font-size: 24px;
  }
`;
export const RaitingBox = styled.div`
  background-color: rgb(90, 105, 143, 0.25);
  font-size: 13px;
  font-weight: 300;
  line-height: normal;
  padding-inline: 8px;
  padding-block: 2px;
  border-radius: 10.5px;
  @media (min-width: 768px) {
    font-size: 15px;
  }
`;
export const PageMask = styled.div`
  display: none;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  height: 230px;
`;
export const PlayBtnBox = styled.div`
  text-align: center;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 19px;
  padding: 9px;
  padding-right: 24px;
  color: ${(props) => props.theme.white};
  background-color: rgb(255, 255, 255, 0.25);
  border-radius: 28.5px;
`;
export const PlayBtn = styled.img``;
export const PlayText = styled.span`
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
`;
