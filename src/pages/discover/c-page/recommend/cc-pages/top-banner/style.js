import styled from 'styled-components';
import downlod from '@/assets/img/download.png'
import bannerleft from '@/assets/img/banner-control-left.png'
import bannerright from '@/assets/img/banner-control-right.png'


export const Banner=styled.div`
    background: url(${props => props.bg}) center center/6000px;
`
export const BannerWarp=styled.div`
    display: flex;
    height: 285px;

`

export const LefeBanner=styled.div`
    width: 730px;

    .banner-img{
        height: 285px;
    }
    .slick-slider .slick-prev{
        left: -68px;
        background: url(${bannerleft})  no-repeat;

    }
    .slick-slider .slick-next{
        right: -322px;
        background: url(${bannerright})  no-repeat;
    }
    .slick-slider .slick-prev,.slick-slider .slick-next{
        width: 37px;
        height: 63px;
    }
    .slick-slider .slick-prev:before,.slick-slider .slick-next:before{
        content: '';
    }
    .slick-slider .slick-prev:hover,.slick-slider .slick-next:hover{
        background-color: rgba(0,0,0,0.1);
    }
    .slick-dots{
        bottom: 0px;
        button:before{
            color: white;
        }
        button:hover:before{
            color: red;
        }
        .slick-active button:before{
            color: red;
        }
    }
`


export const RightDownload=styled.div`
    width: 254px;
    background: url(${downlod}) no-repeat 0 0;
    z-index: 20;

    a{
        display: block;
        height: 100%;
        /* background: url(${downlod}); */
        z-index: -1;
        background-position: 0 9999px;
    }
`

