import styled from 'styled-components';

import progressbar from "@/assets/img/progress_bar.png"
import spriteicon from "@/assets/img/sprite_icon.png"

export const PlayerWarp = styled.div`
     position: fixed;
        z-index: 99;
        left: 0;
        right: 0;
        bottom: 0;
        height: 52px;
        background-position: 0 0;
        background-repeat: repeat;
    .content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
        height: 47px;
  }
`


export const Control = styled.div`
  display: flex;
  align-items: center;

  .prev, .next {
    width: 28px;
    height: 28px;
  }

  .prev {
    background-position: 0 -130px;
  }

  .play {
    width: 36px;
    height: 36px;
    margin: 0 8px;
    background-position: 0 ${props => props.isPlaying ? "-165px": "-204px"};
  }

  .next {
    background-position: -80px -130px;
  }
`

export const PlayInfo = styled.div`
  display: flex;
  width: 642px;
  align-items: center;

  .image {
    width: 34px;
    height: 34px;
    border-radius: 5px;
  }

  .info {
    flex: 1;
    color: #a1a1a1;
    margin-left: 10px;

    .song {
      color: #e1e1e1;
      position: relative;
      top: 8px;
      left: 8px;

      .singer-name {
        color: #a1a1a1;
        margin-left: 10px;
      }
    }

    .progress {
      display: flex;
      align-items: center;

      .ant-slider {
        width: 493px;
        margin-right: 10px;

        .ant-slider-rail {
          height: 9px;
          background: url(${progressbar}) right 0;
        }

        .ant-slider-track {
          height: 9px;
          background: url(${progressbar}) left -66px;
        }

        .ant-slider-handle {
          width: 22px;
          height: 24px;
          border: none;
          margin-top: -7px;
          background: url(${spriteicon}) 0 -250px;
        }
      }

      .time {
        .now-time {
          color: #e1e1e1;
        }
        .divider {
          margin: 0 3px;
        }
      }
    }
  }
  
`

export const Operator = styled.div`
  display: flex;
  position: relative;
  top: 5px;

  .btn {
    width: 25px;
    height: 25px;
  }

  .favor {
    background-position: -88px -163px;
  }

  .share {
    background-position: -114px -163px;
  }

  .right {
    display: flex;
    align-items: center;
    width: 126px;
    padding-left: 13px;
    background-position: -147px -248px;
    
    .volume {
      position: relative;
      background-position: ${props=>props.minvoice?'-2px -248px':'-104px -69px'};
      .volume-bar{
        position: absolute;
        top: -128px;
        left: -5px;
        display: ${props=> props.isshow? 'block':'none'};
        width: 32px;
        height: 113px;
        background-color: #2b2b2b;
        padding: 10px 0;
        .ant-slider-track{
          background-color: #c70c0c;
        }
        .ant-slider-handle{
          border: solid 1px #fff;
          background: url(${spriteicon}) -5px -256px;
        }

      }
    }

    .loop {
      background-position: ${props => {
        switch(props.loop) {
          case 1:
            return "-66px -248px";
          case 2:
            return "-66px -344px";
          default:
            return "-3px -344px";
        }
      }};
    }

    .playlist {
      padding-left: 18px;
      text-align: center;
      color: #ccc;
      width: 59px;
      background-position: -42px -68px;
    }
    .music-list{
        color: rgb(226,226,226);
        position: absolute;
        width: 980px;
        height: 301px;
        bottom:42px;
        left:-804px;
        background-color: rgba(43,43,43,.95);
         .list-hd{
           display: flex;
           position: relative;
           height: 50px;

           h4{
            position: absolute;
            left: 25px;
            line-height: 39px;
            font-size: 15px;
            color: #e2e2e2;
           }
           .addall{
             position: absolute;
             left: 398px;
             top: 12px;
             .ico-add{
               margin-right: 3px;
                display: inline-block;
                width: 16px;
                height: 16px;
                background-position: -24px 0;
                vertical-align: -4px;
             }
           }
           .line{
            position: absolute;
            top: 13px;
            left: 477px;
            height: 15px;
            border-left: 1px solid #000;
            border-right: 1px solid #2c2c2c;
           }
           .line02{
            position: absolute;
            top: 7px;
            left: 550px;
            height: 23px;
            border-left: 1px solid #000;
            border-right: 1px solid #2c2c2c;
           }
           .clear{
            position: absolute;
            left: 490px;
            top: 12px;
             .ico-del{
              margin-right: 3px;
              display: inline-block;
              width: 13px;
              height: 16px;
              vertical-align: -4px;
              background-position: -51px 0;
             }
           }
           .lytit{
             position: absolute;
             top:5px;
             right: 190px;
             font-size: 14px;
             font-weight: bold;
           }
           .close{
            position: absolute;
            top: 6px;
            right: 8px;
            display: inline-block;
            width: 30px;
            height: 30px;
            overflow: hidden;
            text-indent: -999px;
            cursor: pointer;
            background-position: -195px 9px;
           }
         }
         .list-bd{
           height: 250px;
           display: flex;
           position: relative;
           .song-list{
              height: 100%;
              padding-left: 30px;
              overflow-y: auto;
              margin-right: 435px;
              &::-webkit-scrollbar{
                padding-top: 50px;
                width: 5px;
                background-color: rgba(0,0,0,.3);
              }
              &::-webkit-scrollbar-thumb{
                background: #868686;
                border-radius: 5px;
                opacity: 0.8;
                height:0px;
              }
             .list-item{
               cursor: pointer;
               padding: 5px 0;
               display: flex;
               .name{width: 256px;text-align:left;}
               .icos{
                 i{
                  display: inline-block;
                  height: 16px;
                  margin: 0 0 0 8px;

                 }
                 .del{
                  width: 13px;
                  background-position: -51px 0;
                 }
                 .download{
                  width: 14px;
                  background-position: -57px -50px;
                 }
                 .share{
                  width: 14px;
                  background-position: 0 0;
                 }
                 .collect{
                  width: 16px;
                  background-position: -24px 0;
                 }
               }
               .singer{width: 70px;margin-left:5px;}
               .time{margin-left:20px}
               .link{
                padding-top: 2px;
                margin-left:10px;
                 .linkico{
                  display: inline-block;
                  height: 13px;
                  width:16px;
                  background-position: -80px 0px;}}
             }
           }
           .song-lytit{
             position: absolute;
             top: 0;
             right: 138px;
              width: 390px;
             height: 100%;
             overflow-y: auto;
             transform: translateX(125px);
             &::-webkit-scrollbar{
                padding-top: 50px;
                width: 5px;
                background-color: rgba(0,0,0,.3);
              }
              &::-webkit-scrollbar-thumb{
                background: #868686;
                border-radius: 5px;
                opacity: 0.8;
                height:0px;
              }
             .lytit-item{
               text-align: center;
                padding: 3px 0;
             }
             .lytit-item.lytit-active{
               color: red;
               font-size: 14px;
             }
           }
         }
      }
  }
`