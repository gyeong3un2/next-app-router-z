import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { NextResponse } from 'next/server';

export const {
  handlers: { GET, POST }, // API 라우트
  auth, // 로그인 여부 확인
  signIn, // 로그인하는 용
} = NextAuth({
  // next가 기본적으로 마련해주는 페이지가 아닌 커스텀 페이지로 이동하고 싶을 때 사용
  pages: {
    signIn: '/i/flow/login', // 로그인 페이지 등록
    newUser: '/i/flow/signup', // 회원가입 페이지 등록
  },
  providers: [
    CredentialsProvider({
      // 로그인을 수행할 때, 이 함수가 호출됨
      async authorize(credentials) {
        const authResponse = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/login`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id: credentials.username,
              password: credentials.password,
            }),
          }
        );

        if (!authResponse.ok) {
          return null;
        }

        // 지금 누가 로그인했는지 가져오는 기능 (로그인한 사용자의 정보를 가져옴)
        const user = await authResponse.json();
        console.log('user', user);
        return {
          email: user.id,
          name: user.nickname,
          image: user.image,
          ...user,
        };
      },
    }),
  ],
});
