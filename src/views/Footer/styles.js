import styled, { css } from 'styled-components';

export const FooterContainer = styled.footer`
  ${({ theme }) => css`
    background: ${theme.colors.primary.dark};
  `};
  height: 60px;
  display: flex;
  justify-content: flex-end;
`;

export const FooterContent = styled.div`
  border-top: 5px solid ${(props) => props.theme.colors.primary.light};
  width: calc(50% + 4px);
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FooterText = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray.dark};
    font-size: ${theme.fontSizes.xsmall};
  `};
`;
