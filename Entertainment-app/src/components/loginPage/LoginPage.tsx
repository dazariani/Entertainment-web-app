import styled from "styled-components";
import appLogo from "../../images/app-logo.svg";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { userDataType } from "../../user-data";
import { dataProps } from "../../data-type";
import { useState } from "react";

type FormTypes = {
  email: string;
  password: string;
};

interface Props {
  dataList: dataProps[];
  userData: userDataType;
  setUserData: (props: userDataType) => void;
  setCurrentDataIndex: (props: number) => void;
  setData: (props: dataProps) => void;
}

function LoginPage(props: Props) {
  const { dataList, userData, setUserData, setCurrentDataIndex, setData } =
    props;
  const [errorMsg, setErrorMsg] = useState<string>("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormTypes>();

  const error = errors;

  const onSubmit = (data: FormTypes) => {
    userData.forEach((item, ind) => {
      // If mail and password matches data index
      if (data.email == item.email && data.password == item.password) {
        // Set all user indexes to current data index
        userData.forEach((elem) => {
          elem.index = ind;
        });
        setData(dataList[ind]);
        setCurrentDataIndex(ind);
        setUserData([...userData]);
      } else {
        // If there is no mail or password match, set error message
        setErrorMsg("Wrong email or password");
      }
    });
  };

  return (
    <Container>
      <LogoBox>
        <Logo src={appLogo} />
      </LogoBox>

      <ContentBox>
        <PageTitle>Login</PageTitle>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {error.email && <ErrorMsg>{error.email.message}</ErrorMsg>}
          <InputEmail
            placeholder="Email address"
            {...register("email", {
              required: "Email required",
              pattern: {
                value: /@/,
                message: "Email not valid",
              },
            })}
          />
          {error.password && <ErrorMsg>{error.password.message}</ErrorMsg>}
          <InputPassword
            placeholder="Passwords"
            {...register("password", {
              required: "Password required",
            })}
          />
          {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
          <Submit type="submit" value="Login to your account" />
        </Form>

        <SignUpBox>
          <SignUpNote>
            Don’t have an account?
            <SignUpLink>
              <Link to="/signup">Sign Up</Link>
            </SignUpLink>
          </SignUpNote>
        </SignUpBox>
      </ContentBox>
    </Container>
  );
}

export default LoginPage;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.white};
`;
const LogoBox = styled.div`
  margin-block: 48px 58px;
`;
const Logo = styled.img`
  width: 32px;
  height: 25px;
`;

const ContentBox = styled.div`
  max-width: 327px;
  width: 100%;
  background: ${(props) => props.theme.darkBlue};
  border-radius: 10px;
  padding: 24px 24px 32px 24px;
`;
const PageTitle = styled.h1`
  font-size: 32px;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -0.5px;
  margin-bottom: 40px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;
const InputEmail = styled.input`
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
const InputPassword = styled(InputEmail)`
  display: block;
  margin-bottom: 40px;
`;
const Submit = styled.input`
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

const SignUpBox = styled.div`
  text-align: center;
`;
const SignUpNote = styled.span``;
const SignUpLink = styled.span`
  & > a {
    text-decoration: none;
    color: ${(props) => props.theme.red};
    margin-left: 9px;
  }
`;
const ErrorMsg = styled.span`
  color: ${(props) => props.theme.red};
  margin-bottom: 10px;
`;
