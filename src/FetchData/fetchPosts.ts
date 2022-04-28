import useSWR from 'swr';
import { fetcher } from './fetcher';
import { PostInfo } from 'commonInterface/data';

export function usefetchPosts(url: string) {
  const { data } = useSWR<Array<PostInfo>>(url, fetcher, {
    suspense: true,
  });

  return { posts: data };
}
