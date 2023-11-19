import appLogo from "../../images/app-logo.svg";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { dataObject } from "../../data";
import { useNavigate } from "react-router-dom";
import { FormTypes, Props } from "./signupPage-types";
import {
  Container,
  LogoBox,
  Logo,
  ContentBox,
  PageTitle,
  Form,
  InputEmail,
  InputPassword,
  InputRepeatPassword,
  Submit,
  SignUpBox,
  SignUpNote,
  SignUpLink,
  ErrorMsg,
} from "./signupPage-styles";

function SignupPage(props: Props) {
  const { userData, setUserData, dataList, setDataList, currentDataIndex } =
    props;

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormTypes>();

  const error = errors;

  const onSubmit = (data: FormTypes) => {
    setUserData([
      ...userData,
      {
        email: data.email,
        password: data.password,
        index: currentDataIndex,
      },
    ]);

    setDataList([...dataList, dataObject]);
    navigate("/");
    console.log(data);
  };

  console.log(error.repPassword?.message);

  return (
    <Container>
      <LogoBox>
        <Logo src={appLogo} />
      </LogoBox>

      <ContentBox>
        <PageTitle>Sign Up</PageTitle>
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
              minLength: {
                value: 8,
                message: "Min 10 characters",
              },
            })}
          />

          {error.repPassword && (
            <ErrorMsg>{error.repPassword.message}</ErrorMsg>
          )}
          <InputRepeatPassword
            placeholder="Repeat Password"
            {...register("repPassword", {
              required: true,
              validate: (val: string) => {
                if (watch("password") !== val) {
                  return "Your passwords do no match";
                }
              },
            })}
          />

          <Submit type="submit" value="Create an account" />
        </Form>

        <SignUpBox>
          <SignUpNote>
            Alread have an account?
            <SignUpLink>
              <Link to="/">Login</Link>
            </SignUpLink>
          </SignUpNote>
        </SignUpBox>
      </ContentBox>
    </Container>
  );
}

export default SignupPage;
