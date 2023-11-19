import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${(props) => props.theme.black};
  padding-inline: 16px;
  padding-bottom: 60px;
  @media (min-width: 768px) {
    padding-inline: 25px;
  }
  @media (min-width: 1440px) {
    padding-inline: 35px;
    padding-right: 60px;
  }
  @media (min-width: 1560px) {
    padding-inline: 35px;
  }
`;
export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(164px, 1fr));
  gap: 16px;
  min-height: 152.7px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    row-gap: 24px;
    column-gap: 29px;
    min-height: 190.45px;
  }
  @media (min-width: 1440px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    row-gap: 32px;
    column-gap: 35px;
    min-height: 224.45px;
  }
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
    margin-bottom: 24px;
    margin-top: 39px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 32px;
    margin-top: 40px;
    font-size: 32px;
  }
`;
