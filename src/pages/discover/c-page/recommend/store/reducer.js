import * as actionTypes from './constants';

const initstate={
    topBanners:[],
    HotRecommend:[],
    NewAlbum:[],
    topUpList:[],
    topNewList:[],
    topOriginList:[],
    JoinSinger:[],
}


export default function recommendReducer(state=initstate,action){
    switch(action.type){
        case actionTypes.CHANGE_TOP_BNNAER:
            return {...state,topBanners:action.banners}
        case actionTypes.CHANGE_HOT_RECOMMEND:
            return {...state,HotRecommend:action.recommends}
        case actionTypes.CHANGE_NEW_ALBUM:
            return {...state,NewAlbum:action.newAlbum}
        case actionTypes.CHANGE_UP_LIST:
            return {...state,topUpList:action.topUpList}
        case actionTypes.CHANGE_NEW_LIST:
            return {...state,topNewList:action.topNewList}
        case actionTypes.CHANGE_ORIGIN_LIST:
            return {...state,topOriginList:action.topOriginList}
        case actionTypes.CHANGE_JOIN_SONGER:
            return {...state,JoinSinger:action.JoinSinger}
        default:
            return state;
    }


}