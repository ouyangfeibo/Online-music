import styled from 'styled-components';


export const Leaderbar = styled.div`
    height: 33px;
    border-bottom: 2px solid #C10D0C;
    padding: 0 10px 4px 34px;
    background-position: -225px -156px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .leder-left{
        display: flex;
        align-items: center;

        .title {
            font-size: 20px;
            font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
            margin-right: 20px;
        }

        .keyword {
            display: flex;

            &:last-child div:last-child .divider{
                display: none;
            }

        .item {
            .divider {
                margin: 0 15px;
                color: #ccc;
            }
        }
    }
}


    .leder-right {
        display: flex;
        align-items: center;
        .icon {
            display: inline-block;
            width: 12px;
            height: 12px;
            margin-left: 4px;
            background-position: 0 -240px;
        }
    }
    

`