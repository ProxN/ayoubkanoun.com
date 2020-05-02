import styled, { css } from 'styled-components';

export default styled.article`
  height: 100%;
  width: 100%;
  padding: 20px;
  position: relative;
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  box-shadow: 0 0 40px -2px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  overflow-y: scroll;
  scrollbar-width: thin;
  ${({ theme }) => css`
    scrollbar-color: ${theme.colors.primary.dark} ${theme.colors.primary.light};
    background: ${theme.colors.primary.mid};
  `};
  position: relative;
  scroll-behavior: smooth;
`;
