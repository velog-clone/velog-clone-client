import styled from 'styled-components';

export const PopupWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgba(249, 249, 249, 0.85);
`;

export const Popup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 480px;
`;

export const PopupLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(241, 243, 245);
  height: 480px;
  padding: 24px;
`;

export const LoginImg = styled.img.attrs({
  src: "https://static.velog.io/static/media/undraw_joyride_hnno.fae6b95e.svg",
})`
  width: 168px;
  height: 108.375px;
`;

export const LoginGreetingText = styled.span`
  font-size: 28px;
  margin-top: 24px;
`;

export const PopupRightWrapper = styled.div`
  height: 480px;
  padding: 24px;
  background-color: #fff;
`;

export const ExitButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ExitButton = styled.button`
  border: none;
  background-color: transparent;
  margin-bottom: 36px;
  &:hover {
    cursor: pointer;
  }
`;

export const LoginAreaWrapper = styled.div`
  display: flex;
  height: 85%;
  flex-direction: column;
  justify-content: space-between;
`;

export const LoginArea = styled.div``;

export const LoginText = styled.h2`
  margin: 0;
`;

export const LoginTypeText = styled.h4`
  margin: 16px 0;
  color: rgb(134, 142, 150);
`;

export const EmailArea = styled.div``;

export const EmailInput = styled.input.attrs({
  type: "text",
  placeholder: "이메일을 입력하세요",
})`
  width: 246px;
  padding: 16px;
  border: rgb(222, 226, 230) 1px solid;
  font-size: 16px;
  &:focus {
    outline: none;
  }
`;

export const LoginButton = styled.button`
  background-color: rgb(18, 184, 134);
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 700;
  border: none;
  height: 53px;
  width: 96px;
`;

export const SocialArea = styled.div`
  margin-top: 40px;
`;

export const SocialButtonArea = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const IconButton = styled.button`
  background: transparent;
  border: none;
`;

export const FooterAreaWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const FooterArea = styled.span``;

export const IsMemberText = styled.span`
  margin-right: 4px;
`;

export const MemberLink = styled.a`
  color: rgb(18, 184, 134);
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;