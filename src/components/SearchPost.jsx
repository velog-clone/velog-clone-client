import React from "react";
import styled from "styled-components";
import Post from "components/Post";

const SearchPostWrapper = styled.div`
  @media (min-width: 769px) {
    margin-top: 60px;
  }
  margin-top: 30px;
`;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const UserIcon = styled.img`
  @media (min-width: 769px) {
    transform: scale(1.4);
    margin-left: 10px;
    margin-right: 25px;
  }
  width: 30px;
  border-radius: 30px;
  margin-right: 15px;
  box-shadow: 0px 0px 5px 0px lightgray;
`;

const UserName = styled.div`
  font-weight: bold;
  font-size: 0.875rem;
`;

const SearchPost = ({ img_src, title, content }) => {
  return (
    <SearchPostWrapper>
      <ProfileWrapper>
        <UserIcon
          src="https://media.vlpt.us/images/jisu00/profile/cf2284a3-2e41-4371-bcad-143b43975e9c/social.png?w=120"
          alt="profile icon"
        />
        <UserName>UserName</UserName>
      </ProfileWrapper>
      <Post
        img_src={img_src}
        title={title}
        content={content}
      ></Post>
    </SearchPostWrapper>
    
  )
}

export default SearchPost;