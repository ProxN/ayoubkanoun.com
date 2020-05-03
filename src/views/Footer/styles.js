import styled, { css } from 'styled-components';
import media from '../../styles/media.styles';

export const FooterContainer = styled.footer`
  ${({ theme }) => css`
    background: ${theme.colors.primary.dark};
  `};
  height: 60px;
  display: flex;
  justify-content: flex-end;
  ${media.thone`
    background:${({ theme }) => theme.colors.primary.mid};
    justify-content:none ;
  `};
`;

export const FooterContent = styled.div`
  border-top: 5px solid ${(props) => props.theme.colors.primary.light};
  width: calc(50% + 4px);
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${media.thone`
    width:100%;
    flex-direction:column;
    padding:5px 0;
  `};
`;

export const FooterText = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray.dark};
    font-size: ${theme.fontSizes.xsmall};
  `};
`;
