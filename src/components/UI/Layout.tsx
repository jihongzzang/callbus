import { ReactNode } from 'react';
import { flexColumn } from 'styles/theme';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return <LayOutWrraper>{children}</LayOutWrraper>;
};

export default Layout;

const LayOutWrraper = styled.div`
  width: 360px;
  margin: 0 auto;
  max-height: 100vh;
  background: ${({ theme }) => theme.mainBg};
  ${flexColumn};
`;
