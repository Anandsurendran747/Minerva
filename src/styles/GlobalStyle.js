import { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    primary: '#1c4d8b',
    primaryLight: '#5a8dde',
    primaryDark: '#0e2f5f',
    secondary: '#4da6ff',
    secondaryLight: '#8dcfff',
    accent: '#1e90ff',
    accentLight: '#63b8ff',
    bgLight: '#eaf4ff',
    bgWhite: '#ffffff',
    bgSoft: '#f2f7ff',
    textDark: '#11253f',
    textMid: '#3d5b7d',
    textLight: '#6b89a8',
    borderLight: '#cfe1f3',
    gold: '#f5c518',
    teal: '#0d9488',
    lavender: '#7c3aed',
  },
  fonts: {
    heading: "'Playfair Display', serif",
    body: "'Poppins', sans-serif",
  },
  shadows: {
    card: '0 4px 24px rgba(26, 107, 60, 0.08)',
    cardHover: '0 8px 40px rgba(26, 107, 60, 0.18)',
    nav: '0 2px 20px rgba(0,0,0,0.08)',
  },
  radii: {
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '36px',
    full: '9999px',
  },
};

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    background: ${({ theme }) => theme.colors.bgWhite};
    color: ${({ theme }) => theme.colors.textDark};
    line-height: 1.6;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
  }

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }

  @keyframes shimmer {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }

  @keyframes slideIn {
    from { opacity: 0; transform: translateX(-30px); }
    to { opacity: 1; transform: translateX(0); }
  }

  @keyframes bounceIn {
    0% { transform: scale(0.3); opacity: 0; }
    50% { transform: scale(1.05); }
    70% { transform: scale(0.9); }
    100% { transform: scale(1); opacity: 1; }
  }

  @keyframes confetti {
    0% { transform: translateY(0) rotate(0deg); opacity: 1; }
    100% { transform: translateY(100px) rotate(720deg); opacity: 0; }
  }
`;