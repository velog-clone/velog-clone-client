import React, { useState } from "react";
import deleteIcon from "assets/images/deleteIcon.svg";
import githubIcon from "assets/images/githubIcon.png";
import googleIcon from "assets/images/googleIcon.png";
import config from "config";
import GoogleLogin from "react-google-login";
import {
  PopupWrapper,
  Popup,
  PopupLeftWrapper,
  LoginImg,
  LoginGreetingText,
  PopupRightWrapper,
  ExitButtonWrapper,
  ExitButton,
  LoginAreaWrapper,
  LoginArea,
  LoginText,
  LoginTypeText,
  EmailArea,
  EmailInput,
  LoginButton,
  SocialArea,
  SocialButtonArea,
  IconButton,
  FooterAreaWrapper,
  FooterArea,
  IsMemberText,
  MemberLink,
} from "styles/LoginPopup";

export default function LoginPopup({ isOpen, setIsLoginPopup }) {
  const [isLogin, setIsLogin] = useState(true);
  const GithubRoute = () => {
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${config.GITHUB_CLIENT_ID}&redirect_uri=http://localhost:3000`;
  };

  const responseGoogle = (response) => {
    console.log(response);
  };

  const toggleState = () => {
    setIsLogin(!isLogin);
  };

  return (
    <>
      {isOpen && (
        <PopupWrapper>
          <Popup>
            <PopupLeftWrapper>
              <LoginImg></LoginImg>
              <LoginGreetingText>환영합니다!</LoginGreetingText>
            </PopupLeftWrapper>
            <PopupRightWrapper>
              <ExitButtonWrapper>
                <ExitButton onClick={() => setIsLoginPopup(false)}>
                  <img src={deleteIcon} alt="delete icon" />
                </ExitButton>
              </ExitButtonWrapper>

              <LoginAreaWrapper>
                <LoginArea>
                  <LoginText>{isLogin ? "로그인" : "회원가입"}</LoginText>
                  <EmailArea>
                    <LoginTypeText>
                      이메일로 {isLogin ? "로그인" : "회원가입"}
                    </LoginTypeText>
                    <EmailInput></EmailInput>
                    <LoginButton>{isLogin ? "로그인" : "회원가입"}</LoginButton>
                  </EmailArea>
                  <SocialArea>
                    <LoginTypeText>
                      소셜 계정으로 {isLogin ? "로그인" : "회원가입"}
                    </LoginTypeText>
                    <SocialButtonArea>
                      <IconButton onClick={GithubRoute}>
                        <img
                          src={githubIcon}
                          alt="github login icon"
                          style={{
                            width: "48px",
                            height: "48px",
                            borderRadius: "50%",
                          }}
                        />
                      </IconButton>
                      <GoogleLogin
                        clientId={config.GOOGLE_CLIENT_ID}
                        render={(renderProps) => (
                          <IconButton
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                          >
                            <img
                              src={googleIcon}
                              alt="google login icon"
                              style={{
                                width: "48px",
                                height: "48px",
                                borderRadius: "50%",
                              }}
                            />
                          </IconButton>
                        )}
                        buttonText="Login"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={"single_host_origin"}
                      ></GoogleLogin>
                    </SocialButtonArea>
                  </SocialArea>
                </LoginArea>
                <FooterAreaWrapper>
                  <FooterArea>
                    <IsMemberText>
                      {isLogin
                        ? "아직 회원이 아니신가요?"
                        : "계정이 이미 있으신가요?"}
                    </IsMemberText>
                    <MemberLink onClick={toggleState}>
                      {isLogin ? "회원가입" : "로그인"}
                    </MemberLink>
                  </FooterArea>
                </FooterAreaWrapper>
              </LoginAreaWrapper>
            </PopupRightWrapper>
          </Popup>
        </PopupWrapper>
      )}
    </>
  );
}
