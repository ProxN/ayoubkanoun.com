import styled from 'styled-components';
import { animated } from 'react-spring';

export const Social = styled(animated.div)`
  margin-top: 10px;
`;

export const SocialLink = styled.a`
  cursor: pointer;
  svg {
    width: 20px;
    height: 20px;
  }
  :not(:last-child) {
    margin-right: 15px;
  }
`;
