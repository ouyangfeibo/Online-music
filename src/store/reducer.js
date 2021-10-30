import {combineReducers} from 'redux'

import {recommendReducer} from '@/pages/discover/c-page/recommend/store'

import { reducer as playerReducer } from "../pages/player/store";

export default combineReducers({
    recommend:recommendReducer,
    player: playerReducer
})