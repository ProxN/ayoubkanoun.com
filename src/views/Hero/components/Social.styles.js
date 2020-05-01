import styled from 'styled-components';

export const Social = styled.div`
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
