import ReactDOM from 'react-dom/client';
import Router from 'Router';
import Layout from 'components/UI/Layout';
import GlobalStyle from 'styles/global-style';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browers');
  worker.start();
}

const rootElement = document.getElementById('root');

if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement);

root.render(
  <ThemeProvider theme={theme.light}>
    <GlobalStyle />
    <Layout>
      <Router />
    </Layout>
  </ThemeProvider>,
);
