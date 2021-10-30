import React, { memo, useEffect, useRef, useState } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Slider } from 'antd';

import { changeCurrentIndex,changeCurrentLoop } from '../store/actionCreators';
import {getSizeImage,formatMinuteSecond,getPlayUrl} from '@/utils/format-utils.js'
import {
  PlayerWarp,
  Control,
  PlayInfo,
  Operator
} from './style';

export default memo(function Player() {
//获取audio元素
    const audioref =useRef();
    const songlist =useRef();

//组件内部state
        //isPlaying判断当前是否在播放
    const [isPlaying, setisPlaying] = useState(false)
    const [isShowVolume , setisShowVolume] = useState(false)
    const [isvoice, setisvoice] = useState(true)

        //记录当前播放的时间
    const [currentTime, setcurrentTime] = useState(0)

//redux hooks

    //当前播放列表
    const playList = useSelector(state => state.player.playList,shallowEqual)
    const currentIndex = useSelector(state=>state.player.currentSongIndex,shallowEqual)
    const currentLoop = useSelector(state=>state.player.currentLoop,shallowEqual)
    const currentLytit = useSelector(state=>state.player.currentLytit,shallowEqual)

    const dispatch = useDispatch()
//组件第一次渲染和依赖改变渲染
    useEffect(()=>{
        //设置当前播放的src
        audioref.current.src=getPlayUrl(playList[currentIndex].id);
        audioref.current.play().then(res => {
            setisPlaying(true);
          }).catch(err => {
            setisPlaying(false);
          });
          
    },[playList,currentIndex])
    

//处理函数

//播放按钮
    const play=()=>{
        if(!isPlaying){
            audioref.current.play()
            setisPlaying(true)
        }   
        else{
            setcurrentTime(audioref.current.currentTime*1000)
            audioref.current.pause()
            setisPlaying(false)
        }
    }

//audio元素的时间改变调用函数
    function changeTime(){
        setcurrentTime(audioref.current.currentTime * 1000)

        //设置歌词滚动
        let active=document.getElementsByClassName('lytit-active')[0]
        let activelist=document.getElementsByClassName('song-lytit')[0]
        if(active){
            activelist.scrollTop=active.offsetTop-100
        }
    }

//进度条改变调用函数
    function sliderchange(value){
        audioref.current.currentTime=value/1000
        setcurrentTime(value)
        
    }
//改变播放模式
    function changeLoop(){
        if(currentLoop===0){
            dispatch(changeCurrentLoop(1))
        }
        else if(currentLoop===1){
            dispatch(changeCurrentLoop(2))
        }else{
            dispatch(changeCurrentLoop(0))
        }
    }


//向右切换歌曲调用函数
    function nextsong(){
        //设置当前时间和进行播放
        audioref.current.currentTime=0
        //判断当前的模式
        if(currentLoop===0){
            currentIndex===playList.length-1?dispatch(changeCurrentIndex(0)):dispatch(changeCurrentIndex(currentIndex+1))}
        else if(currentLoop===1){
            let index=Math.floor(Math.random()*playList.length)

            while(currentIndex===index){
                index=index=Math.floor(Math.random()*playList.length)
            }
            dispatch(changeCurrentIndex(index))
        }else{
            dispatch(changeCurrentIndex(currentIndex))
        }
        
    }

//向左切换歌曲调用函数
    function prevsong(){
        audioref.current.currentTime=0
        if(currentLoop===0){
            currentIndex===0?dispatch(changeCurrentIndex(playList.length-1)):dispatch(changeCurrentIndex(currentIndex-1))
        }
        else if(currentLoop===1){
            let index=Math.floor(Math.random()*playList.length)

            while(currentIndex===index){
                index=index=Math.floor(Math.random()*playList.length)
            }
            dispatch(changeCurrentIndex(index))
        }else{
            dispatch(changeCurrentIndex(currentIndex))
        }
    }
//自然播放结束
    function audioEnd(){
        nextsong()
    }

    function showVolume(){
        setisShowVolume(!isShowVolume)
    }
    function changeVolume(value){
        audioref.current.volume=value/100
        if(value===0){setisvoice(false)}
        else{
            setisvoice(true)
        }      
    }

    function showlist(){
        if(songlist.current.style.display==='none'){
            songlist.current.style.display='block'
        }else{
            songlist.current.style.display='none'
        }
    }
    function close(){
        songlist.current.style.display='none'
    }
    function changemusic(index){
        dispatch(changeCurrentIndex(index))
    }
    return (
        <PlayerWarp className="sprite_playbar">
            <div className="content wrap-v2">
                <Control isPlaying={isPlaying}>
                    <button className="sprite_playbar btn prev" 
                        onClick={prevsong}
                    ></button>
                    <button className="sprite_playbar btn play" onClick={e=>{play()}}></button>
                    <button className="sprite_playbar btn next" 
                        onClick={nextsong}
                    ></button>
                </Control>
                <PlayInfo>
                    <div className="image">
                        <NavLink to="/discover/player">
                            <img src={getSizeImage(playList[currentIndex].al.picUrl,34)} alt="" />
                        </NavLink>
                    </div>
                    <div className="info">
                        <div className="song">
                        <span className="song-name">{playList[currentIndex].name}</span>
                        <span className="singer-name">{playList[currentIndex].ar[0].name}</span>
                        </div>
                        <div className="progress">
                        <Slider  max={playList[currentIndex].dt}  onChange={sliderchange} value={currentTime}/>
                        <div className="time">
                            <span className="now-time">{formatMinuteSecond(currentTime)}</span>
                            <span className="divider">/</span>
                            <span className="total-time">{formatMinuteSecond(playList[currentIndex].dt)}</span>
                        </div>
                        </div>
                    </div>
                </PlayInfo>
                <Operator loop={currentLoop} isshow={isShowVolume} minvoice={isvoice}>
                    <div className="left">
                        <button className="sprite_playbar btn favor"></button>
                        <button className="sprite_playbar btn share"></button>
                    </div>
                    <div className="right sprite_playbar">
                        <button className="sprite_playbar btn volume" onClick={showVolume}>
                            <div className='volume-bar'>
                                <Slider onChange={changeVolume}  defaultValue={100} vertical/>
                            </div>
                        </button>
                        <button className="sprite_playbar btn loop" 
                                onClick={changeLoop}
                                ></button>
                        <button className="sprite_playbar btn playlist" onClick={e=>{e.stopPropagation();showlist()}}>
                            {playList.length}
                            
                        </button>
                        <div className='music-list' ref={songlist} style={{display:'none'}}>
                                <div className='list-hd'>
                                    <h4>播放列表({playList.length})</h4>
                                    <span className='addall'> <i className='ico-add sprite_playlist'></i>收藏全部</span>
                                    <span className='line'></span>
                                    <span className='clear'> <i className='ico-del sprite_playlist'></i>清除</span>
                                    <span className='line02'></span>
                                    <p className='lytit'>{playList[currentIndex].name}</p>
                                    <span className='close sprite_playlist' onClick={close}>关闭</span>
                                </div>
                                <div className='list-bd'>
                                    <div className='song-list'>
                                        <ul>
                                            {
                                                playList.map((item,index)=>{
                                                    return(
                                                        <li key={item.id} className='list-item' onClick={e=>changemusic(index)}>
                                                            <p className='name'>{item.name}</p>
                                                            <p className='icos'>
                                                                <i className="sprite_playlist del" title="删除" ></i>
                                                                <i className="sprite_playlist download" title="下载" ></i>
                                                                <i className="sprite_playlist share" title="分享" ></i>
                                                                <i className="sprite_playlist collect" title="收藏" ></i>
                                                            </p>
                                                            <p className='singer text-nowrap'>{item.ar[0].name}</p>
                                                            <p className='time'>{formatMinuteSecond(item.dt)}</p>
                                                            <p className='link'>
                                                                <i className='linkico sprite_playlist' title='来源'></i>
                                                            </p>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                    <div className='song-lytit'>
                                        {
                                            currentLytit.map((item,index)=>{
                                                return <div className={currentTime>item.time&&currentTime<currentLytit[index+1].time?'lytit-active lytit-item':'lytit-item'} key={index} >{item.content}</div>
                                            })
                                        }
                                    </div>
                                </div>
                            </div> 
                    </div>
                </Operator>
            </div>
            <audio ref={audioref} onTimeUpdate={changeTime} onEnded={audioEnd}/>
        </PlayerWarp>
    )
})
