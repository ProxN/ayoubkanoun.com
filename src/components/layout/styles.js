import styled from 'styled-components';

export default styled.article`
  height: 100%;
  width: 100%;
  padding: 20px;
  position: relative;
`;

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.primary.mid};
  height: 100%;
  width: 100%;
  box-shadow: 0 0 40px -2px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  overflow-y: scroll;
`;
