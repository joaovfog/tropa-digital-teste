import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    
    ${({ theme }) => theme.mediaQueries.lg} {
      font-size: 18px;
    }
  }

  body {
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    background-color: ${({ theme }) => theme.colors.background.default};
    color: ${({ theme }) => theme.colors.text.primary};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.typography.fontFamily.secondary};
    font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  h1 {
    font-size: ${({ theme }) => theme.typography.fontSize["4xl"]};
    
    ${({ theme }) => theme.mediaQueries.md} {
      font-size: ${({ theme }) => theme.typography.fontSize["5xl"]};
    }
  }

  h2 {
    font-size: ${({ theme }) => theme.typography.fontSize["3xl"]};
    
    ${({ theme }) => theme.mediaQueries.md} {
      font-size: ${({ theme }) => theme.typography.fontSize["4xl"]};
    }
  }

  h3 {
    font-size: ${({ theme }) => theme.typography.fontSize["2xl"]};
    
    ${({ theme }) => theme.mediaQueries.md} {
      font-size: ${({ theme }) => theme.typography.fontSize["3xl"]};
    }
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    font-size: ${({ theme }) => theme.typography.fontSize.base};
  }

  a {
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.primary.dark};
    }
  }

  button {
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${({ theme }) => theme.typography.fontSize.base};
  }

  img {
    max-width: 100%;
    height: auto;
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

export default GlobalStyle;
