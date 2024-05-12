/* eslint-disable @next/next/no-img-element */
'use client';

import style from './LogOutButton.module.css';

export default function LogOutButton() {
  const me = {
    // 임시로 내 정보 있는 것처럼
    id: 'zercho',
    nickname: '제로초',
    image: '/5Udwvqim.jpg',
  };

  const onLogout = () => {};

  return (
    <button className={style.logOutButton} onClick={onLogout}>
      <div className={style.logOutUserImage}>
        <img src={me.image} alt={me.id} />
      </div>
      <div className={style.logOutUserName}>
        <div>{me.nickname}</div>
        <div>@{me.id}</div>
      </div>
    </button>
  );
}
