import styled from "styled-components";

export const Wrapper = styled.div`
  @media (min-width: 768px) {
    padding-inline: 25px;
    padding-top: 23px;
  }
  @media (min-width: 1440px) {
    padding-left: 32px;
    padding-right: 0px;
    padding-block: 32px;
    height: 100vh;
    position: sticky;
    top: 0px;
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.darkBlue};
  padding: 16px;
  @media (min-width: 768px) {
    padding: 21px;
    border-radius: 10px;
  }
  @media (min-width: 1440px) {
    flex-direction: column;
    height: 100%;
    padding-inline: 33px;
    padding-block: 35px;
    border-radius: 20px;
  }
`;

export const LogoBox = styled.div`
  @media (min-width: 1440px) {
    cursor: pointer;
  }
`;
export const LogoImg = styled.img`
  @media (min-width: 768px) {
    width: 32px;
    height: 25px;
  }
`;

export const IconBox = styled.div<{ $isActive: boolean }>`
  & > svg {
    fill: ${(props) => props.$isActive && props.theme.white};
    @media (min-width: 768px) {
      padding: 5px;
      box-sizing: content-box;
    }
  }
  @media (min-width: 1440px) {
    cursor: pointer;
    & > svg {
      transition: 0.2s ease-in-out;
      &:hover {
        fill: ${(props) => !props.$isActive && props.theme.red};
      }
    }
  }
`;
export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 26px;
  @media (min-width: 768px) {
    gap: 40px;
  }
  @media (min-width: 1440px) {
    height: 400px;
    flex-direction: column;
  }
`;
export const AvatarBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.white};
  gap: 10px;
  @media (min-width: 768px) {
    gap: 15px;
  }
  @media (min-width: 1440px) {
    flex-direction: column;
  }
`;
export const AvatarImg = styled.img`
  width: 24px;
  @media (min-width: 768px) {
    width: 32px;
  }
  @media (min-width: 1440px) {
    width: 40px;
  }
`;
export const LogOut = styled.span`
  display: block;
  font-size: 12px;
  background-color: ${(props) => props.theme.red};
  padding: 4px;
  border-radius: 8px;
  @media (min-width: 768px) {
    font-size: 14px;
    padding-inline: 7px;
  }
  @media (min-width: 1440px) {
    font-size: 13px;
    padding-inline: 7px;
    text-align: center;
    border-radius: 50%;
    cursor: pointer;
  }
`;
