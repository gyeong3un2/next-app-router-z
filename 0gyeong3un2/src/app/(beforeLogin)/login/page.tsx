'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Main from '@/app/(beforeLogin)/_component/Main';

export default function Login() {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user) {
      router.replace('/home');
    }

    router.replace('/i/flow/login');
  }, [router, session?.user]);

  return <Main />;
}
