import React, { memo, useEffect } from 'react'
import {NavLink} from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'

import {
    getSizeImage
  } from "@/utils/format-utils";
import {getSettleSingers} from '../../store/createaction'
import { JoinSingerWarp ,Singercoverwarp } from './style'

export default memo(function JoinSinger() {
    
    const state = useSelector(state => state.recommend.JoinSinger)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getSettleSingers())
    }, [dispatch])
    return (
        <JoinSingerWarp>
            <h3 className='title'> 
                <span className='title-name'>入驻歌手</span>
                <NavLink to='discover/artist/signed' className='title-link'>查看全部</NavLink>
            </h3>
            {
                state.map((item,index)=>{
                    return (
                        <Singercover info={item} key={item.id}/>
                    )
                })
            }

            <div className='join'>
                <a href="todo" className='sprite_button '>申请成为网易音乐人</a>
            </div>
        </JoinSingerWarp>
    )
})


function Singercover(props){
    const {name,alias,picUrl} =props.info
    return(
        <Singercoverwarp>
            <a href="todo">
                <div className='img'>
                    <img src={getSizeImage(picUrl,62)} alt="" />
                </div>
                <div className='info'>
                    <p className='info-name'>
                        {
                            name
                        }
                    </p>
                    <p className='info-alias'>
                        {alias[0]}
                    </p>
                </div>
            </a>
        </Singercoverwarp>
    )
}