'use client';

import { InfiniteData, useSuspenseInfiniteQuery } from '@tanstack/react-query';

import Post from '../../_component/Home/Post';
import { Post as IPost } from '@/model/Post';
import getPostRecommends from '../_lib/getPostRecommends';
import { Fragment, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function PostRecommends() {
  const { data, fetchNextPage, hasNextPage, isFetching } =
    useSuspenseInfiniteQuery<
      IPost[],
      Object,
      InfiniteData<IPost[]>,
      [_1: string, _2: string],
      number
    >({
      queryKey: ['posts', 'recommends'],
      queryFn: getPostRecommends,
      initialPageParam: 0,
      getNextPageParam: lastPage => lastPage.at(-1)?.postId,
      staleTime: 60 * 1000, // fresh -> stale, 1분이라는 기준
      gcTime: 60 * 1000 * 5, // stale -> dead, 5분이라는 기준
    });

  const { ref, inView } = useInView({
    threshold: 0,
    delay: 0,
  });

  useEffect(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, inView, isFetching]);

  return (
    <>
      {data?.pages.map((page, i) => (
        <Fragment key={i}>
          {page.map(post => (
            <Post key={post.postId} post={post} />
          ))}
        </Fragment>
      ))}
      <div ref={ref} style={{ height: 50 }} />
    </>
  );
}
