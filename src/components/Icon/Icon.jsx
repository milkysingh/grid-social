/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { Bell, Box, Flag, Layers, Search } from 'react-feather';

const icons = {
  search: Search,
  layers: Layers,
  bell: Bell,
  flag: Flag,
  box: Box
};

const Icon = ({ id, color, size, strokeWidth, ...delegated }) => {
  const Component = icons[id];

  if (!Component) {
    throw new Error(`No icon found for ID: ${id}`);
  }

  return (
    <Wrapper strokeWidth={strokeWidth} {...delegated}>
      <Component color={color} size={size} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  & > svg {
    display: block;
    stroke-width: ${p => p.strokeWidth}px;
  }
`;

export default Icon;
