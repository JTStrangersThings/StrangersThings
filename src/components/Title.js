import React, { PureComponent } from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h2`
display: block;
`
class Title extends PureComponent {
  render() {
  return <div id="title">
    <StyledTitle>
      Buy and sell items from people around the world.
    </StyledTitle>
  </div>
  }
}

export default Title;