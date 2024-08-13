<template>
        <div class="footer">
        <div class="footer-container">
            <div class="logoAndSlogan" >
                <div>
                    <img src="./assets/img/navigate-logo.png" alt="" id="bottom-logo">
                </div>
                <div class="slogantext">
                    <p class="sloganCh">一起成长，一起更好</p>
                    <p class="sloganEn"> Grow Together,Better Together</p>
                </div>
            </div>
            <hr style="color: #e5e7eb;">                
            <div class="FocusUs">
                <div class="copy">
                    <div class="copytext">
                        <span>
                            <a href="#" class="bot-a">美团</a>
                        </span>
                        <span class="line">|</span>
                        <span>@2024 美团版权所有</span>
                        <span>
                            <a href="#" class="bot-a">京ICP备 10211739号</a>
                        </span>
                        <span>
                            <a href="#" class="bot-a"> 京公网安备 11000002002052</a>
                        </span>
                        <span class="line">|</span>
                        <span>
                            <a href="#" class="bot-a">隐私政策</a>
                        </span>
                        <span>招聘意见反馈:zhaopin@meituan.com</span>
                    </div>
                    <div class="focus">
                        <span>关注我们</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="js" name="Navigate">
</script>

<style>
    .footer{
        height: 329px;
        background-color: #f4f5f7;
    }

    .footer-container{
        width: 100%;
        height: 329px;
    }

    .logoAndSlogan{
        height: 241px;
        width: 1280px;
        display: flex;
        justify-content:space-around;
    }

    #bottom-logo{
        width: 287.5px;
        height: 60px;
        margin-top: 40px;
        margin-right: 500px;
    }

    .slogantext{
        padding-top: 50px;
    }

    .sloganCh{
        font-size: 30px;
    }
    .sloganEn{
        padding-top: 10px;
        font-weight: lighter;
    }

    .FocusUs{
        height: 88px;
        width: 1280px;
    }

    .copy{
        display: flex;
        justify-content: space-between;
    }

    .copytext{
        color: grey;
        font-size: 15px;
        margin-left: 10px;
    }

    .bot-a{
        text-decoration: none;
        color: grey;
    }
</style>