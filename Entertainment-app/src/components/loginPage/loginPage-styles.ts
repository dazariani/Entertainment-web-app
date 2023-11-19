import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.white};
`;
export const LogoBox = styled.div`
  margin-block: 48px 58px;
`;
export const Logo = styled.img`
  width: 32px;
  height: 25px;
`;

export const ContentBox = styled.div`
  max-width: 327px;
  width: 100%;
  background: ${(props) => props.theme.darkBlue};
  border-radius: 10px;
  padding: 24px 24px 32px 24px;
`;
export const PageTitle = styled.h1`
  font-size: 32px;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -0.5px;
  margin-bottom: 40px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;
export const InputEmail = styled.input`
  display: block;
  font-size: 15px;
  font-weight: 300;
  line-height: normal;
  background: ${(props) => props.theme.darkBlue};
  color: ${(props) => props.theme.white};
  padding-inline: 16px;
  padding-block: 9px;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.grey};
  margin-bottom: 24px;
`;
export const InputPassword = styled(InputEmail)`
  display: block;
  margin-bottom: 40px;
`;
export const Submit = styled.input`
  display: block;
  font-size: 15px;
  font-weight: 300;
  line-height: normal;
  background: ${(props) => props.theme.red};
  color: ${(props) => props.theme.white};
  border-radius: 6px;
  padding: 15px 68px;
  margin-bottom: 24px;
  border: none;
`;

export const SignUpBox = styled.div`
  text-align: center;
`;
export const SignUpNote = styled.span``;
export const SignUpLink = styled.span`
  & > a {
    text-decoration: none;
    color: ${(props) => props.theme.red};
    margin-left: 9px;
  }
`;
export const ErrorMsg = styled.span`
  color: ${(props) => props.theme.red};
  margin-bottom: 10px;
`;
