import styled from "styled-components";

export const HotRadioWrapper = styled.div`
  padding: 20px;
  .title{

        height: 23px;
        border-bottom: 1px solid #ccc;
        color: #333;
        display: flex;
        justify-content: space-between;
        font-size: 12px; 
        .title-name{
            font-weight: bold;
        }
    }
  .radio-list {
    margin-top: 20px;

    .item {
      display: flex;
      margin-bottom: 10px;
      width: 210px;
      .image {
        img {
          width: 40px;
          height: 40px;
        }
      }

      .info {
        width: 160px;
        margin-left: 8px;
        .name {
          color: #000;
          font-weight: 700;
          margin-top: 3px;
        }

        .position {
          color: #666;
        }
      }
    }
  }
`

