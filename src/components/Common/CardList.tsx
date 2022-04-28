import { PostInfo } from 'commonInterface/data';
import { usefetchPosts } from 'FetchData/fetchPosts';
import React from 'react';
import Card from './Card';

const CardList: React.FC = () => {
  const a = usefetchPosts('/api/posts');

  console.log(a.posts);

  return (
    <div>
      {a?.posts?.map((post: PostInfo) => {
        return <Card key={post.pk} post={post} />;
      })}
    </div>
  );
};

export default CardList;
