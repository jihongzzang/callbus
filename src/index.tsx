import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import GlobalStyle from 'styles/global-style';
import Router from 'Router';

const rootElement = document.getElementById('root');

if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement);

root.render(
  <ThemeProvider theme={theme.dark}>
    <GlobalStyle />
    <Router />
  </ThemeProvider>,
);
