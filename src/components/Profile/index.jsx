import React from 'react';
import styled from 'styled-components';

export default function Profile() {
  return (
    <ProfileFeed>
      <ProfileHeader></ProfileHeader>
      <SkillsWrapper></SkillsWrapper>
      <EmploymentHistory></EmploymentHistory>
    </ProfileFeed>
  );
}

const ProfileHeader = styled.article`
  height: 485px;
  border: 1px solid red;
`;
const SkillsWrapper = styled.section`
  height: 200px;
  border: 1px solid blue;
`;
const EmploymentHistory = styled.section`
  height: 100%;
  border: 1px solid blue;
`;

const ProfileFeed = styled.section`
  display: grid;
  grid-template-rows: 485px 200px 1fr;
  /* flex-direction: column; */
  gap: 16px;
`;
