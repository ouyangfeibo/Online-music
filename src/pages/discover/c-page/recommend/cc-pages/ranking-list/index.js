import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import {
  getTopData
} from "../../store/createaction.js";

import TopRanking from "@/componments/top-ranking";
import LeaderBar from '@/componments/leader-bar'
import {
  RankingWrapper
} from "./style";

export default memo(function RankingList() {
  // redux
  const dispatch = useDispatch();
  const state = useSelector((state) => ({
    topUpList: state.recommend.topUpList,
    topNewList: state.recommend.topNewList,
    topOriginList: state.recommend.topOriginList
  }), shallowEqual);

  // hooks
  useEffect(() => {
    getTopData(0)(dispatch)
    getTopData(1)(dispatch)
    getTopData(2)(dispatch)
  }, [dispatch])

  return (
    <RankingWrapper>
      <LeaderBar title='榜单' />
      <div className="tops ">
        <TopRanking info={state.topUpList}/>
        <TopRanking info={state.topNewList}/>
        <TopRanking info={state.topOriginList}/>
      </div>
    </RankingWrapper>
  )
})
