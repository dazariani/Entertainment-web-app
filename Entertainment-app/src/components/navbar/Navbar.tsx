import { useState, useEffect } from "react";
import { Props } from "./navbar-types";
import appLogo from "../../images/app-logo.svg";
import avatar from "../../images/image-avatar.png";
import iconsData from "../../iconsData";
import {
  Wrapper,
  Container,
  LogoBox,
  LogoImg,
  IconBox,
  IconsContainer,
  AvatarBox,
  AvatarImg,
  LogOut,
} from "./navbar-styles";

function Navbar(props: Props) {
  const { tabNum, setTabNum, data, setData, userData, setUserData } = props;

  return (
    <Wrapper>
      <Container>
        <LogoBox onClick={() => setTabNum(0)}>
          <LogoImg src={appLogo} />
        </LogoBox>
        <IconsContainer>
          {iconsData.map((img, ind) => {
            return (
              <IconBox
                onClick={() => setTabNum(ind)}
                $isActive={tabNum === ind}
                key={ind}
              >
                {img}
              </IconBox>
            );
          })}
        </IconsContainer>

        <AvatarBox>
          <AvatarImg src={avatar} />
          <LogOut
            onClick={() => {
              setData(null);
              setTabNum(0);
              userData.forEach((item) => {
                item.index = -1;
                setUserData([...userData]);
              });
            }}
          >
            Log Out
          </LogOut>
        </AvatarBox>
      </Container>
    </Wrapper>
  );
}

export default Navbar;
