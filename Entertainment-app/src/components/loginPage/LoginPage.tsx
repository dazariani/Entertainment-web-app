import appLogo from "../../images/app-logo.svg";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FormTypes, Props } from "./loginPage-types";
import { useState } from "react";
import {
  Container,
  LogoBox,
  Logo,
  ContentBox,
  PageTitle,
  Form,
  InputEmail,
  InputPassword,
  Submit,
  SignUpBox,
  SignUpNote,
  SignUpLink,
  ErrorMsg,
} from "./loginPage-styles";

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
