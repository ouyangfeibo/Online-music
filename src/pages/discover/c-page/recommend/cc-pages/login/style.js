import styled from 'styled-components'
import sprite_02 from '@/assets/img/sprite_02.png'

export const LoginWarp = styled.div`

    .no-login{
        height: 126px;
        background: url(${sprite_02}) no-repeat ;
        p{
            width: 205px;
            margin: 0 auto;
            padding: 16px 0;
            line-height: 22px;
            color: #666;
        }
        a{
            display: block;
            width: 100px;
            height: 31px;
            line-height: 31px;
            text-align: center;
            color: #fff;
            text-shadow: 0 1px 0 #8a060b;
            background: url(${sprite_02}) no-repeat ;
            background-position: 0 -194px;
            margin: 0 auto;
            text-decoration: none;

        }
    }

`