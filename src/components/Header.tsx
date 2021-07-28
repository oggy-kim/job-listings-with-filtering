import * as React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
  position: absolute;
  width: 100vw;
  background-color: hsl(180, 29%, 50%);
  z-index: -1;
`;

function Header() {
  return <StyledImg src="./images/bg-header-desktop.svg" />;
}

export default Header;
