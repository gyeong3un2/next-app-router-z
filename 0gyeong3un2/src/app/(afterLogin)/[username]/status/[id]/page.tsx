import BackButton from '@/app/(afterLogin)/_component/common/BackButton';
import style from './singlePost.module.css';
import Post from '@/app/(afterLogin)/_component/Home/Post';
import CommentForm from './_component/CommentForm';

export default function SinglePost() {
  return (
    <div className={style.main}>
      <div className={style.header}>
        <BackButton />
        <h3 className={style.headerTitle}>게시하기</h3>
      </div>

      <div className={style.headerBox} />

      <Post />
      <CommentForm />
      <div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
