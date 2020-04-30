import styled, { css } from 'styled-components';

export const Section = styled.section`
  height: 100vh;
  padding-top: 150px;
`;

export const ContactContent = styled.div`
  ${({ theme }) => css`
    width: 50%;
    background: ${theme.colors.primary.dark};
    border: 5px solid ${theme.colors.primary.light};
    height: 100%;
  `};
  border-left: none;
  border-bottom: none;
`;
export const Heading = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.larges};
    color: ${theme.colors.gray.mid};
    span {
      color: ${theme.colors.yellow.dark};
    }
  `};
  display: block;
  text-align: center;
  line-height: 9px;
  border-left: none;
  margin-bottom: 30px;
  padding: 25px 20px;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;

export const Label = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.gray.dark};
    font-size: ${theme.fontSizes.xsmall};
    font-family: ${theme.fonts.secondary};
  `};
  margin-bottom: 5px;
`;

const InputStyles = css`
  ${({ theme }) => css`
    background: ${theme.colors.primary.dark};
    color: ${theme.colors.gray.mid};
    font-size: ${theme.fontSizes.xsmall};
    border: 2px solid ${theme.colors.primary.light};
    ::placeholder {
      color: ${theme.colors.gray.dark};
    }
  `};
  outline: none;
`;

export const Input = styled.input`
  ${InputStyles};
  height: 40px;
  padding: 0 10px;
`;

export const TextArea = styled.textarea`
  ${InputStyles};
  padding: 10px;
`;

export const Button = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.primary.dark};
    color: ${theme.colors.gray.mid};
    font-size: ${theme.fontSizes.xsmall};
    border: 2px solid ${theme.colors.primary.light};
  `};
  width: max-content;
  padding: 10px 20px;
  margin-top: 15px;
  outline: none;
`;
