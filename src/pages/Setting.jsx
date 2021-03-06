import React, { useEffect, useRef, useState } from "react";
import axios from 'axios';
import Header from "components/Header";
import WithdrawalPopup from "components/WithdrawalPopup";

import githubIcon from "assets/images/githubIcon2.svg";
import twitterIcon from "assets/images/twitterIcon.svg";
import facebookIcon from "assets/images/facebookIcon.svg";
import homepageIcon from "assets/images/homepageIcon.svg";
import mailIcon from "assets/images/mailIcon.svg";

import {
  GlobalStyle,
  PageWrapper,
  HeaderWrapper,
  FlexWrapper,
  ProfileWrapper,
  MainInfoWrapper,
  SubInfoWrapper,
  ProfileImgWrapper,
  ProfileImg,
  ImgUploadBtn,
  ImgRemoveBtn,
  InfoWrapper,
  InfoSavedWrapper,
  UserName,
  Intro,
  InfoChangeBtn,
  InfoInputWrapper,
  UserNameInput,
  IntroInput,
  InfoSaveBtn,
  TitleWrapper,
  TitleText,
  TitleSavedWrapper,
  Title,
  TitleChangeBtn,
  TitleInputWrapper,
  TitleInput,
  TitleSaveBtn,
  TitleDesc,
  SocialWrapper,
  SocialText,
  SocialSavedWrapper,
  SocialAddrWrapper,
  MailWrapper,
  MailIcon,
  Mail,
  GithubWrapper,
  GithubIcon,
  Github,
  TwitterWrapper,
  TwitterIcon,
  Twitter,
  FacebookWrapper,
  FacebookIcon,
  Facebook,
  HomepageWrapper,
  HomepageIcon,
  Homepage,
  SocialChangeBtn,
  Input,
  SocialInputWrapper,
  MailInputWrapper,
  GithubInputWrapper,
  TwitterInputWrapper,
  FacebookInputWrapper,
  HomepageInputWrapper,
  SocialSaveBtn,
  SocialDesc,
  EmailReceiveWrapper,
  EmailReceiveText,
  CommentAlertWrapper,
  CommentAlertText,
  CommentAlertToggleWrapper,
  CommentToggleFill,
  CommentToggleSwitch,
  UpdateNewsWrapper,
  UpdateNewsText,
  UpdateNewsToggleWrapper,
  UpdateToggleFill,
  UpdateToggleSwitch,
  WithdrawalWrapper,
  WithdrawalText,
  WithdrawalBtn,
  WithdrawalDesc,
  WithdrawalPopupWrapper
} from "styles/Setting"

