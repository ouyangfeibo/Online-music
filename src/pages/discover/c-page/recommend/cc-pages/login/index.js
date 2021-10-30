import React, { memo, useEffect, useState } from 'react'

import {LoginWarp} from './style'
export default memo(function Login() {
    useEffect(() => {
        setstate({login:false})
    }, [])

    const [state, setstate] = useState({login:false})
    return (
        <LoginWarp>
            {state.login?<IsLogin />:<Nologin/>}
        </LoginWarp>
    )
})



function IsLogin() {
    return (
        <div className='is-login'>
            <span>登入成功</span>
        </div>
    )
}


function Nologin(){
    return(
        <div className='no-login'>
            <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
            <a href='todo'>用户登录</a>
        </div>
    )
}