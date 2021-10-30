import React from 'react'


import TopBanner from './cc-pages/top-banner'
import HotRecommend from './cc-pages/hot-recommend'
import RankingList from './cc-pages/ranking-list'
import Login from './cc-pages/login'
import JoinSinger from './cc-pages/join-singer'
import HotRadio from './cc-pages/hot-radio'

import {ContentWarp} from './style'

export default function Recommend() {
    return (
        <>
            <TopBanner className='top-banner'/>
            <ContentWarp className='wrap-v2'>
                <div className="content-left">
                    <HotRecommend />
                    <RankingList />
                </div>
                <div className='content-right'>
                    <Login />
                    <JoinSinger/>
                    <HotRadio/>
                </div>  
            </ContentWarp>
        </>
    )
}
