(function() {
    const style = document.createElement('style');
    style.textContent = `

    @font-face {
        font-family: T;
        font-style: normal;
        font-weight: 400;
        src: url(../../../../_shared/assets/cdn1.teyes.cn/font/YS Text-Regular.woff2) format("opentype")

    }

    @font-face {
        font-family: N;
        font-style: normal;
        font-weight: 400;
        src: url(../../../../_shared/assets/cdn.teyes.cn/cc4/no.TTF) format("opentype")
    }
    .ft{
        position: absolute;
        color: #fff;
        position: absolute;
        color: #fff;
        bottom: 10px;
        left: 0;
        right: 0;
        text-align: center;
    }
    .ft .op{
        width: 38px;
        height: 22px;
        background-image: url('../../../../_shared/assets/cdn.teyes.cn/cc4/cc4pro/head/image/mb/right.png');
        background-position: center;
        background-size: cover;
        transition: all .3s;
        display: inline-block;
        vertical-align: -7px;
    }
    .pr{
        position: relative;
    }
    .vp{
        position: absolute;
        left: 49%;
        font-size: 1vw;
        color: #fff;
        margin-top: 2vh;
    }
    .sm{
        display: block;
        font-size: 3vw;
        line-height: 110%;
    }
    .footer {
        width: 100%;
        height: 40px;
        background-color: rgba(0,0,0,1);
        display: flex;
        align-items: center;
        position: fixed;
        z-index: 2;
        bottom: 0;
    }
    .footer .content {
        width: 90%;
        margin: auto;
    }
    .footer .content .text {
        font-size: 12px;
        color: #fff;
        cursor: pointer;
    }
    *{
        margin: 0;
        padding: 0;
        font-family: N;
    }
    .ru *{
        font-family: T;
    }
    a{
        text-decoration: none;
    }
    .newhl{
        color: #fff;
        font-size: 16px;
        line-height: 20px;
        display: flex;
        background-color: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter:blur(10px);
        padding: 15px 20px;
        border-radius: 20px;
        margin-bottom: 20px;
        margin-top: -25px;
        justify-content: space-between;
    }
    .spm{
        color: #fff;
        font-size: 16px;
        line-height: 20px;
        display: flex;
        background-color: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter:blur(10px);
        padding: 25px 20px;
        border-radius: 20px;
        justify-content:center;
    }
    .newhl .btn{
        border-radius: 8px;
        overflow: hidden;
        position: relative;
    }
    .newhl .btn span{
        cursor: pointer;
        display: inline-block;
        width: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 14px;
        z-index: 22;
        position: relative;
        border-radius:40px;
        background-color: rgba(255,255,255,.1);
    }
    .newhl>div{
        color:#fff;
        font-size:14px;
    }
    .newhl span{
        display:block;
        margin-top:10px;
    }
    #appheader{
        color:#fff;
    }
    #appheader .newhl .btn span.active{
        color:#000;
        background-color:#fff
    }
    .newhl .btn span:nth-child(1){
        margin-right:10px;
    }
    .newhl .btn .activeb{
        position: absolute;
        top: 0;
        left: 0;
        width: 40px;
        height: 40px;
        background-color: #fff;
        transition:  all .3s;
    }
    .newhl .btn .activeb.activebr{
        left: 40px;
    }

    #appheader{
        -webkit-tap-highlight-color: transparent;
        tap-highlight-color: transparent;
        position: relative;
        z-index:999;
        max-width:1280px;
        margin:auto;
        overflow: visible;
    }
    #appheader .appheadermask{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 99;
    }
    #appheader .head{
        height: 87px;
        width:100%;
        color: #fff;
        z-index: 100;
        border-radius: 20px;
    }
    #appheader .head-view{
        color: #fff;
        height: 0;
        opacity: 1;
        z-index: 100;
        overflow: hidden;
        transition: all .3s;
        position:relative;
        flex-wrap:wrap;
        width:100%;
        display: grid;
        grid-template-columns: repeat(4, 1fr); /* 四列等宽 */
        gap: 10px; /* 列间距 */
    }
    #appheader .head-view.active{
        opacity: 1;
        padding:0px 30px 30px 30px;
        height: auto;
    }

    #appheader .type-view{
        text-align: left;
        position:relative;
    }
    #appheader .type-view:nth-child(2),
    #appheader .type-view:nth-child(3),
    #appheader .type-view:nth-child(4){
    }
    #appheader .type-view:first-child{
        margin-right:20px
    }
    #appheader .type-view:last-child{
        margin-right:0
    }

    #appheader .type-view .flex:hover{
        opacity: .6;
    }
    #appheader .type-view img{
        /*width: 80%;*/
    }
    #appheader .tips-img{
        text-align: center;
        width:100%;
        margin-top: -11px;
    }
    
    #appheader .cc4v{
        position:absolute;
        bottom: 20px;
        left: min(2vw, 30px);
    }
    
    #appheader .type-view .bg{
        background-size: 100% auto;
        background-position: center;
        background-repeat: no-repeat;
    }
    
    #appheader .type-view .cc4pro{
        background-image: url('../../../../_shared/assets/cdn.teyes.cn/cc4/7/banner/CC4PROx5.webp');
        width: 13vw;
        height: calc(13vw / 1.65);
        max-width: calc(137px / 1);
        max-height: calc(83px / 1);
    }
    #appheader .type-view .cc4prologo{
        background-image: url('../../../../_shared/assets/cdn.teyes.cn/cc4/7/banner/CC4Prologo.svg');
        width: 5vw;
        max-width: calc(82px / 1);
        max-height: calc(15px / 1);
        height: calc(5vw / 5.4);
    }
    #appheader .type-view .cc4pro123{
        background-image: url('../../../../_shared/assets/cdn.teyes.cn/cc4/7/banner/CC4PRO12.3x5.webp');
        width: 13vw;
        height: calc(13vw / 1.65);
        max-width: calc(137px / 1);
        max-height: calc(83px / 1);
    }
    #appheader .type-view .cc4pro123logo{
        background-image: url('../../../../_shared/assets/cdn.teyes.cn/cc4/7/banner/CC4Pro12.3.svg');
        width: 6vw;
        max-width: calc(120px / 1);
        max-height: calc(20px / 1);
        height: calc(6vw / 6.8);
    }
    
    #appheader .type-view .cc4{
        background-image: url('../../../../_shared/assets/cdn.teyes.cn/cc4/7/banner/CC4x5.webp');
        width: 13vw;
        height: calc(13vw / 1.65);
        max-width: calc(137px / 1);
        max-height: calc(83px / 1);
    }
    #appheader .type-view .cc4logo{
        background-image: url('../../../../_shared/assets/cdn.teyes.cn/cc4/7/banner/CC4.svg');
        width: 6vw;
        max-width: calc(130px / 3.25);
        max-height: calc(40px / 3.25);
        height: calc(6vw / 3.25);
    }
    #appheader .type-view .cc4123{
        background-image: url('../../../../_shared/assets/cdn.teyes.cn/cc4/7/banner/CC412.3x5.webp');
        width: 13vw;
        height: calc(13vw / 1.65);
        max-width: calc(137px / 1);
        max-height: calc(83px / 1);
    }
    #appheader .type-view .cc4123logo{
        background-image: url('../../../../_shared/assets/cdn.teyes.cn/cc4/7/banner/CC412.3.svg');
        width: 6vw;
        max-width: calc(83px / 1);
        max-height: calc(20px / 1);
        height: calc(6vw / 4.85);
    }

    #appheader .type-view .cc4l{
        background-image: url('../../../../_shared/assets/cdn.teyes.cn/cc4/7/banner/CC4Lx5.webp');
        width: 13vw;
        height: calc(13vw / 1.65);
        max-width: calc(137px / 1);
        max-height: calc(83px / 1);
    }
    #appheader .type-view .cc4llogo{
        background-image: url('../../../../_shared/assets/cdn.teyes.cn/cc4/7/banner/CC4L.svg');
        width: 6vw;
        height: calc(6vw / 4.4);
        max-width: calc(176px / 3);
        max-height: calc(40px / 3);
    }
    #appheader .type-view .cc4box{
        background-image: url('../../../../_shared/assets/cdn.teyes.cn/cc4/7/banner/CC4BOXx5.webp');
        width: 13vw;
        height: calc(13vw / 1.65);
        max-width: calc(137px / 1);
        max-height: calc(83px / 1);
    }
    #appheader .type-view .cc4boxlogo{
        background-image: url('../../../../_shared/assets/cdn.teyes.cn/cc4/7/banner/CC4BOX.svg');
        width: 6vw;
        max-width: calc(102px / 1);
        max-height: calc(20px / 1);
        height: calc(6vw / 6.2);
    }
    #appheader .tips-img.v2{
        margin-top:-2vw;
    }



    #appheader .type-view .c1{
        background-image: url('../../../../_shared/assets/cdn.teyes.cn/cc4/gw/img/ncc4.png');
        width: 13vw;
        height: calc(13vw / 1.35);
        max-width: calc(270px / 2);
        max-height: calc(200px / 2);
    }
    #appheader .type-view .c11{
        background-image: url('../../../../_shared/assets/cdn.teyes.cn/cc4/gw/img/incc4.png');
        width: 6vw;
        max-width: calc(130px / 3.25);
        max-height: calc(40px / 3.25);
        height: calc(6vw / 3.25);
    }
    #appheader .type-view .c2{
        background-image: url('../../../../_shared/assets/cdn.teyes.cn/cc4/gw/img/cc4l.png');
        width: 13vw;
        height: calc(13vw / 1.35);
        max-width: calc(270px / 2);
        max-height: calc(200px / 2);
    }
    #appheader .type-view .c21{
        background-image: url('../../../../_shared/assets/cdn.teyes.cn/cc4/gw/img/icc4l.png');
        width: 6vw;
        height: calc(6vw / 4.4);
        max-width: calc(176px / 3);
        max-height: calc(40px / 3);
    }
    #appheader .type-view .c3{
        background-image: url('../../../../_shared/assets/cdn.teyes.cn/cc4/gw/img/lux.png');
        width: 13vw;
        height: calc(13vw / 1.35);
        max-width: calc(270px / 2);
        max-height: calc(200px / 2);
    }
    #appheader .type-view .c31{
        background-image: url('../../../../_shared/assets/cdn.teyes.cn/cc4/gw/img/ilux.png');
        width: 6vw;
        height: calc(6vw / 6.35);
        max-width: calc(254px / 3);
        max-height: calc(40px / 3);
    }
    #appheader .type-view .c4{
        background-image: url('../../../../_shared/assets/cdn.teyes.cn/cc4/gw/img/tpro.png');
        width: 13vw;
        height: calc(13vw / 1.35);
        max-width: calc(270px / 2);
        max-height: calc(200px / 2);
    }
    #appheader .type-view .c41{
        background-image: url('../../../../_shared/assets/cdn.teyes.cn/cc4/gw/img/itpro.png');
        width: 6vw;
        height: calc(6vw / 5.32);
        max-width: calc(213px / 3);
        max-height: calc(40px / 3);
    }
    #appheader .type-view .qs{
        background-image: url('../../../../_shared/assets/cdn.teyes.cn/cc4/gw/img/qs.png');
        width: 6vw;
        height: calc(6vw / 1.2);
        max-width: calc(113px / 1);
        max-height: calc(89px / 1);
    }
    #appheader .type-view .sz{
        background-image: url('../../../../_shared/assets/cdn.teyes.cn/cc4/gw/img/sz.png');
        width: 6vw;
        height: calc(6vw / 1.2);
        max-width: calc(113px / 1);
        max-height: calc(89px / 1);
    }
    #appheader .type-view .tt{
        background-image: url('../../../../_shared/assets/cdn.teyes.cn/cc4/gw/img/tt.png');
        width: 6vw;
        height: calc(6vw / 1.2);
        max-width: calc(113px / 1);
        max-height: calc(89px / 1);
    }
    #appheader .type-view .hs{
        background-image: url('../../../../_shared/assets/cdn.teyes.cn/cc4/gw/img/hs.png');
        width: 6vw;
        height: calc(6vw / 1.2);
        max-width: calc(113px / 1);
        max-height: calc(89px / 1);
    }
    #appheader .type-view .nk{
        background-image: url('../../../../_shared/assets/cdn.teyes.cn/cc4/gw/img/nk.png');
        width: 6vw;
        height: calc(6vw / 1.2);
        max-width: calc(113px / 1);
        max-height: calc(89px / 1);
    }
    #appheader .type-view .adas{
        background-image: url('../../../../_shared/assets/cdn.teyes.cn/cc4/gw/img/adas.png');
        width: 6vw;
        height: calc(6vw / 1.2);
        max-width: calc(113px / 1);
        max-height: calc(89px / 1);
    }
    #appheader .type-view .tpms{
        background-image: url('../../../../_shared/assets/cdn.teyes.cn/cc4/gw/img/ty.png');
        width: 6vw;
        height: calc(6vw / 1.2);
        max-width: calc(113px / 1);
        max-height: calc(89px / 1);
    }
    #appheader .type-view .v360{
        background-image: url('../../../../_shared/assets/cdn.teyes.cn/cc4/gw/img/360.png');
        width: 6vw;
        height: calc(6vw / 1.2);
        max-width: calc(113px / 1);
        max-height: calc(89px / 1);
    }
    #appheader .type-view .obd{
        background-image: url('../../../../_shared/assets/cdn.teyes.cn/cc4/gw/img/obd.png');
        width: 6vw;
        height: calc(6vw / 1.2);
        max-width: calc(113px / 1);
        max-height: calc(89px / 1);
    }
    #appheader .type-view .ahd{
        background-image: url('../../../../_shared/assets/cdn.teyes.cn/cc4/box/pc.png');
        width: 6vw;
        height: calc(6vw / 1.2);
        max-width: calc(113px / 1);
        max-height: calc(89px / 1);
    }
    #appheader .type-view .vst{
        margin-top:20px;
    }
    #appheader .type-view .tips2{
    }
    #appheader .flex-wrap{
        flex-wrap: wrap;
    }
    
    #appheader .flex{
        display: flex;
    }
    #appheader .flex1{
        flex: 1;
    }
    #appheader .justify-between{
        justify-content: space-between;
    }
    #appheader .align-center{
        align-items: center;
    }
    #appheader .ca{
        cursor: pointer;
    }
    #appheader .ca:hover{
        color: rgba(255,255,255,.8);
    }
    #appheader .active{
        color: rgba(255,255,255,.8);
    }
    #appheader .items{
        font-size: 18px;
    }

    #appheader .items .item{
        margin-left: 60px;
        color:rgba(255,255,255,.5);
    }
    #appheader .items .item:hover,
    #appheader .items .item.active{
        color:#fff;
    }
    #appheader .c3-title{
        font-size: 18px;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 24px;
        margin-bottom: 10px;
    }
    #appheader .c3-title span{
        color:#fff;
    }
    #appheader .tips{
        font-size: 16px;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 20px;
        opacity: 0.8;
    }
    #appheader .tips2{
        font-size: 16px;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 20px;
        opacity: 0.5;
        flex: 1;
        white-space: nowrap;
        text-align: left;
        margin-top: 10px;
    }
    #appheader .tips3{
        font-size: 18px;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 20px;
        flex: 1;
        white-space: nowrap;
        text-align: left;
        margin-top: 30px;
    }
    #appheader .sm {
        font-size:16px;
        display:flex;
    }
    #appheader .sm i{
        font-size:16px;
        font-style:normal;
        margin-left:4px;
        color:#fff;
    }
    #appheader .sm i:nth-child(1){
        margin-right:4px;
    }
    #appheader .sm s{
        font-size:12px;
        color:#fff;
        font-style:normal;
        text-decoration:none
    }
    #appheader .tips4{
        font-size: 18px;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 20px;
        white-space: nowrap;
        text-align: left;
        margin-top: 10px;
    }
    #appheader .tips2 span{
        color:#fff;
    }
    #appheader .close{
        display: none;
    }
    .head-view-mb{
        display: none;
    }
    #appheader .logo img{
        width: 120px;
    }
    #appheader .appheaderpage{
        position:fixed;
        background-color: rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(30px);
        -webkit-backdrop-filter:blur(30px);
        border-radius:20px;
        flex-wrap:wrap;
        max-width: 1280px;
        z-index:100;
        margin: 20px auto;
    }
    #appheader .pdnews{
        margin-top:10px;
        background-image:url('../../../../_shared/assets/cdn.teyes.cn/cc4/gw/img/news.png');
        width:60px;
        height:30px;
        border-radius: 8px;
        background-color:transparent;
        background-size:cover;
    }
    #appheader .appheaderpage .head{
        transition: all .3s;
    }
    #appheader .appheaderpage .head>div:nth-child(1){
        margin-left:40px;
    }
    #appheader .appheaderpage .head>div:last-child{
        margin-right:20px;
    }
    #appheader.showviewmb .appheaderpage .head{
    }
    @media screen and (min-width:1300px){
        #appheader .appheaderpage{
        }
    }
    @media screen and (max-width:1280px){
        #appheader .pdnews{
            position:absolute;
            top:20px;
            right:10px;
            width: 30px;
            height: 15px;
            border-radius: 4px;
        }
        #appheader .appheaderpage .maksvs{
            position:fixed;
            top:0;
            left:0;
            right:0;
            bottom:0;
            pointer-events: none;
            height:100vh;
        }
        #appheader .appheaderpage .head>div:nth-child(1){
            margin-left:0
        }
        #appheader .appheaderpage .head>div:last-child{
            margin-right:0;
        }
        #appheader .appheaderpage{
            margin:20px;
            left:0;
            right:0;
        }
        #appheader .appheadermask, #appheader .head-view{
            display: none;
        }
        #appheader .close{
            display: block;
        }
        #appheader .head{
            padding: 0 20px;
        }
        #appheader .head .flex{
            display: none;
        }
        #appheader .head .close{
            color: #ffffff;
            height: 50px;
            margin: 5px 0px;
            font-size: 25px;
            text-align: center;
            float: right;
            width: 90px;
            position: relative;
            -webkit-transition: background 0.5s;
            -moz-transition: background 0.5s;
            -o-transition: background 0.5s;
            transition: background 0.5s;
            margin-right: -20px;
        }
        #appheader .head .close span {
            position: absolute;
            left: calc((100% - 25px) / 2);
            top: calc((100% - 1px) / 2);
            width: 25px;
            height: 2px;
            border-radius: 2px;
            background-color: rgba(255,255,255,1);
        }
        #appheader .top{
            margin: 0;
            position: relative;
            max-height: 0;
            opacity: 0;
            overflow: hidden;
            transition: max-height .45s cubic-bezier(.22, .61, .36, 1), opacity .35s ease, margin .35s ease;
        }
        #appheader .head-view-mb .top.open{
            max-height: 70vh;
            opacity: 1;
            overflow: auto;
            margin: 12px 0 0 0;
        }
        #appheader .top .vin{
            display:flex;
            flex-wrap:wrap;
        }
        #appheader .newhl{
            position: relative;
            justify-content: space-between;
            margin-bottom: 20px;
            background-color:transparent;
            padding: 0 20px;
            margin-top:20px;
            backdrop-filter: none;
            -webkit-backdrop-filter:none;
        }
        #appheader .newhl:after {
            position: absolute;
            left: 20px;
            right: 20px;
            content: '';
            display: block;
            height: 1px;
            background-color: rgba(255, 255, 255, .1);
            bottom: -20px;
        }

        #appheader .head{
            height: 70px;
        }
        #appheader .head .close  span:nth-child(1){
            transform: translateY(8px) rotate(0deg);
        }
        #appheader .head .close span:nth-child(3){
            transform: translateY(-8px) rotate(0deg);
        }
        #appheader .head .close.active span:nth-child(1){
            animation-duration: 0.5s;
            animation-fill-mode: both;
            animation-name: clickfirst;
        }       
        #appheader .head .close.active span:nth-child(2){
            opacity: 0;
        }
        #appheader .head .close.active span:nth-child(3){
            animation-duration: 0.5s;
            animation-fill-mode: both;
            animation-name: clicksecond;
        }
        #appheader .head .close.out span:nth-child(1){
            animation-duration: 0.5s;
            animation-fill-mode: both;
            animation-name: outfirst;
        }       
        #appheader .head .close.out span:nth-child(3){
            animation-duration: 0.5s;
            animation-fill-mode: both;
            animation-name: outsecond;
        }
        #appheader .head-view-mb{
            width:100%;
            padding: 0 20px;
            color: #fff;
            z-index: 100;
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows .46s cubic-bezier(.22, .61, .36, 1);
        }
        #appheader .head-view-mb-inner{
            min-height: 0;
            overflow: hidden;
        }
        #appheader .head-view-mb.active{
            grid-template-rows: 1fr;
        }
        #appheader .head-view-mb.active .head-view-mb-inner{
            overflow: auto;
            max-height: calc(100vh - 150px);
        }
        #appheader .head-view-mb .item{
            padding-top:20px;
            font-size: 14px;
            font-weight: 400;
            color: #FFFFFF;
            line-height: 20px;
            opacity: 0;
            transform: translateY(14px);
            transition: opacity .38s ease, transform .42s ease;
        }
        #appheader .head-view-mb .item a{
            font-size: 14px;
            color: #FFFFFF;
        }
        #appheader .head-view-mb.active .item{
            opacity: 1;
            transform: none;
        }
        #appheader .head-view-mb .item>div{
            /*min-height: 40px;*/
        }
        #appheader .head-view-mb .item:after{
            margin-top: 20px;
            content: '';
            display: block;
            height: 1px;
            width: 100%;
            background-color: rgba(255, 255, 255, .1);
        }
        #appheader  .head-view-mb .item .ct{
            position: relative;
        }
        #appheader .head-view-mb .item .ct:after{
            content: '';
            display: block;
            left: 0;
            bottom: 0;
            position: absolute;
            height: 1px;
            width: 100%;
            background-color: rgba(255, 255, 255, .1);
        }
        #appheader .head-view-mb .item>div:nth-child(1) span{
            font-size: 16px;
            color:#fff;
        }
        .newhl{
            font-size:16px;
        }

        #appheader .head-view-mb .item .ct:last-child:after{
            display: none;
        }
        #appheader .head-view-mb .item .ct>div:nth-child(1) img{
            // width: 20vw;
            height:12px
        }
        #appheader .head-view-mb .item .ct>div:nth-child(3) img{
            width: 20vw;
        }
        #appheader .head-view-mb .item .op{
            width: 38px;
            height: 22px;
            background-image: url('../../../../_shared/assets/cdn.teyes.cn/cc4/cc4pro/head/image/mb/right.png');
            background-position: center;
            background-size: cover;
            transition: all .3s;
        }
        #appheader .head-view-mb .item.active .op{
            transform: rotate(90deg);
        }
        #appheader .head-view-mb .vg{
            text-align:center;
        }
        #appheader .head-view-mb .vlg{
            text-align:center;
            margin-top:-10px;
        }
        #appheader .head-view-mb .vlg img{
            width:60px
        }
        #appheader .head-view-mb .vg img{
            width:80px;
        }
        #appheader .tip2{
            opacity:0.5;
        }
        #appheader .head-view-mb .vin a{
            width:33.3%
        }
        #appheader .head-view-mb .vin img{
        }
        #appheader .head-view-mb  .tips4{
            font-size:2.7vw;
            text-align:center;
            margin-top:0;
            height:38px;
            display:flex;
            justify-content:center;
            align-items:center;
            line-height: 140%;
        }
        #appheader .tip2{
            font-size: 12px;
            text-align:center;
            font-weight: 400;
            color: #FFFFFF;
            line-height: 28px;
            opacity: 0.8;
            transform: scale(.75);
            margin-top:-10px;
        }
        #appheader .ct img{
            max-width: 100%;
        }
        #appheader .logo img{
            width: 100px;
        }
        #appheader .sm{
            font-size:14px;
            justify-content: center;
            margin-top: 10px;
            color:#fff;
        }
        #appheader .sm i{
            color:#fff;
            font-size:14px;
        }
        #appheader .sm s{
            font-size: 12px;
            display: inline-block;
        }
        #appheader .spm{
            color: #fff;
            font-size: 16px;
            line-height: 20px;
            display: flex;
            padding: 25px 20px 25px 20px;
            border-radius: 46px;
            justify-content: center;
            background-color: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter:blur(10px);
            margin-top: 20px;
            width:100%;
        }
    }
    @-webkit-keyframes bounceInLeft {
      from, 60%, 75%, 90%, to {
        -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
        animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
      }

      from {
        opacity: 0;
        -webkit-transform: translate3d(-3000px, 0, 0);
        transform: translate3d(-3000px, 0, 0);
      }

      60% {
        opacity: 1;
        -webkit-transform: translate3d(25px, 0, 0);
        transform: translate3d(25px, 0, 0);
      }

      75% {
        -webkit-transform: translate3d(-10px, 0, 0);
        transform: translate3d(-10px, 0, 0);
      }

      90% {
        -webkit-transform: translate3d(5px, 0, 0);
        transform: translate3d(5px, 0, 0);
      }

      to {
        -webkit-transform: none;
        transform: none;
      }
    }

    @-webkit-keyframes clickfirst {
      0% {
          transform: translateY(8px) rotate(0deg);
      }
      100% {
        transform: translateY(0) rotate(45deg);
      }
    }   


    @-webkit-keyframes clicksecond {
      0% {
          transform: translateY(-8px) rotate(0deg);
      }
      100% {
        transform: translateY(0) rotate(-45deg);
      }
    }   
    @-webkit-keyframes outfirst {
      0% {
        transform: translateY(0) rotate(-45deg);
      }

      100% {
        transform: translateY(-8px) rotate(0deg);
      }
    }   

    @-webkit-keyframes outsecond {
      0% {
        transform: translateY(0) rotate(45deg);
      }

      100% {
        transform: translateY(8px) rotate(0deg);
      }
    }


    .right{display:flex;}
    .langText{
        padding:0 0px 0 20px;
        color:#000;
    }
    .langText.tk .mk{
        display: block;
    }
    .langText.tk .t1{
        border-radius: 5px 5px 0 0;
    }
    .langText .t1 {
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:16px;
        width:40px;
        height:30px;
        border-radius: 5px;
        background-color: rgba(255,255,255,1);
        cursor: pointer;
        color:#000;
        text-transform: uppercase;
    }
    .langText .t1:hover {
    }
    .langText .mk {
        position: absolute;
        display: none;
        border-radius: 0px 0px 5px 5px;
        overflow: hidden;
    }
    .langText .mk .mt {
        cursor: pointer;
        // padding: 5px 10px;
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:18px;
        width:40px;
        height:30px;
        background-color: rgba(255,255,255,1);
        overflow: hidden;
        font-size: 16px;
        text-transform: uppercase;
    }
    .langText .mk .mt:hover {
        background-color: rgba(0,0,0,.8);
        color:#fff 
    }
    .youtube{ 
        width: 20px;
        height: 20px;
        display: inline-block;
        background-image: url('../../../../_shared/assets/cdn.teyes.cn/cc4/gw/news/youtube.svg');
    }
    .footer .content .text {
        font-size: 9px;
        color: #fff;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    /* Cookie consent (headv4: zh / ru / en only) */
    .cookie-consent {
        position: fixed;
        bottom: 24px;
        right: 24px;
        max-width: 400px;
        background: #18181b;
        border: 1px solid #27272a;
        border-radius: 12px;
        padding: 20px 24px;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        z-index: 9999;
        font-family: N, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        animation: cookieSlideIn 0.35s ease-out;
    }
    .cookie-consent.cookie-consent--ru {
        font-family: T, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }
    @keyframes cookieSlideIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    .cookie-consent.hidden { display: none; }
    .cookie-consent__title {
        font-size: 1rem;
        font-weight: 600;
        margin: 0 0 8px 0;
        color: #fafafa;
    }

    .cookie-consent__text {
        font-size: 0.875rem;
        color: #a1a1aa;
        line-height: 1.5;
        margin: 0 0 16px 0;
    }
    .cookie-consent__text span{
        color: #a1a1aa;
    }
    .cookie-consent__text a { color: #fff; text-decoration: underline; }
    .cookie-consent__text a:hover { color: #d4d4d8; }
    .cookie-consent__links-wrap { white-space: nowrap; }
    .cookie-consent__actions {
        display: flex;
        flex-wrap: nowrap;
        gap: 10px;
        align-items: center;
        flex-direction: row;
    }
    .cookie-consent__btn {
        padding: 10px 18px;
        border-radius: 8px;
        font-size: 0.875rem;
        font-weight: 500;
        cursor: pointer;
        border: none;
        transition: background 0.2s, color 0.2s;
    }
    .cookie-consent__btn--accept { background: #fff; color: #000; }
    .cookie-consent__btn--accept:hover { background: #e4e4e7; color: #000; }
    .cookie-consent__btn--reject {
        background: transparent;
        color: #a1a1aa;
        border: 1px solid #3f3f46;
    }
    .cookie-consent__btn--reject:hover { background: #27272a; color: #e4e4e7; }
    .cookie-consent__btn--settings {
        background: transparent;
        color: #a1a1aa;
    }
    .cookie-consent__btn--settings:hover { color: #fff; }
    .cookie-consent__custom { display: none; margin-top: 0; padding-top: 0; border-top: none; }
    .cookie-consent__custom.visible { display: block; }
    .cookie-consent__main.hidden { display: none; }
    .cookie-consent__row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 12px;
        font-size: 0.875rem;
    }
    .cookie-consent__row label { color: #d4d4d8; cursor: pointer; }
    .cookie-consent__row input { accent-color: #fff; }
    .cookie-consent__btn--save { background: #fff; color: #000; margin-top: 8px; }
    .cookie-consent__btn--save:hover { background: #e4e4e7; }
    .cookie-consent__btn--back {
        background: transparent;
        color: #a1a1aa;
        margin-right: 8px;
    }
    .cookie-consent__btn--back:hover { color: #fff; }
    @media (max-width: 640px) {
        .cookie-consent {
            left: 12px;
            right: 12px;
            bottom: 12px;
            max-width: none;
            width: auto;
            padding: 16px;
            border-radius: 10px;
        }
        .cookie-consent__text { font-size: 0.8125rem; }
        .cookie-consent__links-wrap { white-space: normal; }
        .cookie-consent__actions { flex-wrap: wrap; gap: 8px; }
        .cookie-consent__btn { padding: 10px 14px; font-size: 0.8125rem; }
    }
    @media (max-width: 380px) {
        .cookie-consent__actions { flex-direction: column; align-items: stretch; }
        .cookie-consent__btn { width: 100%; }
    }
    
  `;
    document.head.appendChild(style);
})();
Vue.component('mheader', {
    template: `

    <div id="appheader" :class="[showviewmb?'showviewmb':'', activelangV.toLowerCase()]">
        <div class="appheadermask" v-if="showview" @click="showview=false"> </div>

        <div class="appheaderpage" ref="page" style="display:none">
            <div class="head flex justify-between align-center">
                <div class="logo">
                    <a href="https://teyes.ru">
                        <img src="../../../../_shared/assets/cdn.teyes.cn/cc4/teyes.svg">
                    </a>
                </div>
                <div class="right align-center">
                    <div class="flex items">
                        <div :class="['item ca',active==index?'active':'',href.indexOf(item.url)>-1?'active':'']" v-for="item,index in activelang.items" @click="handleItem(item,index)">{{item.title}}</div>
                    </div>
                
                    <div :class="['close ca',showviewmb?'active':'out']" @click="handleMenu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div :class="['langText',tk==1?'tk':'']" @click="changTk" @mouseleave="changTk" @onmouseover="changTk">
                        <div class="t1">{{activelangV}}</div>
                        <div class="mk ">
                            <div class="mt" data-lang="ru" @click="handleChangeLang('ru')">RU</div>
                            <div class="mt" data-lang="en" @click="handleChangeLang('en')">EN</div>
                        </div>
                    </div>
                </div>
            </div>
            <div :class="['head-view justify-between   align-center',showview?'active':'']">
                
                <div class="type-view ca ">
                    <a class="flex   align-center pr" :href="activelang.cc4pro.href" target="_blank">
                        <div class=" ">
                            <div class="bg cc4pro"></div>
                        </div>
                        <div class="tips-img">
                            <div class="bg cc4prologo"></div>
                            <div class="tips2">
                                <span class='sm'>{{pricesFh}} <i>{{huilv(activelang.cc4pro.prices[0])}}<br><s>{{activelang.cc4pro.sm[0]}}</s></i> - <i>{{huilv(activelang.cc4pro.prices[1])}}<br><s>{{activelang.cc4pro.sm[1]}}</s></i>  </span>

                            </div>
                        </div>
                    </a>
                    <a class="flex  align-center" style="margin-top: 30px" :href="activelang.cc4pro123.href" target="_blank">
                        <div class="">
                            <div class="bg cc4pro123"></div>
                        </div>
                        <div class="tips-img v2" style="margin-top:-1vw">
                            <div class="bg cc4pro123logo"></div>
                            <div class="tips2">
                                <span class='sm'>{{pricesFh}} <i>{{huilv(activelang.cc4pro123.prices[0])}}<br><s>{{activelang.cc4pro123.sm[0]}}</s></i> - <i>{{huilv(activelang.cc4pro123.prices[1])}}<br><s>{{activelang.cc4pro123.sm[1]}}</s></i>  </span>
                            </div>
                        </div>
                        
                    </a>
                </div>
                <div class="type-view ca ">
                    <a class="flex   align-center pr" :href="activelang.cc4.href" target="_blank">
                        <div class=" ">
                            <div class="bg cc4"></div>
                        </div>
                        <div class="tips-img">
                            <div class="bg cc4logo"></div>
                            <div class="tips2">
                                <span class='sm'>{{pricesFh}} <i>{{huilv(activelang.cc4.prices[0])}}<br><s>{{activelang.cc4.sm[0]}}</s></i> - <i>{{huilv(activelang.cc4.prices[1])}}<br><s>{{activelang.cc4.sm[1]}}</s></i>  </span>

                            </div>
                        </div>
                    </a>
                    <a class="flex  align-center" style="margin-top: 30px" :href="activelang.cc4123.href" target="_blank">
                        <div class="">
                            <div class="bg cc4123"></div>
                        </div>
                        <div class="tips-img v2"  style="margin-top:-1vw">
                            <div class="bg cc4123logo"></div>
                            <div class="tips2">
                                <span class='sm'>{{pricesFh}} <i>{{huilv(activelang.cc4123.prices[0])}}<br><s>{{activelang.cc4123.sm[0]}}</s></i> - <i>{{huilv(activelang.cc4123.prices[1])}}<br><s>{{activelang.cc4123.sm[1]}}</s></i>  </span>

                            </div>
                        </div>
                        
                    </a>
                </div>
                <div class="type-view ca ">
                    <a class="flex align-center" :href="activelang.cc4l.href" target="_blank">
                        <div class="">
                            <div class="bg cc4l"></div>
                        </div>
                        <div class="tips-img">
                            <div class="bg cc4llogo"></div>
                            <div class="tips2">
                                <span class='sm'>{{pricesFh}} <i>{{huilv(activelang.cc4l.prices[0])}}<br><s>{{activelang.cc4l.sm[0]}}</s></i> - <i>{{huilv(activelang.cc4l.prices[1])}}<br><s>{{activelang.cc4l.sm[1]}}</s></i>  </span>
                            </div>
                        </div>
                        
                    </a>
                    <a class="flex  align-center" style="margin-top: 30px" :href="'javascript:;'"  >
                        <div class="">
                            <div class="bg cc4box"></div>
                        </div>
                        <div class="tips-img v2"  style="margin-top:-1vw">
                            <div class="bg cc4boxlogo"></div>
                            <div class="  tips2">
                                Coming Soon <br>
                            </div>
                        </div>
                        
                    </a>
                </div>
                <div class="type-view ca "> 
                    <div class="newhl">
                        <div v-if="activelangV=='Ru'">
                            {{activelang.l2}} <br><span></span> 
                            ¥ 1 = {{pricesFh1}} {{pricesHl}} 
                        </div>
                        <div v-else>
                            {{activelang.l2}}<br><span></span> 
                            {{pricesFh1}} 1 =  ¥ {{enhv}} 
                        </div>
                        
                        <div class="btn">
                            <span :class="pricesType==0?'active':''" @click="changhl(0)">¥</span>
                            <span :class="pricesType==1?'active':''"  @click="changhl(1)">{{pricesFh1}}</span>
                        </div>
                    </div>
                    <div class="spm" @click="handOpencs">
                        {{activelang.t4}}
                    </div>
                </div>
            </div>
            <div :class="['head-view justify-between   align-center',showview?'active':'']" style="margin-top:-20px">

                <div class="type-view ca ">
                    <a class="flex align-center "  :href="'javascript:;'">
                        <div class="">
                            <div class="bg qs"></div>
                        </div>
                        <div class="tips-img">
                            <div class="tips3" v-html='activelang.qs.title'></div>
                            <div class="tips2">
                                <span class='sm'>{{pricesFh}} <i>{{huilv(activelang.qs.prices[0])}}<br><s>{{activelang.qs.sm[0]}}</s></i>  - <i>{{huilv(activelang.qs.prices[1])}}<br><s>{{activelang.qs.sm[1]}}</s></i>  </span>
                            </div>
                        </div>
                        
                    </a>
                    <a class="flex align-center vst" :href="'javascript:;'" >
                        <div class="">
                            <div class="bg sz"></div>
                        </div>
                        <div class="tips-img">
                            <div class="tips3" v-html='activelang.sz.title'></div>
                            <div class="tips2">
                                <span>{{pricesFh}} {{huilv(activelang.sz.prices[0])}}  </span>
                            </div>
                        </div>
                        
                    </a>
                </div>

                <div class="type-view ca ">
                    <a class="flex align-center "  :href="'javascript:;'" >
                        <div class="">
                            <div class="bg hs"></div>
                        </div>
                        <div class="tips-img">
                            <div class="tips3" v-html='activelang.hs.title'></div>
                            <div class="tips2">
                                <span class='sm'>{{pricesFh}} <i>{{huilv(activelang.hs.prices[0])}}<br><s>{{activelang.hs.sm[0]}}</s></i>  - <i>{{huilv(activelang.hs.prices[1])}}<br><s>{{activelang.hs.sm[1]}}</s></i>  </span>

                            </div>
                        </div>
                        
                    </a>
                    <a class="flex align-center vst"  :href="activelang.nk.href" >
                        <div class="">
                            <div class="bg nk"></div>
                        </div>
                        <div class="tips-img">
                            <div class="tips3" v-html='activelang.nk.title'></div>
                            <div class="tips2">
                                <span>{{pricesFh}} {{huilv(activelang.nk.prices[0])}} </span>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="type-view ca ">
                    <a class="flex align-center " href="javascript:;" >
                        <div class="">
                            <div class="bg adas"></div>
                        </div>
                        <div class="tips-img">
                            <div class="tips3" v-html="activelang.adas.title"></div>
                            <div class="tips2">
                                <span>{{pricesFh}} {{huilv(activelang.adas.prices[0])}} </span>
                            </div>
                        </div>
                        
                    </a>
                    <a class="flex align-center vst" href="javascript:;" >
                        <div class="">
                            <div class="bg tpms"></div>
                        </div>
                        <div class="tips-img">
                            <div class="tips3" v-html='activelang.tpms.title'></div>
                            <div class="tips2">
                                <span>{{pricesFh}} {{huilv(activelang.tpms.prices[0])}}  </span>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="type-view ca ">
                    <a class="flex align-center " href="javascript:;" >
                        <div class="">
                            <div class="bg v360"></div>
                        </div>
                        <div class="tips-img">
                            <div class="tips3" v-html='activelang.v360.title'></div>
                            <div class="tips2">
                                <span>{{pricesFh}} {{huilv(activelang.v360.prices[0])}}  </span>
                            </div>
                        </div>
                        
                    </a>
                    <a class="flex align-center vst" href="javascript:;" >
                        <div class="">
                            <div class="bg obd"></div>
                        </div>
                        <div class="tips-img">
                            <div class="tips3" v-html='activelang.obd.title'></div>
                            <div class="tips2">
                                <span>{{pricesFh}} {{huilv(activelang.obd.prices[0])}}  </span>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="type-view ca ">
                   
                    <a class="flex align-center " href="javascript:;" >
                        <div class="">
                            <div class="bg tt"></div>
                        </div>
                        <div class="tips-img">
                            <div class="tips3" v-html='activelang.tt.title'></div>
                            <div class="tips2">
                                <span>{{pricesFh}} {{huilv(activelang.tt.prices[0])}}  </span>
                            </div>
                        </div>
                        
                    </a>
                </div>
                <div class="type-view ca ">
                   
                    <a class="flex align-center " :href="activelang.ahd.href" target="_blank" >
                        <div class="">
                            <div class="bg ahd"></div>
                        </div>
                        <div class="tips-img">
                            <div class="tips3" v-html='activelang.ahd.title'></div>
                            <div class="tips2">
                                <span>{{pricesFh}} {{huilv(activelang.ahd.prices[0])}}  </span>
                            </div>
                        </div>
                        
                    </a>
                </div>
                
            </div>
            <div :class="['head-view-mb',showviewmb?'active':'']">
                <div class="head-view-mb-inner">
                <div class="maksvs"></div>
                <div v-for="item,index in activelang.items" :key="index" :style="{ transitionDelay: (showviewmb ? (0.08 + index * 0.06) : 0) + 's' }" :class="['item ca',activemb==index?'active':'']" @click.stop="handleItemMb(item,index)">
                    <div class="flex flex-wrap justify-between" >
                        <span>{{item.title}}</span>
                        <span v-if="index==0 && showviewmbchild" style="font-size:14px" v-html=""></span>
                        <span class="op"></span>
                    </div>
                    <div v-if="index==0" :class="['top', showviewmbchild ? 'open' : '']">
                        <div class="newhl">
                           <div v-if="activelangV=='Ru'">
                               {{activelang.l2}}<br><span></span>
                                ¥ 1 = {{pricesFh1}} {{pricesHl}}
                            </div>
                            <div v-else>
                               {{activelang.l2}}<br><span></span> 
                                {{pricesFh1}} 1 = ¥{{enhv}}
                            </div>
                            <div class="btn">
                                <span :class="pricesType==0?'active':''"  @click.stop="changhl(0)">¥</span>
                                <span :class="pricesType==1?'active':''"  @click.stop="changhl(1)">{{pricesFh1}}</span>
                            </div>
                        </div>
                        <div class="vin">
                            <a class="  justify-between align-center" :href="activelang.cc4pro.href" target="_blank">
                                <div class="pr vg">
                                    <img src="../../../../_shared/assets/cdn.teyes.cn/cc4/gw/img/cc4.png" style="margin-top: 30px;">
                                </div>
                                <div class="vlg"><img src="../../../../_shared/assets/cdn.teyes.cn/cc4/gw/img/icc4.png"></div>
                                <div class=" tip2">
                                    <span class='sm'>{{pricesFh}} <i>{{huilv(activelang.cc4pro.prices[0])}}<br><s>{{activelang.cc4pro.sm[0]}}</s></i>  - <i>{{huilv(activelang.cc4pro.prices[1])}}<br><s>{{activelang.cc4pro.sm[1]}}</s></i>  </span>
                                </div>
                            </a>
                            <a class="  justify-between align-center" :href="activelang.cc4.href" target="_blank">
                                <div class="vg"><img src="../../../../_shared/assets/cdn.teyes.cn/cc4/gw/img/ncc4.png" style="margin-top: 30px;"></div>
                                <div class="vlg"><img src="../../../../_shared/assets/cdn.teyes.cn/cc4/gw/img/incc4.png"  style="width:40px"></div>
                                <div class="tip2 ">
                                    <span class='sm'>{{pricesFh}} <i>{{huilv(activelang.cc4.prices[0])}}<br><s>{{activelang.cc4.sm[0]}}</s></i>  - <i>{{huilv(activelang.cc4.prices[1])}}<br><s>{{activelang.cc4.sm[1]}}</s></i>  </span>
                                </div>
                            </a>
                            <a class=" justify-between align-center"  :href="activelang.cc4l.href" target="_blank">
                                <div class="vg"><img src="../../../../_shared/assets/cdn.teyes.cn/cc4/gw/img/cc4l.png" style="margin-top: 30px;"></div>
                                <div class="vlg"><img src="../../../../_shared/assets/cdn.teyes.cn/cc4/gw/img/icc4l.png" style="width:40px"></div>
                                <div class=" tip2">
                                    <span class='sm'>{{pricesFh}} <i>{{huilv(activelang.cc4l.prices[0])}}<br><s>{{activelang.cc4l.sm[0]}}</s></i>  - <i>{{huilv(activelang.cc4l.prices[1])}}<br><s>{{activelang.cc4l.sm[1]}}</s></i>  </span>
                                </div>
                            </a>
                            <a class="justify-between align-center" :href="activelang.cc4pro123.href" target="_blank">
                                <div class="vg"><img src="../../../../_shared/assets/cdn.teyes.cn/cc4/7/banner/CC4-12.3.png" style="margin-top: 30px;"></div>
                                <div class="vlg"><img src="../../../../_shared/assets/cdn.teyes.cn/cc4/7/banner/CC4-Pro-12.3 logo.png" style="width:70px"></div>
                                <div class=" tip2">
                                    <span class='sm'>{{pricesFh}} <i>{{huilv(activelang.cc4pro123.prices[0])}}<br><s>{{activelang.cc4pro123.sm[0]}}</s></i>  - <i>{{huilv(activelang.cc4pro123.prices[1])}}<br><s>{{activelang.cc4pro123.sm[1]}}</s></i>  </span>
                                    
                                </div>
                            </a>
                            <a class=" justify-between align-center" :href="activelang.cc4123.href" target="_blank">
                                <div class="vg"><img src="../../../../_shared/assets/cdn.teyes.cn/cc4/7/banner/CC4-12.3.png" style="margin-top: 30px;"></div>
                                <div class="vlg"><img src="../../../../_shared/assets/cdn.teyes.cn/cc4/7/banner/CC4-12.3-logo.png"></div>
                                <div class=" tip2">
                                    <span class='sm'>{{pricesFh}} <i>{{huilv(activelang.cc4123.prices[0])}}<br><s>{{activelang.cc4123.sm[0]}}</s></i>  - <i>{{huilv(activelang.cc4123.prices[1])}}<br><s>{{activelang.cc4123.sm[1]}}</s></i>  </span>
             
                                </div>
                            </a>
                            <a class=" justify-between align-center" :href="'javascript:;'" >
                                <div class="vg"><img src="../../../../_shared/assets/cdn.teyes.cn/cc4/7/banner/CC4-BOX.png" style="margin-top: 30px;"></div>
                                <div class="vlg"><img src="../../../../_shared/assets/cdn.teyes.cn/cc4/7/banner/CC4-BOX-logo.png" style="width:70px"></div>
                                <div class=" tip2">
                                    Coming Soon                                    
                                </div>
                            </a>

                            <div class="spm" @click="handOpencs">
                                {{activelang.t4}}
                            </div>


                            <a class="justify-between align-center" :href="'javascript:;'">
                                <div class="vg"><img src="../../../../_shared/assets/cdn.teyes.cn/cc4/gw/img/qs.png" style="margin-top: 30px;"></div>
                                <div class="tips4" v-html='  activelang.qs.title '></div>
                                <div class=" tip2">
                                    <span class='sm'>{{pricesFh}} <i>{{huilv(activelang.qs.prices[0])}}<br><s>{{activelang.qs.sm[0]}}</s></i>  - <i>{{huilv(activelang.qs.prices[1])}}<br><s>{{activelang.qs.sm[1]}}</s></i>  </span>
                                </div>
                            </a>
                            <a class=" justify-between align-center"  :href="'javascript:;'">
                                <div class="vg"><img src="../../../../_shared/assets/cdn.teyes.cn/cc4/gw/img/hs.png" style="margin-top: 30px;"></div>
                                <div class="tips4" v-html='activelang.hs.title'></div>
                                <div class=" tip2">
                                    <span class='sm'>{{pricesFh}} <i>{{huilv(activelang.hs.prices[0])}}<br><s>{{activelang.hs.sm[0]}}</s></i>  - <i>{{huilv(activelang.hs.prices[1])}}<br><s>{{activelang.hs.sm[1]}}</s></i>  </span>
                                </div>
                            </a>
                            <a class=" justify-between align-center" :href="'javascript:;'">
                                <div class="vg"><img src="../../../../_shared/assets/cdn.teyes.cn/cc4/gw/img/adas.png" style="margin-top: 30px;"></div>
                                <div class="tips4" style="margin-top:10px" v-html='activelang.adas.title'></div>
                                <div class=" tip2">{{pricesFh}} {{huilv(activelang.adas.prices[0])}} </div>
                            </a>
                            <a class=" justify-between align-center" :href="'javascript:;'">
                                <div class="vg"><img src="../../../../_shared/assets/cdn.teyes.cn/cc4/gw/img/360.png" style="margin-top: 30px;"></div>
                                <div class="tips4" v-html='activelang.v360.title'></div>
                                <div class=" tip2">{{pricesFh}} {{huilv(activelang.v360.prices[0])}} </div>
                            </a>
                            <a class=" justify-between align-center" :href="'javascript:;'">
                                <div class="vg"><img src="../../../../_shared/assets/cdn.teyes.cn/cc4/gw/img/sz.png" style="margin-top: 30px;"></div>
                                <div class="tips4" v-html='activelang.sz.title'></div>
                                <div class=" tip2">{{pricesFh}} {{huilv(activelang.sz.prices[0])}} </div>
                            </a>
                            <a class=" justify-between align-center" :href="activelang.nk.href">
                                <div class="vg"><img src="../../../../_shared/assets/cdn.teyes.cn/cc4/gw/img/nk.png" style="margin-top: 30px;"></div>
                                <div class="tips4" v-html='activelang.nk.title'></div>
                                <div class=" tip2">{{pricesFh}} {{huilv(activelang.nk.prices[0])}} </div>
                            </a>
                            <a class="justify-between align-center"  :href="'javascript:;'">
                                <div class="vg"><img src="../../../../_shared/assets/cdn.teyes.cn/cc4/gw/img/ty.png" style="margin-top: 30px;"></div>
                                <div class="tips4" v-html='activelang.tpms.title'></div>
                                <div class=" tip2">{{pricesFh}} {{huilv(activelang.tpms.prices[0])}} </div>
                            </a>
                            <a class=" justify-between align-center" :href="'javascript:;'">
                                <div class="vg"><img src="../../../../_shared/assets/cdn.teyes.cn/cc4/gw/img/obd.png" style="margin-top: 30px;"></div>
                                <div class="tips4" v-html="activelang.obd.title"></div>
                                <div class=" tip2">{{pricesFh}} {{huilv(activelang.obd.prices[0])}} </div>
                            </a>
                            <a class=" justify-between align-center"  :href="'javascript:;'" >
                                <div class="vg"><img src="../../../../_shared/assets/cdn.teyes.cn/cc4/gw/img/tt.png" style="margin-top: 30px;"></div>
                                <div class="tips4" v-html='activelang.tt.title'></div>
                                <div class=" tip2">{{pricesFh}} {{huilv(activelang.tt.prices[0])}} </div>
                            </a>
                            <a class=" justify-between align-center"  :href="activelang.ahd.href" target="_blank" >
                                <div class="vg"><img src="../../../../_shared/assets/cdn.teyes.cn/cc4/box/mb.png" style="margin-top: 30px;"></div>
                                <div class="tips4" v-html='activelang.ahd.title'></div>
                                <div class=" tip2">{{pricesFh}} {{huilv(activelang.ahd.prices[0])}} </div>
                            </a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  `,
    props: {
        title: {
            type: String,
            default: '默认标题'
        },
        lg:String
    },
    data() {
        return {
            tk: 0,
            activelang: {},
            ismobile: true,
            active: -1,
            activelangV:'',
            activemb: -1,
            showview: false,
            showviewmb: false,
            showviewmbchild: false,
            href: window.location.href,
            pricesFh: '₽',
            pricesFh1: '₽',
            pricesType: 1,
            pricesDate: '',
            pricesHl: '',
            hllist: {
                prices: []
            },
            enhv: '',
            lang: {
                zh: {
                    items: [
                        { title: '机型' },
                        { title: '官方店铺', url: 'https://teyes.aliexpress.ru/' },
                        { title: '合作', url: 'https://teyes.cn/o2o/' },
                        { title: '新闻', url: 'https://teyes.cn/news/' },
                        // { title: 'YouTuBe', url: 'https://www.youtube.com/channel/UCGeBgxLV9YXBrR7bUGCeHcQ/' },
                        { title: '真伪', url: 'true' }
                    ],
                    x1: { href: 'https://teyes.cn/x1', prices: [1470] },
                    sprop: { href: 'https://teyes.cn/sprop', prices: [1635, 2180] },
                    tpro2: { href: 'https://teyes.cn/tpro2', prices: [2060, 2410] },
                    cc2p: { href: 'https://teyes.cn/cc2p', prices: [1800, 2420] },

                    cc3: { href: 'https://teyes.cn/cc32k', prices: [2019, 2553] },

                    lux: { href: 'https://teyes.cn/luxone', prices: [3588] },
                    cc3l: { href: '', prices: [1392, 1515] },
                    cc3lwifi: { href: '', prices: [1300] },
                    // cc4: { href: 'https://teyes.cn/cc4pro/', prices: [2749, 3059] },

                    cc4pro: { href: 'https://teyes.cn/cc4pro/', prices: [3948, 4996],sm:['8+128G','12+256G'] },
                    cc4pro123: { href: 'https://teyes.cn/cc4pro/', prices: [3948, 4996],sm:['8+128G','12+256G'] },
                    cc4: { href: 'https://teyes.'+(window.location.host.indexOf('cn')>-1?'ru':'ru')+'/cc4', prices: [2749, 3059],sm:['6+64G','8+128G'] },
                    cc4123: { href: 'https://teyes.'+(window.location.host.indexOf('cn')>-1?'ru':'ru')+'/cc4', prices: [2749, 3059],sm:['6+64G','8+128G'] },
                    cc4l: { href: 'https://teyes.ru/cc4l/', prices: [1568, 1838],sm:['4+64G','6+64G'] },
                    cc4box: { href: 'https://teyes.cn/box/', prices: [258],sm:['4+64G','6+64G'] },

                    qs: { title:'Передняя камера',  prices: [230, 280],sm:['AHD','Digital'] },
                    hs: { title:'Задняя камера', prices: [230, 280],sm:['AHD','Digital']  },
                    adas: {title:'Камера заднего вида <br>2 в 1 (360 + ADAS)',  prices: ['420'] },
                    v360: {title:'Камера 360°',  prices: ['1440'] },
                    sz: {title:'Внешний микрофон',  prices: ['180'] },
                    nk: {title:'Скрытый микрофон',  prices: ['200'],href:'https://teyes.cn/om902/en/index.html' },
                    tpms: {title:'TPMS',  prices: ['394'] },
                    obd: {title:'OBD 2',  prices: ['220'] },
                    tt: {title:'Система парковки ',  prices: ['1342'] },
                    ahd: { href: 'https://teyes.cn/ahd', title:'AHD раздельный <br> DVR-блок',  prices: ['258'] },

                    l1: '*建议零售价',
                    l2: '人民币汇率',
                    l3: '只能通过经销商',
                    t4: 'Specification Comparison',
                },
                ru: {
                    items: [
                        { title: 'Модель' },
                        { title: 'Магазин', url: 'https://teyes.aliexpress.ru/' },
                        { title: 'Сотрудничество', url: 'https://teyes.'+(window.location.host.indexOf('cn')>-1?'cn':'ru')+'/o2o/' },
                        { title: 'Новости', url: 'https://teyes.'+(window.location.host.indexOf('cn')>-1?'cn':'ru')+'/news/' },
                        // { title: 'YouTuBe', url: 'https://www.youtube.com/channel/UCGeBgxLV9YXBrR7bUGCeHcQ/' },
                        { title: 'Проверка', url: 'https://teyes.'+(window.location.host.indexOf('cn')>-1?'cn':'ru')+'/true/' }
                    ],
                    l1: '',
                    l2: 'Курс обмена',
                    l3: 'Только через дилеров',
                    t4: 'Сравнение параметров',
                    x1: { href: 'https://teyes.'+(window.location.host.indexOf('cn')>-1?'ru':'ru')+'/x1', prices: [1470] },
                    sprop: { href: 'https://teyes.'+(window.location.host.indexOf('cn')>-1?'ru':'ru')+'/sprop', prices: [1635, 2180] },
                    tpro2: { href: 'https://teyes.'+(window.location.host.indexOf('cn')>-1?'ru':'ru')+'/tpro2', prices: [1874, 2222],sm:['3+32G','4+64G'] },
                    cc2p: { href: 'https://teyes.'+(window.location.host.indexOf('cn')>-1?'ru':'ru')+'/cc2p', prices: [1800, 2420] },
                    
                    // cc3: { href: 'https://teyes.'+(window.location.host.indexOf('cn')>-1?'ru':'ru')+'/cc32k', prices: [2019, 2553],sm:['4+32G','6+128G'] },
                    
                    lux: { href: 'https://teyes.'+(window.location.host.indexOf('cn')>-1?'ru':'ru')+'/luxone', prices: [1922,2355],sm:['4+32G','6+128G'] },
                    // cc3l: { href: 'https://teyes.ru/cc3l/', prices: [1392, 1515],sm:['4+32G','4+64G'] },

                    cc3lwifi: { href: '', prices: [1300] },

                    cc4pro: { href: 'https://teyes.cn/cc4pro/', prices: [3948, 4996],sm:['8+128G','12+256G'] },
                    cc4pro123: { href: 'https://teyes.cn/cc4pro123/', prices: [4098, 5416],sm:['8+128G','12+256G'] },
                    cc4: { href: 'https://teyes.'+(window.location.host.indexOf('cn')>-1?'cn':'cn')+'/cc4', prices: [2799, 3109],sm:['6+64G','8+128G'] },
                    cc4123: { href: 'https://teyes.cn/cc4123', prices: [2799, 3109],sm:['6+64G','8+128G'] },
                    cc4l: { href: 'https://teyes.ru/cc4l/', prices: [1568, 1838],sm:['4+64G','6+64G'] },
                    cc4box: { href: 'https://teyes.cn/box/', prices: [258],sm:['4+64G','6+64G'] },

                    qs: { title:'Передняя камера',  prices: [230, 280],sm:['AHD','Digital'] },
                    hs: { title:'Задняя камера', prices: [230, 280],sm:['AHD','Digital']  },
                    adas: {title:'Камера заднего вида <br>2 в 1 (360 + ADAS)',  prices: ['420'] },
                    v360: {title:'Камера 360°',  prices: ['1440'] },
                    sz: {title:'Внешний микрофон',  prices: ['180'] },
                    nk: {title:'Скрытый микрофон',  prices: ['200'],href:'https://teyes.cn/om902/ru/index.html' },
                    tpms: {title:'TPMS',  prices: ['394'] },
                    obd: {title:'OBD 2',  prices: ['220'] },
                    tt: {title:'Система парковки ',  prices: ['1342'] },
                    ahd: { href: 'https://teyes.cn/ahd', title:'AHD раздельный <br> DVR-блок',  prices: ['258'] },

                },
                en: {
                    items: [
                        { title: 'Model' },
                        { title: 'Official Store', url: 'https://teyes.aliexpress.com/store/1101181466' },
                        { title: 'Cooperation', url: 'https://teyes.'+(window.location.host.indexOf('cn')>-1?'cn':'ru')+'/o2o/' },
                        { title: 'News', url: 'https://teyes.'+(window.location.host.indexOf('cn')>-1?'cn':'ru')+'/news/' },
                        // { title: 'About Teyes', url: 'https://www.youtube.com/channel/UCGeBgxLV9YXBrR7bUGCeHcQ/' },
                        { title: 'Authenticity Verification', url: 'https://teyes.'+(window.location.host.indexOf('cn')>-1?'cn':'ru')+'/true/' }
                    ],
                    l1: '',
                    l2: 'Exchange rate ',
                    l3: 'Only available through authorized dealers',
                    t4: 'Specification Comparison',
                    x1: { href: 'https://teyes.'+(window.location.host.indexOf('cn')>-1?'ru':'ru')+'/x1', prices: [1470] },
                    sprop: { href: 'https://teyes.'+(window.location.host.indexOf('cn')>-1?'ru':'ru')+'/sprop', prices: [1635, 2180] },
                    tpro2: { href: 'https://teyes.'+(window.location.host.indexOf('cn')>-1?'ru':'ru')+'/tpro2', prices: [1874, 2222],sm:['3+32G','4+64G'] },
                    cc2p: { href: 'https://teyes.'+(window.location.host.indexOf('cn')>-1?'ru':'ru')+'/cc2p', prices: [1800, 2420] },

                    // cc3: { href: 'https://teyes.'+(window.location.host.indexOf('cn')>-1?'ru':'ru')+'/cc32k', prices: [2019, 2553],sm:['4+32G','6+128G'] },
                    
                    lux: { href: 'https://teyes.'+(window.location.host.indexOf('cn')>-1?'ru':'ru')+'/luxone', prices: [1922,2355],sm:['4+32G','6+128G'] },
                    
                    // cc3l: { href: 'https://teyes.cn/cc3l/', prices: [1392, 1515],sm:['4+32G','4+64G'] },

                    cc3lwifi: { href: '', prices: [1300] },

                    cc4pro: { href: 'https://teyes.cn/cc4pro/', prices: [3948, 4996],sm:['8+128G','12+256G'] },
                    cc4pro123: { href: 'https://teyes.cn/cc4pro123', prices: [4098, 5416],sm:['8+128G','12+256G'] },
                    cc4: { href: 'https://teyes.'+(window.location.host.indexOf('cn')>-1?'cn':'cn')+'/cc4', prices: [2799, 3109],sm:['6+64G','8+128G'] },
                    cc4123: { href: 'https://teyes.cn/cc4123', prices: [2799, 3109],sm:['6+64G','8+128G'] },
                    cc4l: { href: 'https://teyes.cn/cc4l/', prices: [1568, 1838],sm:['4+64G','6+64G'] },
                    cc4box: { href: 'https://teyes.cn/box/', prices: [258],sm:['4+64G','6+64G'] },


                    qs: { title:'Front Camera',  prices: [230, 280],sm:['AHD','Digital'] },
                    hs: { title:'Rear Camera', prices: [230, 280] ,sm:['AHD','Digital'] },
                    adas: {title:'2-in-1 Rearview Camera <br>(360 + ADAS)',  prices: ['420'] },
                    v360: {title:'360° Panoramic <br>Camera',  prices: ['1440'] },
                    sz: {title:'Digital Microphone <br>(External)',  prices: ['180'] },
                    nk: {title:'Digital Microphone <br>(Hidden)',  prices: ['200'],href:'https://teyes.cn/om902/en/index.html' },
                    tpms: {title:'TPMS',  prices: ['394'] },
                    obd: {title:'OBD 2',  prices: ['220'] },
                    tt: {title:'Front And Rear <br>Parking Sensors ( 8 pcs )',  prices: ['1342'] },
                    ahd: { href: 'https://teyes.cn/ahd', title:'AHD DVR Box',  prices: ['258'] },
                },
                vi: {

                },
            }
        }

    },
    watch:{
        lg(data){
            if(data){
                this.handleChangeLang(data)
            }
        }
    },
    created: function() {
        
        


        var lang = (navigator.language || navigator.browserLanguage).toLowerCase();
        // if (lang.indexOf('zh') >= 0) {
        //     this.activelang = this.lang.zh
        //     this.activelangV = 'zh'
        // } else
        if (lang.indexOf('ru') >= 0 || lang.indexOf('uk') >= 0 || lang.indexOf('kk') >= 0 || lang.indexOf('be') >= 0) {
            this.activelang = this.lang.ru
            this.activelangV = 'Ru'
        } else if (lang.indexOf('vi') >= 0) {
            this.activelang = this.lang.en
            this.activelangV = 'En'
        } else if (lang.indexOf('zh') >= 0) {
            this.activelang = this.lang.zh
            this.activelangV = 'Zh'
        } else {
            this.activelang = this.lang.en
            this.activelangV = 'En'
        }
        if (window.localStorage['activelangV']) {
            if(this.lang[window.localStorage['activelangV'].toLowerCase()]){
                this.activelang = this.lang[window.localStorage['activelangV'].toLowerCase()]
                this.activelangV = window.localStorage['activelangV']
            }else{
                this.activelang = this.lang['en']
                this.activelangV = 'en'
            }
            
        } else {
            window.localStorage['activelangV'] = this.activelangV
            window.localStorage['lang'] = this.activelangV.toLowerCase()
            window.activelangV = this.activelangV
        }

        if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('teyes-lang-changed'));
        }

        this.changFh()

        this.ismobile = window.innerWidth < 750
        this.loadAndUseScript()

        // const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        // document.cookie = 'tz=' + encodeURIComponent(tz) + ';path=/;max-age=10';
        


        this.loadtitle()


    },
    computed: {

    },
    mounted: function() {
        var that = this
        this.$nextTick(function() {
            that.show = true
            that.load = true
            that.$refs.page.style.display = 'flex'
        })

        // this.hllist = window.hllist
        window.addEventListener("scroll", this.scrolling);
    },
    methods: {
        loadtitle(){
            for(var i=0;i<this.activelang.items.length;i++){
                if(window.location.href.indexOf(this.activelang.items[i].url)>-1){
                    document.title = 'Teyes '+ this.activelang.items[i].title
                }
            }
        },
        handOpencs(){
            if(window.location.host=='teyes.cn'){
                window.open('https://teyes.cn/parameter')
            }else{
                window.open('https://teyes.ru/parameter')
            }
        },
        async loadAndUseScript() {

            await this.loadScript('../../../../_shared/assets/cdn.teyes.cn/jquery.min.js');

            var that = this;

            $.ajax({
                url: '../../../../_shared/assets/cdn.teyes.cn/cc4/hl.json' + new Date().getTime(),
                type: 'GET',
                dataType: 'json',

                // 超时时间 5秒
                timeout: 50000,

                success: function(res) {

                    console.log(res);

                    that.hllist = {
                        timestamp: new Date().getTime(),
                        prices: res.data
                    };

                    console.log(that.hllist);

                    that.getInfo();
                },

                error: function(xhr, status, error) {

                    if (status === 'timeout') {
                        console.log('接口请求超时');
                    } else {
                        console.log('请求失败:', error);
                    }

                }
            });
        },
        loadScript(src) {
            return new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = src;
                script.onload = resolve;
                script.onerror = reject;
                document.head.appendChild(script);
            });
        },
        changFh() {
            if (this.activelangV == 'Ru') {
                this.pricesFh1 = '₽'
                this.pricesFh = '₽'
            } else {
                this.pricesFh1 = '$'
                this.pricesFh = '$'
            }
        },
        scrolling() {
            this.tk = 0
        },
        changTk() {
            this.showviewmb = false
            this.showview = false
            this.tk = this.tk == 0 ? 1 : 0
        },
        
        handleChangeLang(lang) {
            if (lang == 'ru') {
                this.activelang = this.lang.ru
                this.activelangV = 'Ru'
            } else {
                this.activelang = this.lang.en
                this.activelangV = 'En'
            }
            window.localStorage['activelangV'] = this.activelangV
            window.localStorage['lang'] = this.activelangV.toLowerCase()
            window.activelangV = this.activelangV

            if (this.$parent.changeLang) {
                this.$parent.changeLang(this.activelangV); // 不推荐，会破坏组件封装性
            }


            this.changFh()
            this.getInfo()
            this.loadtitle()
            if (typeof window !== 'undefined') {
                window.dispatchEvent(new CustomEvent('teyes-lang-changed'));
            }

        },
        changhl(type) {

            if (type == 0) {
                this.pricesFh = '¥'
            }
            if (type == 1) {

                if (this.activelangV == 'Ru') {

                    this.pricesFh = '₽'
                } else {

                    this.pricesFh = '$'
                }
            }
            this.pricesType = type
        },
        getInfo() {
            // var data = this.hllist.prices[this.hllist.prices.length-1];
            // var data = this.hllist.timestamp;
            var nS = this.hllist.timestamp;
            var day = new Date(parseInt(nS)).getDate()
            var mon = new Date(parseInt(nS)).getMonth() + 1
            day = day > 9 ? day : '0' + day
            mon = mon > 9 ? mon : '0' + mon
            this.pricesDate = day + '.' + mon
            console.log(this.activelangV)
            if (this.activelangV == 'Ru') {
                this.pricesHl = (this.hllist.prices.hl)
            } else {
                this.pricesHl = (this.hllist.prices.hlen)
            }
            this.enhv = (this.hllist.prices.hlen)

            // return new Date(parseInt(nS)).getDate()+'.'+(new Date(parseInt(nS)).getMonth()+1)+' '+new Date(parseInt(nS)).getYear(); 
        },
        huilv(price) {

            if (this.pricesType == 1) {
                // if(this.hllist.rates){

                // }
                if (this.activelangV == 'Ru') {
                    price = ((this.hllist.prices.hl) * price).toFixed(0).toLocaleString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                } else {
                    // var vrd = typeof dr!='undefined'?parseFloat(dr.Result[0].DisplayData.resultData.tplData.money2_num).toFixed(2):''
                    // price = ((vrd) * price).toFixed(0).toLocaleString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                    price = ((this.hllist.prices.hlen) * price).toFixed(0).toLocaleString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                
                }
            } else {
                price = price.toLocaleString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
            }
            return price
        },
        handleItem(item, index) {

            // this.active = index
            if (index == 0) {
                this.active = '-1'
                this.showview = !this.showview

            } else {
                console.log(item)
                // if(item.url=='/news'){
                //     alert('COMING SOON')
                //     return false
                // }
                window.open(item.url)
            }

        },
        handleMenu() {
            this.tk = 0
            this.showviewmb = !this.showviewmb
            if(!this.showviewmb){
                this.showviewmbchild = false
            }
        },
        handleItemMb(item, index) {

            if (this.activemb == index) {
                this.activemb = '-1'
            } else {
                this.activemb = index
            }

            if (index == 0) {
                this.showviewmbchild = !this.showviewmbchild
            } else {
                console.log(item.url)
                // if(item.url=='/news'){
                //     alert('COMING SOON')
                //     return false
                // }
                window.open(item.url)
            }
        }
    },

});

