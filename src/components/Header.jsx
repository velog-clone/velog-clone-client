import React, { useState } from "react";
import LoginPopup from "components/LoginPopup";
import logoIcon from "assets/images/logoIcon.svg";
import searchIcon from "assets/images/searchIcon.svg";
import dropDownMenuIcon from "assets/images/dropDownMenuIcon.svg";
import "../index.css";
import {
  HeaderWrapper,
  LogoIcon,
  LogoTitle,
  LoginToggleIcon,
  SearchBtnLink,
  SearchBtn,
  LoginBtn,
  WriteBtnLink,
  WriteBtn,
  MenuWrapper,
  MenuIconWrapper,
  ProfileIcon,
  DropDownMenuIcon,
  DropDownMenuWrapper,
  MyVelogMenu,
  MenuLink,
  WriteMenu,
  SavesMenu,
  LikedMenu,
  SettingMenu,
  LogoutMenu,
  PopupWrapper
} from "styles/Header"

export default function Header() {
  const [isLoginPopup, setIsLoginPopup] = useState(false);
  const [isMenuPopup, setIsMenuPopup] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [mode, setMode] = useState("main");

  const loginPopup = () => {
    setIsLoginPopup(true);
  };

  const menuPopup = () => {
    isMenuPopup ? setIsMenuPopup(false) : setIsMenuPopup(true);
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
          <LogoIcon style={mode === "main" ? {display:'none'}:{display:'block'}}
            onClick={toggleMode}>
            <img src={logoIcon} alt="logo icon" />
          </LogoIcon>
          <LogoTitle onClick={toggleMode}>
            {mode === "main" ? "velog" : "NAME.log"}
          </LogoTitle>
        </div>
        <div
          class="right_wrapper"
          style={{ display: "flex", alignItems: "center" }}
        >
          <LoginToggleIcon 
            onClick={toggleLogin}
          ></LoginToggleIcon>
          <SearchBtnLink to="/search">
            <SearchBtn>
              <img src={searchIcon} alt="search icon" />
            </SearchBtn>
          </SearchBtnLink>
          
          <LoginBtn 
            style={isLogin ? {display:'none'} : {display:'block'}}
            onClick={loginPopup}>로그인</LoginBtn>
            <WriteBtnLink to="/write">
              <WriteBtn
               style={isLogin ? {display:'block'} : {display:'none'}}>새 글 작성
              </WriteBtn>
            </WriteBtnLink>
          <MenuWrapper 
            style={isLogin ? {display:'block'} : {display:'none'}}>
            <MenuIconWrapper onClick={menuPopup}>
              <ProfileIcon
                src="https://media.vlpt.us/images/jisu00/profile/cf2284a3-2e41-4371-bcad-143b43975e9c/social.png?w=120"
                alt="profile icon"
              />
              <DropDownMenuIcon src={dropDownMenuIcon} alt="menu icon" />
            </MenuIconWrapper>
            <DropDownMenuWrapper 
              style={isMenuPopup ? {display:'block'} : {display:'none'}}>
              <MyVelogMenu>내 벨로그</MyVelogMenu>
              <MenuLink to="/write"><WriteMenu>새 글 작성</WriteMenu></MenuLink>
              <SavesMenu>임시 글</SavesMenu>
              <LikedMenu>읽기 목록</LikedMenu>
              <SettingMenu>설정</SettingMenu>
              <LogoutMenu onClick={toggleLogin}>로그아웃</LogoutMenu>
            </DropDownMenuWrapper>
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