export default function Setting() {
  const [isInfoSavedMode, setIsInfoSavedMode] = useState(true);
  const [isTitleSavedMode, setIsTitleSavedMode] = useState(true);
  const [isSocialSavedMode, setIsSocialSavedMode] = useState(true);
  const [isSocialNothing, setIsSocialNothing] = useState(true);
  const [isCommentAlert, setIsCommentAlert] = useState(false);
  const [isUpdateAlert, setIsUpdateAlert] = useState(false);
  const [isWithdrawalPopup, setIsWithdrawalPopup] = useState(false);
  
  const [userName, setUserName] = useState("UserName");
  const [intro, setIntro] = useState("Intro");
  const [title, setTitle] = useState("Title");
  const [mail, setMail] = useState("");
  const [github, setGithub] = useState("");
  const [twitter, setTwitter] = useState("");
  const [facebook, setFacebook] = useState("");
  const [homepage, setHomepage] = useState("");

  const profile_img = useRef();
  const img_input = useRef();

  useEffect(()=>{
    if (mail === "" && github === "" && twitter === "" && facebook === "" && homepage === "")
      setIsSocialNothing(true);
    else
      setIsSocialNothing(false);
  }, [mail, github, twitter, facebook, homepage]);

  const toggleCommentAlert = () => {
    isCommentAlert ? setIsCommentAlert(false) : setIsCommentAlert(true);
  }

  const toggleUpdateAlert = () => {
    isUpdateAlert ? setIsUpdateAlert(false) : setIsUpdateAlert(true);
  }

  const onSaveSubmit = (e, setIsSavedMode) => {
    if (!(e.keyCode === 13 || e.type === "click")) return;
    
    setIsSavedMode(true);
  }

  const onImgUploadBtnClick = () => {
    img_input.current.click();
  }

  const onImgChange = async (e) => {
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    
    //const res = await axios.post('', formData);
    //profile_img.props.src = "res.data.image_url";
  }

  const onImgRemove = async () => {
    const formData = new FormData();
    formData.append('file', "");
    
    //const res = await axios.post('', formData);
    profile_img.props.src = "";
  }

  const onDataChange = async () => {
    try {
      const res = await axios.put('',
      );
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  }
  

  return (
    <>
      <GlobalStyle/>
      <PageWrapper>
        <HeaderWrapper><Header header_mode="main"></Header></HeaderWrapper>
        <FlexWrapper>
          <ProfileWrapper>
            <MainInfoWrapper>
              <ProfileImgWrapper>
                <ProfileImg
                  src="https://media.vlpt.us/images/jisu00/profile/cf2284a3-2e41-4371-bcad-143b43975e9c/social.png?w=120"
                  ref={profile_img}
                />
                <ImgUploadBtn
                  onClick={onImgUploadBtnClick}
                >
                  <input 
                    type="file"
                    id="profileImg"
                    accept="image/*"
                    ref={img_input}
                    onChange={onImgChange}
                    style={{ display: "none" }}
                  />
                  ????????? ?????????
                </ImgUploadBtn>
                <ImgRemoveBtn
                  onClick={onImgRemove}
                >????????? ??????</ImgRemoveBtn>
              </ProfileImgWrapper>
              <InfoWrapper
                isSavedMode={isInfoSavedMode}
              >
                <InfoSavedWrapper>
                  <UserName>{userName}</UserName>
                  <Intro>{intro}</Intro>
                  <InfoChangeBtn
                    onClick={()=>{setIsInfoSavedMode(false)}}
                  >??????</InfoChangeBtn>
                </InfoSavedWrapper>
                <InfoInputWrapper>
                  <UserNameInput
                    placeholder="??????"
                    onKeyDown={(e)=>{
                      userName !== "" && 
                      onSaveSubmit(e, setIsInfoSavedMode)
                    }}
                    onChange={(e)=>{setUserName(e.target.value)}}
                    value={userName}
                  />
                  <IntroInput
                    placeholder="??? ??? ??????"
                    onKeyDown={(e)=>{
                      userName !== "" &&
                      onSaveSubmit(e, setIsInfoSavedMode)
                    }}
                    onChange={(e)=>{setIntro(e.target.value)}}
                    value={intro}
                  />
                  <InfoSaveBtn
                    onClick={(e)=>{
                      userName !== "" &&
                      onSaveSubmit(e, setIsInfoSavedMode)
                    }}
                  >
                    ??????
                  </InfoSaveBtn>
                </InfoInputWrapper>
              </InfoWrapper>
            </MainInfoWrapper>
            <SubInfoWrapper>
              <TitleWrapper
                isSavedMode={isTitleSavedMode}
              >
                <TitleText>????????? ??????</TitleText>
                <TitleSavedWrapper>
                  <Title>{title}</Title>
                  <TitleChangeBtn
                    onClick={()=>{setIsTitleSavedMode(false)}}
                  >??????</TitleChangeBtn>
                </TitleSavedWrapper>
                <TitleInputWrapper>
                  <TitleInput
                    placeholder="????????? ??????"
                    onKeyDown={(e)=>{
                      title !== "" &&
                      onSaveSubmit(e, setIsTitleSavedMode)
                    }}
                    onChange={(e)=>{setTitle(e.target.value)}}
                    value={title}
                  />
                  <TitleSaveBtn
                    onClick={(e)=>{
                      title !== "" &&
                      onSaveSubmit(e, setIsTitleSavedMode)
                    }}
                  >
                    ??????
                  </TitleSaveBtn>
                </TitleInputWrapper>
                <TitleDesc>?????? ???????????? ?????? ????????? ???????????? ????????? ???????????????.</TitleDesc>
              </TitleWrapper>
              <SocialWrapper
                isSavedMode={isSocialSavedMode}
              >
                <SocialText>?????? ??????</SocialText>
                <SocialSavedWrapper>
                  <SocialAddrWrapper>
                    { mail !== "" && 
                    <MailWrapper>
                      <MailIcon src={mailIcon}/>
                      <Mail>{mail}</Mail>
                    </MailWrapper>}
                    { github !== "" &&
                    <GithubWrapper>
                      <GithubIcon src={githubIcon}/>
                      <Github>{github}</Github>
                    </GithubWrapper>}
                    { twitter !== "" && 
                    <TwitterWrapper>
                      <TwitterIcon src={twitterIcon}/>
                      <Twitter>{twitter}</Twitter>
                    </TwitterWrapper>}
                    { facebook !== "" && 
                    <FacebookWrapper>
                      <FacebookIcon src={facebookIcon}/>
                      <Facebook>{facebook}</Facebook>
                    </FacebookWrapper>}
                    { homepage !== "" &&
                    <HomepageWrapper>
                      <HomepageIcon src={homepageIcon}/>
                      <Homepage>{homepage}</Homepage>
                    </HomepageWrapper>}
                  </SocialAddrWrapper>
                  <SocialChangeBtn
                    onClick={()=>{setIsSocialSavedMode(false)}}
                    isSocialNothing={isSocialNothing}
                  >
                    { isSocialNothing ? "?????? ??????" : "??????" }
                  </SocialChangeBtn>
                </SocialSavedWrapper>
                <SocialInputWrapper>
                  <MailInputWrapper>
                    <MailIcon src={mailIcon}/>
                    <Input
                      placeholder="???????????? ???????????????."
                      onKeyDown={(e)=>{onSaveSubmit(e, setIsSocialSavedMode)}}
                      onChange={(e)=>{setMail(e.target.value)}}
                      value={mail}
                    />
                  </MailInputWrapper>
                  <GithubInputWrapper>
                    <GithubIcon src={githubIcon}/>
                    <Input
                      placeholder="Github ????????? ???????????????."
                      onKeyDown={(e)=>{onSaveSubmit(e, setIsSocialSavedMode)}}
                      onChange={(e)=>{setGithub(e.target.value)}}
                      value={github}
                    />
                  </GithubInputWrapper>
                  <TwitterInputWrapper>
                    <TwitterIcon src={twitterIcon}/>
                    <Input
                      placeholder="Twitter ????????? ???????????????."
                      onKeyDown={(e)=>{onSaveSubmit(e, setIsSocialSavedMode)}}
                      onChange={(e)=>{setTwitter(e.target.value)}}
                      value={twitter}
                    />
                  </TwitterInputWrapper>
                  <FacebookInputWrapper>
                    <FacebookIcon src={facebookIcon}/>
                    <Input
                      placeholder = "Facebook ????????? ???????????????."
                      onKeyDown={(e)=>{onSaveSubmit(e, setIsSocialSavedMode)}}
                      onChange={(e)=>{setFacebook(e.target.value)}}
                      value={facebook}
                    />
                  </FacebookInputWrapper>
                  <HomepageInputWrapper>
                    <HomepageIcon src={homepageIcon}/>
                    <Input
                      placeholder="???????????? ????????? ???????????????."
                      onKeyDown={(e)=>{onSaveSubmit(e, setIsSocialSavedMode)}}
                      onChange={(e)=>{setHomepage(e.target.value)}}
                      value={homepage}
                    />
                  </HomepageInputWrapper>
                  <SocialSaveBtn
                    onClick={(e)=>{onSaveSubmit(e, setIsSocialSavedMode)}}
                  >
                    ??????
                  </SocialSaveBtn>
                </SocialInputWrapper>
                <SocialDesc>????????? ??? ??????????????? ???????????? ???????????? ???????????? ?????? ???????????????.</SocialDesc>
              </SocialWrapper>
              <EmailReceiveWrapper>
                <EmailReceiveText>????????? ?????? ??????</EmailReceiveText>
                <CommentAlertWrapper>
                  <CommentAlertText>?????? ??????</CommentAlertText>
                  <CommentAlertToggleWrapper
                    onClick={toggleCommentAlert}
                    isAlert={isCommentAlert}
                  >
                    <CommentToggleFill></CommentToggleFill>
                    <CommentToggleSwitch></CommentToggleSwitch>
                  </CommentAlertToggleWrapper>
                </CommentAlertWrapper>
                <UpdateNewsWrapper>
                  <UpdateNewsText>????????? ???????????? ??????</UpdateNewsText>
                  <UpdateNewsToggleWrapper
                    onClick={toggleUpdateAlert}
                    isAlert={isUpdateAlert}
                  >
                    <UpdateToggleFill></UpdateToggleFill>
                    <UpdateToggleSwitch></UpdateToggleSwitch>
                  </UpdateNewsToggleWrapper>
                </UpdateNewsWrapper>
              </EmailReceiveWrapper>
              <WithdrawalWrapper>
                <WithdrawalText>?????? ??????</WithdrawalText>
                <WithdrawalBtn
                  onClick={()=>{setIsWithdrawalPopup(true)}}
                >?????? ??????</WithdrawalBtn>
                <WithdrawalDesc>?????? ??? ???????????? ????????? ??? ????????? ?????? ???????????? ???????????? ????????????.</WithdrawalDesc>
              </WithdrawalWrapper>
            </SubInfoWrapper>
          </ProfileWrapper>
        </FlexWrapper>
      </PageWrapper>

      <WithdrawalPopupWrapper>
        <WithdrawalPopup
          isOpen={isWithdrawalPopup}
          setIsWithdrawalPopup={setIsWithdrawalPopup}
        >
        </WithdrawalPopup>
      </WithdrawalPopupWrapper>
    </>
  );
}
