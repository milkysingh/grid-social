import React from 'react';
import styled from 'styled-components';
import Icon from '../Icon/Icon';

export default function Profile() {
  return (
    <ProfileFeed>
      <ProfileHeader>
        <Cover></Cover>
        <ProfileDetails>
          <ProfilePicWrapper>
            <ProfilePic src='https://courses.joshwcomeau.com/cfj-mats/dog-one-300px.jpg' alt='' />
          </ProfilePicWrapper>
          <Name>Malkeet Singh</Name>
          <Location>
            <Icon id='flag' strokeWidth={1} />
            <Address>Los Angeles, United States</Address>
          </Location>
          <Job>
            <UserName>@amanda21</UserName>
            <Dot />
            <Title>
              {' '}
              <Icon id='box' strokeWidth={1} /> Lead product designer at Google
            </Title>
            <Dot />
            <JobType>Full-time</JobType>
          </Job>
        </ProfileDetails>
      </ProfileHeader>
      <SkillsWrapper></SkillsWrapper>
      <EmploymentHistory></EmploymentHistory>
    </ProfileFeed>
  );
}

const ProfileHeader = styled.article`
  height: 485px;
  box-shadow: 0px 16px 24px -6px rgba(10, 9, 11, 0.08), 0px 0px 3px -1px rgba(10, 9, 11, 0.04),
    0px 0px 0px 1px rgba(10, 9, 11, 0.05);
  border-radius: 12px;
  overflow: hidden;
`;
const Cover = styled.div`
  height: 191px;
  background: linear-gradient(275.4deg, #f4cece -0.13%, #f9e3aa 100.06%);
`;

const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
`;

const ProfilePicWrapper = styled.div`
  width: 140px;
  height: 140px;
  margin-top: -86px;
`;

const ProfilePic = styled.img`
  width: 100%;
  outline: 5px solid rgba(255, 255, 255, 1);
  border-radius: 50%;
`;
const Name = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  margin-top: 32px;
`;

const Location = styled.address`
  line-height: 22px;
  letter-spacing: -0.18 px;
  display: flex;
  gap: 12px;
  align-items: center;
`;
const Address = styled.div``;

const Job = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const UserName = styled.div``;

const Title = styled.div`
  display: flex;
  gap: 8px;
`;
const JobType = styled.div`
  color: rgba(127, 125, 131, 1);
`;

const Dot = styled.div`
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background-color: rgba(173, 172, 176, 1);
`;
const SkillsWrapper = styled.section`
  height: 200px;
`;
const EmploymentHistory = styled.section`
  height: 100%;
`;

const ProfileFeed = styled.section`
  display: grid;
  grid-template-rows: 485px 200px 1fr;
  /* flex-direction: column; */
  gap: 16px;
`;
