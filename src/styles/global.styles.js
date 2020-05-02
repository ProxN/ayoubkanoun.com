import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
    *,
    *::before,
    *::after{
        margin:0;
        padding:0;
        box-sizing:inherit;
    }
    html{
        box-sizing:border-box;
        height:100%;
        width:100%;

    }
    #___gatsby,
    #gatsby-focus-wrapper,
    body{
        width:100%;
        height:100%;
    }

    body{
        line-height:16px;
        font-weight:normal;
        ${({ theme }) => css`
          background: ${theme.colors.primary.dark};
          font-family: ${theme.fonts.primary};
          color: ${theme.colors.gray.light};
          font-size: ${theme.fontSizes.regular};
        `};
    }

    a{
        text-decoration:none;
    }
    
    h1,h2,h3,h4,h5,h6{
        margin:0;
        ${({ theme }) => css`
          color: ${theme.colors.gray.light};
          font-family: ${theme.fonts.secondary};
        `};
    }


    ::-webkit-scrollbar {
        background:#29303b;
        width:5px;
    }
    ::-webkit-scrollbar-thumb {
        background:#1b2027;
        border-radius:5px;

    }


   

`;
