import styled from 'styled-components'


export const JoinSingerWarp  = styled.div`
    margin-top: 15px;
    .title{
        position: relative;
        height: 23px;
        margin: 0 20px;
        border-bottom: 1px solid #ccc;
        color: #333;
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        
        .title-name{
            font-weight: bold;
        }
    }

    .join{
        margin-top: 12px;
       
        a {
            width: 210px;;
            color: #333;
            font-weight: 700;
            margin-left: 20px;
            text-align: center;
            display: block;
            height: 31px;
            line-height: 31px;
            border-radius: 4px;
            background-color: #fafafa;
            border: 1px solid #c3c3c3;
            text-decoration: none;
            &:hover{
                background-color: #f6f6f6;
            }
        }
    }
`

export const Singercoverwarp  = styled.div`
    width: 210px;
    height: 53px;
    background: #fafafa;
    margin: 14px 0 0 20px;
    border: 1px solid #e9e9e9;
    a{
        &:hover{
            text-decoration: none;
            background-color: #f5f5f5;
        }
        display: flex;
        justify-content: space-between;
        .img{
            flex:62px;
        }
        .info{
            text-align: center;
            flex: 100%;
            .info-name{
                margin-top: 5px;
                font-weight: bold;
                color: black;
                font-size: 13px;
            }
        }
    }
`