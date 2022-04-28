import styled from 'styled-components';

export default function Community() {
  return <Container>Community</Container>;
}

const Container = styled.div`
  background-color: ${({ theme }) => theme.mainBg};
  color: ${({ theme }) => theme.fontColor};
`;
