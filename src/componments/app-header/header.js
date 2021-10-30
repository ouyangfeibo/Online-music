import React from 'react'
import { NavLink } from 'react-router-dom'
import { Input ,Button} from 'antd';
import { SearchOutlined  } from '@ant-design/icons';

import { Headerwarp,HeaderLeft,HeaderRight} from './style'

export default function Header() {
    const clear=(e)=>{
        e.target.placeholder=''
    }
    const unclear=(e)=>{
        e.target.placeholder="音乐/视频/电台/用户"
    }
    return (
        <Headerwarp>
            <div className='content'>
                <HeaderLeft>
                    <a className="logo sprite_01" href="#/">网易云音乐</a>
                    <NavLink  to={'/discover'}> <span className='listitem'>发现音乐</span><i></i></NavLink>
                    <NavLink to={'/my'}><span className='listitem'>我的音乐</span><i></i></NavLink>
                    <NavLink to={'/friend'}><span className='listitem'>朋友</span><i></i></NavLink>
                    <a href="https://music.163.com/store/product" target='_blank' rel="noopener noreferrer"><span className='listitem'>商城</span></a>
                    <a href="https://music.163.com/st/musician" target='_blank' rel="noopener noreferrer"><span className='listitem'>音乐人</span></a>
                    <NavLink to={'/download'}><span className='listitem download'>下载客户端</span><i></i></NavLink>
                </HeaderLeft>
                <HeaderRight>
                    <Input placeholder="音乐/视频/电台/用户" className='search' onBlur={unclear} onFocus={clear} prefix={<SearchOutlined/> } />
                    <Button className="center">创作者中心</Button>
                    <span className='denglu'>登录</span>
                </HeaderRight>
            </div>
            <div className='headerline'>
            </div>
        </Headerwarp>
    )
}
