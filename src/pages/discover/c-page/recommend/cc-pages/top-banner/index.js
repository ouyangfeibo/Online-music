import React,{useEffect, useState ,memo} from 'react'
import Slider from "react-slick";
import { useSelector ,useDispatch,shallowEqual} from 'react-redux';
import {NavLink} from 'react-router-dom'
 
import { getBanner} from '../../store/createaction'

import { LefeBanner ,
  RightDownload,
  Banner,
  BannerWarp
} from './style';
export default memo( function TopBanner() {
  //保存当前轮播的index
  const [currentindex, setCurrentindexIndex] = useState(0)
  //使用Hook获取redux中的state和dispatch
  const banners = useSelector(state => state.recommend.topBanners,shallowEqual)
  const dispatch = useDispatch()

  //组件渲染后发送axios请求图片
  useEffect(() => {
    getBanner()(dispatch)
  }, [dispatch])

  //轮播配置文件
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        fade: true,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    //获取当前图片的地址，并且对图片地址进行拼接，传到styled中
    const bgImage = banners[currentindex] && (banners[currentindex].imageUrl + '?imageView&blur=40x20')
    const ahref = banners[currentindex] && ('https://music.163.com/song?id=' + banners[currentindex].encodeId)


    const bannerChange = (oldindex,nowindex)=>{
      setCurrentindexIndex(nowindex)
    }


    return (
      <Banner bg={bgImage}>
       <BannerWarp className='wrap-v2'>
          <LefeBanner> 
            <Slider {...settings} beforeChange={bannerChange}>
              {
                banners.map((item,index)=>{
                  return(
                    <a href={ahref} key={item.imageUrl}><img src={item.imageUrl} alt={index}  className='banner-img'/></a> 
                  )
                })
              }
            </Slider>
          </LefeBanner>
          <RightDownload>
            <NavLink to='/download'></NavLink>
          </RightDownload>
        </BannerWarp>
      </Banner>

    )
}
)