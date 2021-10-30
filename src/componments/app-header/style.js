import styled from 'styled-components';
import sprite_01 from '@/assets/img/sprite_01.png'

export const Headerwarp=styled.div`
    height: 75px;
    background-color: #242424;
    font-size: 14px;
    .headerline{
        height: 5px;
        background-color: #C20C0C;
    }
    .content{
        display: flex;
        justify-content: space-between;
        height: 70px;
        width: 1100px;
        margin: 0 auto;
        color: #eae9e9;
    }
    

`
export const HeaderLeft = styled.div`
    display: flex;
    .logo{
        display: block;
        width: 176px;
        height: 70px;
        background-position: 0 0;
        text-indent: -9999px;
    }
    a.logo:hover{
        background-color: #242424;
    }
    .listitem{
        line-height: 70px;
        padding:0 19px;
        color: #eae9e9;
    }
    a{
        position: relative;
        i{
            display: inline-block;
            width: 10px;
            height: 10px;
            position: absolute;
            background-position: -227px 0;
            top: 64px;
            left: 50%;
            transform: translate(-50%,0);
        }
        &.active i{
            background-image: url(${sprite_01}) ;
        }
        .download{
            position: relative;
            ::after{
                content: '';
                display: inline-block;
                width: 28px;
                height: 19px;
                position: absolute;
                background-image: url(${sprite_01}) ;
                background-position: -190px 0;
                top: -10px;
                left: 100px;
            }
        }
    }
    a:hover{
        background-color: black;
        text-decoration: none;
    }
    a.active{
        background-color: black;
    }
`
export const HeaderRight = styled.div`
padding-top: 16px;
    .search{
        border:none;
        border-radius:18px;
        width:158px;
        height:30px;
        .ant-input{
            font-size: 12px;
        }
    }
    .center{
        background-color: black;
        color:#ccc;
        border-radius: 18px;
        width: 90px;
        height: 32px;
        padding: 0;
        line-height: 33px;
        border: 1px solid #4F4F4F;
        margin-left: 15px;

    }
    .center:hover{
        color:#fff;
        border: 1px solid #ccc;
    }
    .denglu{
        display: inline-block;
        width: 28px;
        color: #787878;
        font-size: 12px;
        margin-left: 15px;
    }
    .denglu:hover{
        text-decoration:underline;
        color: #8c8b8b;
    }

`


