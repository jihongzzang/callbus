import styled from 'styled-components';
import CATEGORIES from '../../Constants/CATEGORIES';
import useSWR from 'swr';
import { Suspense } from 'react';
import axios from 'axios';
import { AxiosResponse } from 'axios';

const fetcher = (url: string) =>
  axios.get(url).then((res: AxiosResponse) => res.data);

interface name {
  id: number | string;
  name: number | string;
}

export default function Home() {
  const { data } = useSWR('/api/users', fetcher, { suspense: true });

  return (
    <Container>
      <Suspense fallback={<div>loading...</div>}>
        <h1>Home</h1>
        {data.map((ele: name) => (
          <div>{ele.name}</div>
        ))}
      </Suspense>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${({ theme }) => theme.mainBg};
  color: ${({ theme }) => theme.fontColor};
`;
