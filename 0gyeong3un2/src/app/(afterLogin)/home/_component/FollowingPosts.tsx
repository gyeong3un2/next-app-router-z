'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { getFollowingPosts } from '@/app/(afterLogin)/home/_lib/getFollowingPosts';
import { Post as IPost } from '@/model/Post';
import Post from '../../_component/Home/Post';

export default function FollowingPosts() {
  const { data } = useSuspenseQuery<IPost[]>({
    queryKey: ['posts', 'followings'],
    queryFn: getFollowingPosts,
    staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
    gcTime: 300 * 1000,
  });

  return data?.map(post => <Post key={post.postId} post={post} />);
}
