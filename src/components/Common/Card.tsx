import styled from 'styled-components';
import { PostInfo } from 'commonInterface/data';

const Card = ({ post }: { post: PostInfo }) => {
  return (
    <CardBox>
      {post.writerProfileUrl && <img src={post.writerProfileUrl} alt="사진" />}
      <p>{post.writerNickName}</p>
      <p>{post.writtenAt}</p>
      <p>{post.title}</p>
      <p>{post.content}</p>
      {post.imageUrl && <img src={post.imageUrl} alt="사진" />}
      <p>{post.viewCount}</p>
      <p>{post.likeCount}</p>
      <p>{post.commentCount}</p>
    </CardBox>
  );
};

export default Card;

const CardBox = styled.div`
  width: 308px;
  height: 299px;
`;
