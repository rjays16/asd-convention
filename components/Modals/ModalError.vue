<template>
    <div class="modal fade" id="mismatchModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <p>{{ msg }}</p>
                    <button type="button" class="btn" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: null,
        }
    },
    methods: {
        show(msg) {
            this.msg = msg;
            $('#mismatchModal').modal('show');
        },
    }
}
</script>

<style lang="scss" scoped>
.modal-body {
    text-align: center;
    background-color: #EDE9E9;
    padding: 30px;
    button {
        width: 100px;
        height: 30px;
        /* left: 558px; */
        top: 674px;
        background: #040C55;
        border-radius: 22px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        align-items: center;
        text-align: center;
        color: #FFFFFF;
    }
}
</style>