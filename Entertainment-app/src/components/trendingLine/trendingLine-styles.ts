import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${(props) => props.theme.black};
`;
export const Container = styled.div`
  width: 100%;
  padding-left: 16px;
  @media (min-width: 768px) {
    padding-left: 25px;
  }
  @media (min-width: 1440px) {
    padding-left: 36px;
  }
`;
export const ContentBox = styled.div<{ $width: number }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: ${(props) => (props.$width < 768 ? "16px" : "40px")};
  align-items: center;
  overflow: hidden;
`;

export const SectionTitle = styled.h1`
  font-size: 20px;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -0.312px;
  color: ${(props) => props.theme.white};
  margin-bottom: 16px;
  margin-top: 24px;
  @media (min-width: 768px) {
    font-size: 32px;
    letter-spacing: -0.5px;
    margin-top: 34px;
    margin-bottom: 25px;
  }
`;