(function () {
    var STORAGE_KEY = 'cookie_consent';
    var PRIVACY_URL = 'privacy.html';
    if(window.location.origin.indexOf('teyes.ru')>-1){
        PRIVACY_URL = 'https://teyes.ru/'+PRIVACY_URL
    }else{
        PRIVACY_URL = 'https://teyes.cn/'+PRIVACY_URL
    }
    /** 不用 classList（部分内置浏览器 / 旧 WebView 上不可靠） */
    function ccGetClass(el) {
        if (!el) return '';
        var c = el.className;
        if (typeof c === 'string') return c;
        if (c && typeof c.baseVal === 'string') return c.baseVal;
        try {
            return el.getAttribute('class') || '';
        } catch (e) {
            return '';
        }
    }
    function ccSetClass(el, className) {
        if (!el) return;
        var s = (className || '').replace(/\s+/g, ' ').replace(/^\s+|\s+$/g, '');
        try {
            el.className = s;
        } catch (e1) {}
        try {
            if (el.setAttribute) el.setAttribute('class', s);
        } catch (e2) {}
    }
    function ccHasClass(el, name) {
        if (!el || !name) return false;
        return (' ' + ccGetClass(el) + ' ').indexOf(' ' + name + ' ') !== -1;
    }
    function ccAddClass(el, name) {
        if (!el || !name || ccHasClass(el, name)) return;
        ccSetClass(el, (ccGetClass(el) + ' ' + name).replace(/\s+/g, ' ').trim());
    }
    function ccRemoveClass(el, name) {
        if (!el || !name) return;
        var c = ccGetClass(el);
        var re = new RegExp('(^|\\s)' + name + '(\\s|$)', 'g');
        ccSetClass(el, c.replace(re, ' ').replace(/\s+/g, ' ').trim());
    }

    var i18n = {
        zh: {
            cookieTitle: '我们使用 Cookie',
            cookieDescIntro: '我们使用 Cookie 和类似技术以提供网站功能、分析流量并优化您的体验。您可以选择接受全部、仅必要 Cookie 或自定义偏好。详见 ',
            cookieDescAnd: ' 与 ',
            cookieDescEnd: '。',
            linkCookiePolicy: 'Cookie 政策',
            linkPrivacyPolicy: '隐私政策',
            btnAcceptAll: '接受全部',
            btnReject: '仅必要',
            btnCustom: '自定义',
            customTitle: '自定义 Cookie 偏好',
            optNecessary: '必要 Cookie（网站运行必需）',
            optAnalytics: '分析 Cookie',
            optMarketing: '营销 Cookie',
            btnBack: '返回',
            btnSave: '保存偏好'
        },
        ru: {
            cookieTitle: 'Мы используем cookie',
            cookieDescIntro: 'Мы используем cookie и аналогичные технологии для работы сайта, анализа трафика и улучшения вашего опыта. Вы можете принять все, только необходимые или настроить предпочтения. См. ',
            cookieDescAnd: ' и ',
            cookieDescEnd: '.',
            linkCookiePolicy: 'Политику cookie',
            linkPrivacyPolicy: 'Политику конфиденциальности',
            btnAcceptAll: 'Принять все',
            btnReject: 'Только необходимые',
            btnCustom: 'Настроить',
            customTitle: 'Настройка cookie',
            optNecessary: 'Необходимые cookie (для работы сайта)',
            optAnalytics: 'Аналитические cookie',
            optMarketing: 'Маркетинговые cookie',
            btnBack: 'Назад',
            btnSave: 'Сохранить'
        },
        en: {
            cookieTitle: 'We use cookies',
            cookieDescIntro: 'We use cookies and similar technologies to provide site functionality, analyse traffic and improve your experience. You can accept all, necessary only, or customise preferences. See our ',
            cookieDescAnd: ' and ',
            cookieDescEnd: '',
            linkCookiePolicy: 'Cookie Policy',
            linkPrivacyPolicy: 'Privacy Policy',
            btnAcceptAll: 'Accept all',
            btnReject: 'Necessary only',
            btnCustom: 'Customise',
            customTitle: 'Customise cookie preferences',
            optNecessary: 'Necessary cookies (required for the site)',
            optAnalytics: 'Analytics cookies',
            optMarketing: 'Marketing cookies',
            btnBack: 'Back',
            btnSave: 'Save preferences'
        }
    };

    function detectCookieLang() {
        try {
            var v = localStorage.getItem('activelangV');
            if (v) {
                v = v.toLowerCase();
                if (v === 'ru') return 'ru';
                if (v === 'zh') return 'zh';
                return 'en';
            }
        } catch (e) {}
        var lang = (navigator.language || navigator.browserLanguage || '').toLowerCase();
        if (lang.indexOf('ru') >= 0 || lang.indexOf('uk') >= 0 || lang.indexOf('kk') >= 0 || lang.indexOf('be') >= 0) return 'ru';
        if (lang.indexOf('zh') >= 0) return 'zh';
        return 'en';
    }

    function setConsentElLangAttrs(el, code) {
        if (!el || !code) return;
        try {
            if (el.setAttribute) el.setAttribute('data-lang', code);
        } catch (e) {}
        var langClass = 'cookie-consent--' + code;
        var hidden = ccHasClass(el, 'hidden') ? ' hidden' : '';
        ccSetClass(el, ('cookie-consent ' + langClass + hidden).replace(/\s+/g, ' ').trim());
    }

    function applyLanguage() {
        var code = detectCookieLang();
        if (!i18n[code]) code = 'en';
        var t = i18n[code];
        var consentEl = document.getElementById('cookieConsent');
        if (!consentEl) {
            applyLanguage._retry = (applyLanguage._retry || 0) + 1;
            if (applyLanguage._retry <= 40) {
                setTimeout(applyLanguage, 25);
            }
            return;
        }
        applyLanguage._retry = 0;
        setConsentElLangAttrs(consentEl, code);

        var cookieTitle = document.getElementById('cookieTitle');
        var cookieDescIntro = document.getElementById('cookieDescIntro');
        var cookieDescAnd = document.getElementById('cookieDescAnd');
        var cookieDescEnd = document.getElementById('cookieDescEnd');
        var linkCookiePolicy = document.getElementById('linkCookiePolicy');
        var linkPrivacyPolicy = document.getElementById('linkPrivacyPolicy');
        if (cookieTitle) cookieTitle.textContent = t.cookieTitle;
        if (cookieDescIntro) cookieDescIntro.textContent = t.cookieDescIntro;
        if (cookieDescAnd) cookieDescAnd.textContent = t.cookieDescAnd;
        if (cookieDescEnd) cookieDescEnd.textContent = t.cookieDescEnd;
        if (linkCookiePolicy) {
            linkCookiePolicy.textContent = t.linkCookiePolicy;
            linkCookiePolicy.href = PRIVACY_URL;
        }
        if (linkPrivacyPolicy) {
            linkPrivacyPolicy.textContent = t.linkPrivacyPolicy;
            linkPrivacyPolicy.href = PRIVACY_URL;
        }
        var btnAcceptAll = document.getElementById('btnAcceptAll');
        var btnRejectNonEssential = document.getElementById('btnRejectNonEssential');
        var btnSettings = document.getElementById('btnSettings');
        if (btnAcceptAll) btnAcceptAll.textContent = t.btnAcceptAll;
        if (btnRejectNonEssential) btnRejectNonEssential.textContent = t.btnReject;
        if (btnSettings) btnSettings.textContent = t.btnCustom;

        var customTitle = document.getElementById('customTitle');
        var labelNecessary = document.getElementById('labelNecessary');
        var labelAnalytics = document.getElementById('labelAnalytics');
        var labelMarketing = document.getElementById('labelMarketing');
        var btnCustomBack = document.getElementById('btnCustomBack');
        var btnCustomSave = document.getElementById('btnCustomSave');
        if (customTitle) customTitle.textContent = t.customTitle;
        if (labelNecessary) labelNecessary.textContent = t.optNecessary;
        if (labelAnalytics) labelAnalytics.textContent = t.optAnalytics;
        if (labelMarketing) labelMarketing.textContent = t.optMarketing;
        if (btnCustomBack) btnCustomBack.textContent = t.btnBack;
        if (btnCustomSave) btnCustomSave.textContent = t.btnSave;
    }

    function getStoredConsent() {
        try {
            return localStorage.getItem(STORAGE_KEY);
        } catch (e) {
            return null;
        }
    }

    function setConsent(value, customPrefs) {
        try {
            if (customPrefs) {
                localStorage.setItem(STORAGE_KEY, 'custom');
                localStorage.setItem(STORAGE_KEY + '_prefs', JSON.stringify(customPrefs));
            } else {
                localStorage.setItem(STORAGE_KEY, value);
            }
        } catch (e) {}
        var consentEl = document.getElementById('cookieConsent');
        if (consentEl) ccAddClass(consentEl, 'hidden');
    }

    function showConsent() {
        var consentEl = document.getElementById('cookieConsent');
        var mainEl = document.getElementById('cookieConsentMain');
        var customEl = document.getElementById('cookieConsentCustom');
        if (!consentEl) return;
        ccRemoveClass(consentEl, 'hidden');
        if (mainEl) ccRemoveClass(mainEl, 'hidden');
        if (customEl) ccRemoveClass(customEl, 'visible');
    }

    function showCustomPanel() {
        var mainEl = document.getElementById('cookieConsentMain');
        var customEl = document.getElementById('cookieConsentCustom');
        if (mainEl) ccAddClass(mainEl, 'hidden');
        if (customEl) ccAddClass(customEl, 'visible');
    }

    function hideCustomPanel() {
        var mainEl = document.getElementById('cookieConsentMain');
        var customEl = document.getElementById('cookieConsentCustom');
        if (mainEl) ccRemoveClass(mainEl, 'hidden');
        if (customEl) ccRemoveClass(customEl, 'visible');
    }

    function mount() {
        if (document.getElementById('cookieConsent')) return;
        var host = document.getElementById('appheader');
        if (!host) {
            mount._retry = (mount._retry || 0) + 1;
            if (mount._retry <= 120) {
                setTimeout(mount, 25);
                return;
            }
            host = document.body;
        } else {
            mount._retry = 0;
        }
        var wrap = document.createElement('div');
        wrap.innerHTML =
            '<div id="cookieConsent" class="cookie-consent" role="dialog" aria-labelledby="cookieTitle" aria-describedby="cookieDesc">' +
            '<div class="cookie-consent__main" id="cookieConsentMain">' +
            '<h2 id="cookieTitle" class="cookie-consent__title"></h2>' +
            '<p id="cookieDesc" class="cookie-consent__text">' +
            '<span id="cookieDescIntro"></span><span class="cookie-consent__links-wrap">' +
            '<a href="' + PRIVACY_URL + '" id="linkCookiePolicy"></a><span id="cookieDescAnd"></span>' +
            '<a href="' + PRIVACY_URL + '" id="linkPrivacyPolicy"></a><span id="cookieDescEnd"></span></span>' +
            '</p>' +
            '<div class="cookie-consent__actions">' +
            '<button type="button" class="cookie-consent__btn cookie-consent__btn--accept" id="btnAcceptAll"></button>' +
            '<button type="button" class="cookie-consent__btn cookie-consent__btn--reject" id="btnRejectNonEssential"></button>' +
            '<button type="button" class="cookie-consent__btn cookie-consent__btn--settings" id="btnSettings"></button>' +
            '</div></div>' +
            '<div class="cookie-consent__custom" id="cookieConsentCustom">' +
            '<h3 class="cookie-consent__title" id="customTitle"></h3>' +
            '<div class="cookie-consent__row"><label for="optNecessary" id="labelNecessary"></label><input type="checkbox" id="optNecessary" checked disabled></div>' +
            '<div class="cookie-consent__row"><label for="optAnalytics" id="labelAnalytics"></label><input type="checkbox" id="optAnalytics"></div>' +
            '<div class="cookie-consent__row"><label for="optMarketing" id="labelMarketing"></label><input type="checkbox" id="optMarketing"></div>' +
            '<div class="cookie-consent__actions">' +
            '<button type="button" class="cookie-consent__btn cookie-consent__btn--back" id="btnCustomBack"></button>' +
            '<button type="button" class="cookie-consent__btn cookie-consent__btn--save cookie-consent__btn--accept" id="btnCustomSave"></button>' +
            '</div></div></div>';
        host.appendChild(wrap.firstChild);

        var mounted = document.getElementById('cookieConsent');
        var langCode = detectCookieLang();
        if (!i18n[langCode]) langCode = 'en';
        if (mounted) setConsentElLangAttrs(mounted, langCode);

        var btnAccept = document.getElementById('btnAcceptAll');
        var btnReject = document.getElementById('btnRejectNonEssential');
        var btnSettings = document.getElementById('btnSettings');
        var btnCustomBack = document.getElementById('btnCustomBack');
        var btnCustomSave = document.getElementById('btnCustomSave');

        if (btnAccept) btnAccept.addEventListener('click', function () { setConsent('all'); });
        if (btnReject) btnReject.addEventListener('click', function () { setConsent('necessary'); });
        if (btnSettings) btnSettings.addEventListener('click', showCustomPanel);
        if (btnCustomBack) btnCustomBack.addEventListener('click', hideCustomPanel);
        if (btnCustomSave) {
            btnCustomSave.addEventListener('click', function () {
                var prefs = {
                    necessary: true,
                    analytics: document.getElementById('optAnalytics') && document.getElementById('optAnalytics').checked,
                    marketing: document.getElementById('optMarketing') && document.getElementById('optMarketing').checked
                };
                setConsent('custom', prefs);
            });
        }
    }

    function init() {
        mount();
        applyLanguage();
        if (getStoredConsent()) {
            var consentEl = document.getElementById('cookieConsent');
            if (consentEl) ccAddClass(consentEl, 'hidden');
        } else {
            showConsent();
        }
        setTimeout(applyLanguage, 0);
    }

    window.addEventListener('teyes-lang-changed', applyLanguage);

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();