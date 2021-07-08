import * as React from 'react';
import svg from '../assets/images/bg-header-desktop.svg';
import styled from 'styled-components';

const StyledImg = styled.img`
  width: 100vw;
  background-color: hsl(180, 29%, 50%);
  position: sticky;
`;

function Header() {
  return <StyledImg src={svg} />;
}

export default Header;
