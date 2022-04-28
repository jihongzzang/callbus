import styled from 'styled-components';

export default function Home() {
  return (
    <Container>
      <h1>Home</h1>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${({ theme }) => theme.mainBg};
  color: ${({ theme }) => theme.fontColor};
`;
