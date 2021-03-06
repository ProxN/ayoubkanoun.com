import styled from 'styled-components';

export const LoaderContainer = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #1b2027;
`;

export const LoaderWrapper = styled.div`
  user-select: none;
  transition: all 100ms;
  opacity: ${(props) => (props.isMounted ? 1 : 0)};
  #A {
    opacity: 0;
  }
`;
