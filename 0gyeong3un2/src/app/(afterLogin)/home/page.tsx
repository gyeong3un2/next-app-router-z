import style from './home.module.css';
import Tab from '@/app/(afterLogin)/home/_component/Tab';
import TabProvider from '@/app/(afterLogin)/home/_component/TabProvider';
import PostForm from '@/app/(afterLogin)/home/_component/PostForm';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import getPostRecommends from './_lib/getPostRecommends';
import PostRecommends from './_component/PostRecommends';
import TabDecider from './_component/TabDecider';

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: ['posts', 'recommends'],
    queryFn: getPostRecommends,
    initialPageParam: 0,
  });
  const hydratedState = dehydrate(queryClient);

  return (
    <main className={style.main}>
      <HydrationBoundary state={hydratedState}>
        <TabProvider>
          <Tab />
          <PostForm />
          <TabDecider />
          <PostRecommends />
        </TabProvider>
      </HydrationBoundary>
    </main>
  );
}
