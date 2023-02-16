<template>
    <footer class="p-3">
        <div class="container-fluid position-absolute">
            <div class="row">
                <div class="col-12 text-center inter-medium foot">
                    <p class="section-1">2022 All Rights Reserved</p>
                    <p class="section-2">© Asian Society of Dermatopathology | October 24-25, 2022</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
        }
    }
}
</script>

<style lang="scss" scoped>
footer {
    background-image: url('~/static/assets/images/footer.png') !important;
    color: white;
    height: 200px;
    width: 100%;
    position: relative;
    background-size: cover;
    background-position: inherit;
    border: 0px;
    .container-fluid {
        bottom: 15%;
    }
    .section {
        &-1, &-2 {
            display: inline-block;
            padding-bottom: 0px;
            font-size: 1rem;
            margin-bottom: 0px;
        }
    }
}

@media only screen and (max-width: 767px) {
    footer {
        background-position: center;
        .container-fluid {
            left: 0;

            p{
                font-size: 0.7rem;
            }
        }
        .foot{
            line-height: 1px;
        }
    }
}

@media only screen and (max-width: 1024px) {
    footer {
        .section {
            &-1 {
                margin-bottom: 20px;
            }
            &-1, &-2 {
                display: block;
            }
        }
    }
}
</style>