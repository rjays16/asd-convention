<template>
    <section id="socialIcons" class="text-center">
        <div class="container">
            <div class="row">
                <div class="iconList">
                    <ul>
                        <li><a href="https://www.facebook.com/ASDMeeting2022" target="_blank"><img src="~/static/assets/images/facebook.png"></a></li>
                        <li><a href="https://twitter.com/ASDMeeting2022" target="_blank"><img src="~/static/assets/images/twitter.png"></a></li>
                        <li><a href="https://www.instagram.com/asdmeeting2022/" target="_blank"><img src="~/static/assets/images/instagram.png"></a></li>
                        <li class="asd"><a class="asd-link asd-link280" href="#">@ASDMeeting2022</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
#socialIcons{
    border: 0px;
    .iconList{
            padding: 2em;
                ul{
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    li{
                        list-style-type: none;
                        padding: 5px;
                        margin: 0 10px;

                        img{
                            width: 100%;
                        }
                        .asd-link{
                            text-decoration: none;
                            font-size: 2.5rem;
                            font-weight: 700;
                            color: #040c55;
                        }
                    }
                }
            }
        }
    @media only screen and (max-width: 280px) {
        #socialIcons{
            .iconList{
                .asd-link280{
                    font-size: .8em !important;
                }
            }
        }
    }
    @media only screen and (max-width: 767px) {
        #socialIcons{
            .iconList{
                padding: 0.5em 1em;
            ul{
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 0;

                li{
                    list-style-type: none;
                    padding: 0;
                    margin: 0 5px;

                    img{
                        width: 100%;
                    }

                    .asd-link{
                        text-decoration: none;
                        font-size: 1em;
                        font-weight: 700;
                        color: #040c55;
                    }
                }
            }
        }
     }
 }

@media only screen and (min-width: 768px) {
    .asd-link{
        font-size: 1.8em !important;
    }
}

@media only screen and (min-width: 1200px) {
    .asd-link{
        font-size: 2.5rem !important;
    }
}
</style>
