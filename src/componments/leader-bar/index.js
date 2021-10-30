import React, { memo } from 'react'

import {Leaderbar} from './styled'

export default memo(function LeaderBar(props) {
    const {title,keywords=[]} = props
    return (
        <Leaderbar className='sprite_02'>
            <div className='leder-left'>
                <h3 className="title">{title}</h3>
                <div className='keyword'>
                    {
                        keywords.map((item,index)=>{
                            return  <div className='item' key={item}>
                                <a href="todo"><span className='item'>{item}</span></a>
                                <span className='divider'>|</span>
                            </div>
                        })
                    }
                </div>
            </div>
            <div className='leder-right'>
                <a href='todo'>更多</a>
                <i className="icon sprite_02"></i>    
            </div>
        </Leaderbar>
    )
})
