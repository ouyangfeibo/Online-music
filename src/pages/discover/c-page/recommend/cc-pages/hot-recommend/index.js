import React, { memo, useEffect } from 'react'
import {shallowEqual, useSelector,useDispatch} from 'react-redux'
import Slider from "react-slick";

import LeaderBar from '@/componments/leader-bar';
import ThemeCover from '@/componments/theme-cover';
import AlbumCover from '@/componments/album-cover';

import {getRecommend,getAlbum} from '../../store/createaction'
import {HotRecommendwarp,Content} from './style';

 const HotRecommend = memo(function () {
    const HotRecommenddata = useSelector(state => state.recommend.HotRecommend,shallowEqual)
    const dispatch = useDispatch()

    const NewAlbumdata = useSelector(state => state.recommend.NewAlbum,shallowEqual)

    useEffect(() => {
        getRecommend()(dispatch)
        getAlbum()(dispatch)
    }, [dispatch])


    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
    };
    return (
        <HotRecommendwarp>

                <LeaderBar title="热门推荐" 
                    keywords={["华语", "流行", "摇滚", "民谣", "电子"]}
                ></LeaderBar>
                
                <Content >
                    {
                        HotRecommenddata.map((item,index)=>{
                            return <div key={item.id}>
                                    <ThemeCover info={item} />
                            </div>
                        })
                    }
                </Content>

                <LeaderBar title='新碟上架'></LeaderBar>
                
                <div className='new-album'>
                        <Slider {...settings}>
                            {
                                NewAlbumdata.map((item,index)=>{
                                    return <div key={item.id}>
                                        <AlbumCover info={item} />
                                    </div>
                                })
                            }
                        </Slider>
                </div>   

        </HotRecommendwarp>
    )
})
export default HotRecommend;