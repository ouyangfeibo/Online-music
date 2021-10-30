import React, { memo } from 'react';

import {
  hotRadios
} from "@/services/local-data";

import {
  HotRadioWrapper
} from './style';

export default memo(function HotRadio() {
  return (
    <HotRadioWrapper>
      <h3 className='title'> 
        <span className='title-name'>热门主播</span>
      </h3>
      <div className="radio-list">
        {
          hotRadios.map((item, index) => {
            return (
              <div className="item" key={item.picUrl}>
                <a href={item.url} className="image">
                  <img src={item.picUrl} alt="" />
                </a>
                <div className="info">
                  <div className="name">{item.name}</div>
                  <div className="position text-nowrap">{item.position}</div>
                </div>
              </div>
            )
          })
        }
      </div>
    </HotRadioWrapper>
  )
})
