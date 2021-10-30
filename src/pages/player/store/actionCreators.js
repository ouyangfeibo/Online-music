import * as actionTypes from './constants';
import {getSongDetail,getLyric} from '@/services/player'
import {parseLyric} from '@/utils/lrc-parse.js'


const changePlayListAction=(playList)=>({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList
});

const changeCurrentSongIndexAction = (index) => ({
  type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
  index
});

const changeCurrentLoopAction=(loop)=>({
  type:actionTypes.CHANGE_CURRENT_LOOP,
  loop
})

const changeCurrentLytitAction=(lytit)=>({
  type:actionTypes.CHANGE_CURRENT_LYTIT,
  lytit
})

export const changePlayList=(ids)=>{
  return (dispatch,getState)=>{
    
    // 1.判断是否歌曲存在playList中
    const playList = getState().player.playList;

    const songIndex = playList.findIndex(song => song.id === ids);
    if (songIndex !== -1) { // 找到数据
      dispatch(changeCurrentIndex(songIndex))
      // dispatch(changeCurrentSongIndexAction(songIndex))
    } else { // 未找到数据
      getSongDetail(ids).then(res => {
        const song = res.songs && res.songs[0];
        if (!song) return;
        // 1.添加到playList中
        const newPlayList = [...playList];
        newPlayList.push(song);
        dispatch(changePlayListAction(newPlayList));
        // 2.改变当前index
        dispatch(changeCurrentIndex(newPlayList.length - 1))

        // dispatch(changeCurrentSongIndexAction(newPlayList.length - 1));


      });
    }
  }
}

export const changeCurrentIndex=(index)=>{
   return (dispatch,getState)=>{
    const playList = getState().player.playList;
    const id=playList[index].id
    getLyric(id).then(res=>{
      const lineObj = {time:playList[index].dt, content:''};
      const lineObj2 = {time:playList[index].dt+1000, content:''};
      let lytit=parseLyric(res.lrc.lyric)
      lytit.push(lineObj)
      lytit.push(lineObj2)
      dispatch(changeCurrentLytitAction(lytit))

    })

    dispatch(changeCurrentSongIndexAction(index))
   }
}



export const changeCurrentLoop=(loop)=>{
  return (dispatch)=>{
      dispatch(changeCurrentLoopAction(loop))
  }
}

