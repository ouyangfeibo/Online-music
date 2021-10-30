import Discover from "../pages/discover/index"
import Mymusic from "../pages/mymusic"
import Friend from "../pages/friend"
import Download from "../pages/download"

import Recommend from "../pages/discover/c-page/recommend"
import Album from "../pages/discover/c-page/album"
import Ranking from "../pages/discover/c-page/ranking"
import Singer from "../pages/discover/c-page/singer"
import Songsheet from "../pages/discover/c-page/songsheet"
import Station from "../pages/discover/c-page/station"

import {Redirect} from 'react-router-dom'

const routes=[
    {
        path:"/",
        exact: true,
        render: () => (
        <Redirect to="/discover"/>
        )
    }
    ,
    {
        path:'/discover',
        component:Discover,
        routes:[
            {
                path:'/discover',
                exact:true,
                component:Recommend
            },
            {
                path:'/discover/album',
                component:Album
            },
            {
                path:'/discover/ranking',
                component:Ranking
            },
            {
                path:'/discover/singer',
                component:Singer
            },
            {
                path:'/discover/songsheet',
                component:Songsheet
            },
            {
                path:'/discover/station',
                component:Station
            },
        ]
    },
    {
        path:'/my',
        component:Mymusic
    },
    {
        path:'/friend',
        component:Friend
    },
    {
        path:'/download',
        component:Download
    }
]

export default routes