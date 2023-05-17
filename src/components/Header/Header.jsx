import styled from 'styled-components';
import Logo from '../Logo/Logo';
import Icon from '../Icon/Icon';

export default function Header() {
  return (
    <MainHeader>
      <Side>
        <Logo />
      </Side>

      <Nav>
        <NavLink className='active' href='/sale'>
          Overview
        </NavLink>
        <NavLink href='/new'>Accounts</NavLink>
        <NavLink href='/men'>Activities</NavLink>
        <NavLink href='/women'>Spending</NavLink>
        <NavLink href='/kids'>Save &amp; Invest</NavLink>
        <NavLink href='/collections'>My home</NavLink>
        <NavLink href='/collections'>Retirement</NavLink>
      </Nav>

      <Side>
        <ActionHeader>
          <HeaderIcon id='search' strokeWidth={2} size={19} />
          <HeaderIcon id='bell' strokeWidth={2} size={19} />
          <Avatar>
            <img src='https://courses.joshwcomeau.com/cfj-mats/dog-one-300px.jpg' alt='' />
          </Avatar>
          <Details>
            <Name>Amanda Haydenson</Name>
            <Role>Admin</Role>
          </Details>
        </ActionHeader>
      </Side>
    </MainHeader>
  );
}

const MainHeader = styled.div`
  position: sticky;
  top: 0;
  height: 72px;
  padding: 16px 32px 16px 32px;
  display: flex;
  color: rgba(95, 95, 97, 1);
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 1);
  border-bottom: 1px solid rgba(236, 236, 237, 1);
`;

const Side = styled.div`
  flex: 1;
`;

const Nav = styled.nav`
  display: flex;
  gap: 24px;
`;
const NavLink = styled.a`
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.25;
  letter-spacing: -0.05 px;
  color: rgba(95, 95, 97, 1);
  padding: 10px 12px 10px 12px;
  &.active {
    background-color: rgba(246, 246, 246, 1);
    color: black;
    padding: 10px 12px 10px 12px;
    border-radius: 7px;
  }
`;

const ActionHeader = styled.div`
  display: flex;
  gap: 18px;
  align-items: center;
  position: relative;
  & :nth-child(1) {
    margin-left: auto;
  }
`;

const HeaderIcon = styled(Icon)`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;

  & img {
    border-radius: 50%;
    width: 100%;
  }
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
`;
const Name = styled.span`
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.25;
  letter-spacing: -0.05 px;
  color: rgba(38, 38, 40, 1);
`;
const Role = styled.span`
  font-weight: 400;
  line-height: 1.25;
  letter-spacing: -0.05 px;
  color: rgba(95, 95, 97, 1);
`;
