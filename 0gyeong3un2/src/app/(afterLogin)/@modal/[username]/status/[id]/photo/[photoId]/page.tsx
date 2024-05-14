/* eslint-disable @next/next/no-img-element */
import Post from '@/app/(afterLogin)/_component/Home/Post';
import style from './photoModal.module.css';
import { faker } from '@faker-js/faker';
import CommentForm from '@/app/(afterLogin)/[username]/status/[id]/_component/CommentForm';
import ActionButtons from '@/app/(afterLogin)/_component/Home/ActionButtons';
import PhotoModalCloseButton from './_component/PhotoModalCloseButton';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import { getComments } from '@/app/(afterLogin)/[username]/status/[id]/_lib/getComments';
import { getSinglePost } from '@/app/(afterLogin)/[username]/status/[id]/_lib/getSinglePost';
import SinglePost from '@/app/(afterLogin)/[username]/status/[id]/_component/SinglePost';
import Comments from '@/app/(afterLogin)/[username]/status/[id]/_component/Comments';
import ImageZone from './_component/ImageZone';

type Props = {
  params: {
    id: string;
  };
};

export default async function PhotoModal({ params }: Props) {
  const { id } = params;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['posts', id],
    queryFn: getSinglePost,
  });
  await queryClient.prefetchQuery({
    queryKey: ['posts', 'id', 'comments'],
    queryFn: getComments,
  });
  const hydratedState = dehydrate(queryClient);

  return (
    <div className={style.container}>
      <HydrationBoundary state={hydratedState}>
        <PhotoModalCloseButton />
        <ImageZone id={id} />
        <div className={style.commentZone}>
          <SinglePost id={id} noImage />
          <CommentForm id={id} />
          <Comments id={id} />
        </div>
      </HydrationBoundary>
    </div>
  );
}
