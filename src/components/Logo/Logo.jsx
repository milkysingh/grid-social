import styled from 'styled-components';
import Icon from '../Icon/Icon';

const Logo = props => {
  return (
    <Link href='/'>
      <Icon id='layers' strokeWidth={1} />
      <Wrapper {...props}>Stratis</Wrapper>
    </Link>
  );
};

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  display: flex;
  gap: 10px;
`;

const Wrapper = styled.h1`
  font-size: 1.5rem;
  font-weight: 800;
  color: rgba(38, 38, 40, 1);
`;

export default Logo;
