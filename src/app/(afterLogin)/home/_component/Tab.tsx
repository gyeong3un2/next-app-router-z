"use client";

import style from "@/app/(afterLogin)/home/home.module.css";
import React, {useContext, useState} from "react";
import {useRouter} from "next/navigation";
import {TabContext} from "@/app/(afterLogin)/home/_component/TabProvider";

export default function Tab() {
  const { tab, setTab } = useContext(TabContext);

  const onClickRec = () => {
    setTab('rec');
  }
  const onClickFol = () => {
    setTab('fol');
  }

  return (
    <div className={style.homeFixed}>
      <div className={style.homeText}>홈</div>
      <div className={style.homeTab}>
        <div onClick={onClickRec}>추천
          <div className={style.tabIndicator} hidden={tab === 'fol'}></div>
        </div>
        <div onClick={onClickFol}>
          팔로우 중
          <div className={style.tabIndicator} hidden={tab === 'rec'}></div>
        </div>
      </div>
    </div>
  )
}