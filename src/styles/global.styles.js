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
        background:#1b2027;
        width:5px;
    }
    ::-webkit-scrollbar-thumb {
        background:#29303b;
        border-radius:5px;

    }
    
    .backward{
        transition:transform 0.2s ease, width 0.18s 0.2s ease;
    }
    .forward{
        transition: width 0.18s ease, transform 0.2s 0.18s ease;
    }

`;
