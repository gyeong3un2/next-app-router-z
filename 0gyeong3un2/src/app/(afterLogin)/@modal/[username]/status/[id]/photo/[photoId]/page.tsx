/* eslint-disable @next/next/no-img-element */
import Post from '@/app/(afterLogin)/_component/Home/Post';
import style from './photoModal.module.css';
import { faker } from '@faker-js/faker';
import CommentForm from '@/app/(afterLogin)/[username]/status/[id]/_component/CommentForm';
import ActionButtons from '@/app/(afterLogin)/_component/Home/ActionButtons';
import PhotoModalCloseButton from './_component/PhotoModalCloseButton';

export default function PhotoModal() {
  const photo = {
    imageId: 1,
    link: faker.image.urlLoremFlickr(),
    Post: {
      content: faker.lorem.text(),
    },
  };

  return (
    <div className={style.container}>
      <PhotoModalCloseButton />
      <div className={style.imageZone}>
        <img src={photo.link} alt={photo.Post?.content} />
        <div
          className={style.image}
          style={{ backgroundImage: `url(${photo.link})` }}
        />
        <div className={style.buttonZone}>
          <div className={style.buttonInner}>
            <ActionButtons white />
          </div>
        </div>
      </div>
      <div className={style.commentZone}>
        <Post noImage />
        <CommentForm />
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
