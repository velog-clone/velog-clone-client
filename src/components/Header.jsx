import React, { useState } from "react";
import LoginPopup from "components/LoginPopup";
import styled, { keyframes } from "styled-components";
import logoIcon from "assets/images/logoIcon.svg";
import searchIcon from "assets/images/searchIcon.svg";
import dropDownMenuIcon from "assets/images/dropDownMenuIcon.svg";
import "../index.css";

/// animation

const fadeIn = keyframes`
  from { opacity: 1; }
  to { opacity: 0.5; }
`;

const fadeOut = keyframes`
  from { opacity: 0.5; }
  to { opacity: 1; }
`;

const setShadow = keyframes`
  from { box-shadow: 0px 0px 5px 0px lightgray; }
  to { box-shadow: 0px 0px 13px 0px lightgray; }
`;

const changeColor = keyframes`
  from { background: white; }
  to { background: #343a40; }
`;

///

const PopupWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 64px;
  padding: 5px 10px 0px 15px;
`;

const LogoIcon = styled.div`
  height: 27px;
  cursor: pointer;
  margin-right: 5px;
`;

const LogoTitle = styled.div`
  font-size: 22px;
  cursor: pointer;
  margin-left: 10px;
  color: #343a40;

  @font-face {
    font-family: "Fira Mono";
    src: url("./assets/Fonts/FiraMono-Medium.ttf");
  }

  font-family: "Fira Mono";
`;

const SearchIcon = styled.div`
  padding: 10px;
  padding-bottom: 5px;
  border-radius: 25px;
  cursor: pointer;
  margin-right: 15px;

  &:hover {
    background: #f1f1f1;
  }
`;

const ProfileIcon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  box-shadow: 0px 0px 7px 0px lightgray;
  cursor: pointer;
`;

const DropDownMenuIcon = styled.img`
  height: 25px;
  margin-left: 5px;
  cursor: pointer;
  opacity: 0.5;
`;

const MenuIconWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    ${ProfileIcon} {
      animation: ${setShadow} 0.3s forwards;
    }
    ${DropDownMenuIcon} {
      animation: ${fadeOut} 0.3s forwards;
    }
  }
`;

const DropDownMenuWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 60px;
  width: 210px;
  height: 318px;
  padding: 0px;
  z-index: 1;
  box-shadow: 0px 0px 7px 0px lightgray;
`;

const Menu = styled.div`
  width: 210px;
  cursor: pointer;
  background: white;
  line-height: 53px;
  padding: 0px 15px;
  font-size: 17.5px;
  font-weight: 500;

  &:hover {
    background: #f8f9fa;
  }
`;

const MyVelogMenu = styled(Menu)``;
const WriteMenu = styled(Menu)``;
const SavesMenu = styled(Menu)``;
const LikedMenu = styled(Menu)``;
const SettingMenu = styled(Menu)``;
const LogoutMenu = styled(Menu)``;

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const Btn = styled.button`
  padding: 1px 18px;
  height: 35px;
  font-size: 1.1em;
  font-weight: bold;
  border-radius: 18px;
  cursor: pointer;
`;

const WriteBtn = styled(Btn)`
  background: white;
  border: 1px solid #343a40;
  color: #343a40;
  margin-right: 25px;

  &:hover {
    animation: ${changeColor} 0.2s forwards;
    color: white;
  }
`;

const LoginBtn = styled(Btn)`
  margin-left: 10px;
  float: right;
  color: white;
  background: #343a40;
  border: none;

  &:hover {
    animation: ${fadeIn} 0.2s forwards;
  }
`;

export default function Header() {
  const [isLoginPopup, setIsLoginPopup] = useState(false);
  const [isMenuPopup, setIsMenuPopup] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [mode, setMode] = useState("blog");

  let _title,
    _logo,
    _loginBtn,
    _writeBtn,
    _menuIcon,
    _menu = null;

  const loginPopup = () => {
    setIsLoginPopup(true);
  };

  const menuPopup = () => {
    isMenuPopup === true ? setIsMenuPopup(false) : setIsMenuPopup(true);
  };

  const toggleMode = () => {
    mode === "main" ? setMode("blog") : setMode("main");
    setIsMenuPopup(false);
  };

  const toggleLogin = () => {
    if (isLogin === true) {
      setIsLogin(false);
      setIsMenuPopup(false);
    } else if (isLogin === false) {
      setIsLogin(true);
    }
  };

  if (mode === "main") {
    _title = "velog";
    _logo = null;
  } else if (mode === "blog") {
    _title = "NAME.log";
    _logo = (
      <LogoIcon onClick={toggleMode}>
        <img src={logoIcon} alt="logo icon" />
      </LogoIcon>
    );
  }

  if (isLogin === true) {
    _loginBtn = null;
    _writeBtn = <WriteBtn>새 글 작성</WriteBtn>;
    _menuIcon = (
      <MenuIconWrapper onClick={menuPopup}>
        <ProfileIcon
          src="https://media.vlpt.us/images/jisu00/profile/cf2284a3-2e41-4371-bcad-143b43975e9c/social.png?w=120"
          alt="profile icon"
        />
        <DropDownMenuIcon src={dropDownMenuIcon} alt="menu icon" />
      </MenuIconWrapper>
    );
  } else if (isLogin === false) {
    _loginBtn = <LoginBtn onClick={loginPopup}>로그인</LoginBtn>;
    _writeBtn = null;
    _menu = null;
  }

  if (isMenuPopup === true) {
    _menu = (
      <DropDownMenuWrapper>
        <MyVelogMenu>내 벨로그</MyVelogMenu>
        <WriteMenu>새 글 작성</WriteMenu>
        <SavesMenu>임시 글</SavesMenu>
        <LikedMenu>읽기 목록</LikedMenu>
        <SettingMenu>설정</SettingMenu>
        <LogoutMenu onClick={toggleLogin}>로그아웃</LogoutMenu>
      </DropDownMenuWrapper>
    );
  } else if (isMenuPopup === false) {
    _menu = null;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <HeaderWrapper>
        <div
          class="logo_wrapper"
          style={{ display: "flex", alignItems: "center" }}
        >
          {_logo}
          <LogoTitle onClick={toggleMode}>{_title}</LogoTitle>
        </div>
        <div
          class="right_wrapper"
          style={{ display: "flex", alignItems: "center" }}
        >
          <SearchIcon onClick={toggleLogin}>
            <img src={searchIcon} alt="search icon" />
          </SearchIcon>
          {_loginBtn}
          {_writeBtn}
          <MenuWrapper>
            {_menuIcon}
            {_menu}
          </MenuWrapper>
        </div>
      </HeaderWrapper>

      <PopupWrapper>
        <LoginPopup
          isOpen={isLoginPopup}
          setIsLoginPopup={setIsLoginPopup}
        ></LoginPopup>
      </PopupWrapper>
    </div>
  );
}
