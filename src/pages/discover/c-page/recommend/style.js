import styled from "styled-components";

export const ContentWarp = styled.div`
    padding-left:20px;
    background: #fff;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    .content-left,.content-right{
        padding-top: 20px;
        padding-bottom: 40px;
    }
    .content-right{
        width: 250px;
        border-left: 1px solid #ccc;
    }
`