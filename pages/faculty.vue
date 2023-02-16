<template>
	<div>
        <HomeAbout />

        <div ref="facHeader" class="container mb-4 faculty-main-head">
            <div class="row justify-content-start">
                <div class="col-lg-6 col-md-12">
                    <div class="title bg-030C4C corner-rounded text-white p-3">
                        <h3 class="text-center text-md-start rajdhani-bold mb-0">
                            Plenary Session Speakers
                        </h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="container mb-4">
            <div class="row justify-content-start">
                <div class="col-md-3">
                    <div class="thumb-speaker" data-toggle="modal" data-target="#speaker1">
                        <div class="speaker-image">
                            <img src="~/static/assets/images/faculty/portrait-PhyuPAungMDPhDFCAP.jpg" />
                        </div>
                        <div class="speaker-name">
                            <p>Phyu P. Aung, MD</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="thumb-speaker" data-toggle="modal" data-target="#speaker2">
                        <div class="speaker-image">
                            <img src="~/static/assets/images/faculty/portrait-JagBhawanMD.jpg" />
                        </div>
                        <div class="speaker-name">
                            <p>Jag Bhawan, MD</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="thumb-speaker" data-toggle="modal" data-target="#speaker3">
                        <div class="speaker-image">
                            <img src="~/static/assets/images/faculty/portrait-StevenDBillingsMD.jpg" />
                        </div>
                        <div class="speaker-name">
                            <p>Steven D. Billings, MD</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="thumb-speaker" data-toggle="modal" data-target="#speaker4">
                        <div class="speaker-image">
                            <img src="~/static/assets/images/faculty/portrait-JohannesFDayritMDFPDSFDSP.jpg" />
                        </div>
                        <div class="speaker-name">
                            <p>Johannes F. Dayrit, MD</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="thumb-speaker" data-toggle="modal" data-target="#speaker5">
                        <div class="speaker-image">
                            <img src="~/static/assets/images/faculty/portrait-RosalieElenitsasMD.jpg" />
                        </div>
                        <div class="speaker-name">
                            <p>Rosalie Elenitsas, MD</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="thumb-speaker" data-toggle="modal" data-target="#speaker6">
                        <div class="speaker-image">
                            <img src="~/static/assets/images/faculty/portrait-DirkElstonMD.jpg" />
                        </div>
                        <div class="speaker-name">
                            <p>Dirk Elston, MD</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="thumb-speaker" data-toggle="modal" data-target="#speaker7">
                        <div class="speaker-image">
                            <img src="~/static/assets/images/faculty/portrait-AnjelaGalanMD.jpg" />
                        </div>
                        <div class="speaker-name">
                            <p>Anjela Galan, MD</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="thumb-speaker" data-toggle="modal" data-target="#speaker8">
                        <div class="speaker-image">
                            <img src="~/static/assets/images/faculty/portrait-JacquelineMJunkinsHopkinsMD.jpg" />
                        </div>
                        <div class="speaker-name">
                            <p>Jacqueline M. Junkins-Hopkins, MD</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="thumb-speaker" data-toggle="modal" data-target="#speaker9">
                        <div class="speaker-image">
                            <img src="~/static/assets/images/faculty/portrait-WernerKempfMD.jpg" />
                        </div>
                        <div class="speaker-name">
                            <p>Werner Kempf, MD</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="thumb-speaker" data-toggle="modal" data-target="#speaker10">
                        <div class="speaker-image">
                            <img src="~/static/assets/images/faculty/portrait-JohnMcGrathMD.jpg" />
                        </div>
                        <div class="speaker-name">
                            <p>John McGrath, MD</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="thumb-speaker" data-toggle="modal" data-target="#speaker11">
                        <div class="speaker-image">
                            <img src="~/static/assets/images/faculty/portrait-JenniferMcNiffMD.jpg" />
                        </div>
                        <div class="speaker-name">
                            <p>Jennifer McNiff, MD</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="thumb-speaker" data-toggle="modal" data-target="#speaker12">
                        <div class="speaker-image">
                            <img src="~/static/assets/images/faculty/portrait-KenNatsugaMDPhD.jpg" />
                        </div>
                        <div class="speaker-name">
                            <p>Ken Natsuga, MD</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="thumb-speaker" data-toggle="modal" data-target="#speaker13">
                        <div class="speaker-image">
                            <img src="~/static/assets/images/faculty/portrait-NopadonNoppakunMD.jpg" />
                        </div>
                        <div class="speaker-name">
                            <p>Nopadon Noppakun, MD</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="thumb-speaker" data-toggle="modal" data-target="#speaker14">
                        <div class="speaker-image">
                            <img src="~/static/assets/images/faculty/portrait-ThuyLPhungMDPhD.jpg" />
                        </div>
                        <div class="speaker-name">
                            <p>Thuy L. Phung, MD</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="thumb-speaker" data-toggle="modal" data-target="#speaker15">
                        <div class="speaker-image">
                            <img src="~/static/assets/images/faculty/portrait-BethSilvermanRubenMD.jpg" />
                        </div>
                        <div class="speaker-name">
                            <p>Beth Silverman Ruben, MD</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="thumb-speaker" data-toggle="modal" data-target="#speaker16">
                        <div class="speaker-image">
                            <img src="~/static/assets/images/faculty/portrait-ShangIanTeeMDMBBSFRCPFAMSDipDermpath.jpg" />
                        </div>
                        <div class="speaker-name">
                            <p>Shang-Ian Tee, MD</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="thumb-speaker" data-toggle="modal" data-target="#speaker17">
                        <div class="speaker-image">
                            <img src="~/static/assets/images/faculty/portrait-YuHungWuMD.jpg" />
                        </div>
                        <div class="speaker-name">
                            <p>Yu-Hung Wu, MD</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container mb-4 faculty-main-head">
            <div class="row justify-content-start">
                <div class="col-lg-6 col-md-12">
                    <div class="title bg-030C4C corner-rounded text-white p-3">
                        <h3 class="text-center text-md-start rajdhani-bold mb-0">
                            Case Discussion Speakers
                        </h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="container mb-4">
            <div class="row justify-content-start">          
                <div class="col-md-3">
                    <div class="thumb-speaker" data-toggle="modal" data-target="#speaker18">
                        <div class="speaker-image">
                            <img src="~/static/assets/images/faculty/portrait-IkmalHisyamBakrinMD.jpg" />
                        </div>
                        <div class="speaker-name">
                            <p>Ikmal Hisyam Bakrin, MD</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="thumb-speaker" data-toggle="modal" data-target="#speaker19">
                        <div class="speaker-image">
                            <img src="~/static/assets/images/faculty/portrait-ChiaHuiYi.jpg" />
                        </div>
                        <div class="speaker-name">
                            <p>Chia Hui Yi, MD</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="thumb-speaker" data-toggle="modal" data-target="#speaker20">
                        <div class="speaker-image">
                            <img src="~/static/assets/images/faculty/portrait-EileenLieslACubillanMDFPDSFDSP.jpg" />
                        </div>
                        <div class="speaker-name">
                            <p>Eileen Liesl A. Cubillan, MD</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="thumb-speaker" data-toggle="modal" data-target="#speaker21">
                        <div class="speaker-image">
                            <img src="~/static/assets/images/faculty/portrait-ChaoKaiHsuMDPhD.jpg" />
                        </div>
                        <div class="speaker-name">
                            <p>Chao-Kai Hsu, MD</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="thumb-speaker" data-toggle="modal" data-target="#speaker22">
                        <div class="speaker-image">
                            <img src="~/static/assets/images/faculty/portrait-AshaKubbaMD.jpg" />
                        </div>
                        <div class="speaker-name">
                            <p>Asha Kubba, MD</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="thumb-speaker" data-toggle="modal" data-target="#speaker23">
                        <div class="speaker-image">
                            <img src="~/static/assets/images/faculty/portrait-DongYounLeeMDPhD.jpg" />
                        </div>
                        <div class="speaker-name">
                            <p>Dong-Youn Lee, MD</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="thumb-speaker" data-toggle="modal" data-target="#speaker24">
                        <div class="speaker-image">
                            <img src="~/static/assets/images/faculty/portrait-SondangMHAemiliaPandjaitanSiraitMD.jpg" />
                        </div>
                        <div class="speaker-name">
                            <p>Sondang MH Aemilia Pandjaitan Sirait, MD</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="thumb-speaker" data-toggle="modal" data-target="#speaker25">
                        <div class="speaker-image">
                            <img src="~/static/assets/images/faculty/portrait-PoonnawisSudtikoonasethMD.jpg" />
                        </div>
                        <div class="speaker-name">
                            <p>Poonnawis Sudtikoonaseth, MD</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="thumb-speaker" data-toggle="modal" data-target="#speaker26">
                        <div class="speaker-image">
                            <img src="~/static/assets/images/faculty/portrait-DaisukeTsurutaMDPhD.jpg" />
                        </div>
                        <div class="speaker-name">
                            <p>Daisuke Tsuruta, MD</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="thumb-speaker" data-toggle="modal" data-target="#speaker27">
                        <div class="speaker-image">
                            <img src="~/static/assets/images/faculty/portrait-LeiWangMD.jpg" />
                        </div>
                        <div class="speaker-name">
                            <p>Lei Wang, MD</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="speaker1" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <img src="~/static/assets/images/faculty/PhyuPAungMDPhDFCAP.jpg" />
            </div>
        </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="speaker2" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <img src="~/static/assets/images/faculty/JagBhawanMD.jpg" />
            </div>
        </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="speaker3" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <img src="~/static/assets/images/faculty/StevenDBillingsMD.jpg" />
            </div>
        </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="speaker4" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <img src="~/static/assets/images/faculty/JohannesFDayritMDFPDSFDSP.jpg" />
            </div>
        </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="speaker5" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <img src="~/static/assets/images/faculty/RosalieElenitsasMD.jpg" />
            </div>
        </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="speaker6" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <img src="~/static/assets/images/faculty/DirkElstonMD.jpg" />
            </div>
        </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="speaker7" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <img src="~/static/assets/images/faculty/AnjelaGalanMD.jpg" />
            </div>
        </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="speaker8" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <img src="~/static/assets/images/faculty/JacquelineMJunkinsHopkinsMD.jpg" />
            </div>
        </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="speaker9" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <img src="~/static/assets/images/faculty/WernerKempfMD.jpg" />
            </div>
        </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="speaker10" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <img src="~/static/assets/images/faculty/JohnMcGrathMD.jpg" />
            </div>
        </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="speaker11" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <img src="~/static/assets/images/faculty/JenniferMcNiffMD.jpg" />
            </div>
        </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="speaker12" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <img src="~/static/assets/images/faculty/KenNatsugaMDPhD.jpg" />
            </div>
        </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="speaker13" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <img src="~/static/assets/images/faculty/NopadonNoppakunMD.jpg" />
            </div>
        </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="speaker14" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <img src="~/static/assets/images/faculty/ThuyLPhungMDPhD.jpg" />
            </div>
        </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="speaker15" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <img src="~/static/assets/images/faculty/BethSilvermanRubenMD.jpg" />
            </div>
        </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="speaker16" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <img src="~/static/assets/images/faculty/ShangIanTeeMDMBBSFRCPFAMSDipDermpath.jpg" />
            </div>
        </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="speaker17" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <img src="~/static/assets/images/faculty/YuHungWuMD.jpg" />
            </div>
        </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="speaker18" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <img src="~/static/assets/images/faculty/IkmalHisyamBakrinMD.jpg" />
            </div>
        </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="speaker19" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <img src="~/static/assets/images/faculty/ChiaHuiYiMBBSMRCPUK.jpg" />
            </div>
        </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="speaker20" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <img src="~/static/assets/images/faculty/EileenLieslACubillanMDFPDSFDSP.jpg" />
            </div>
        </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="speaker21" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <img src="~/static/assets/images/faculty/ChaoKaiHsuMDPhD.jpg" />
            </div>
        </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="speaker22" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <img src="~/static/assets/images/faculty/AshaKubbaMD.jpg" />
            </div>
        </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="speaker23" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <img src="~/static/assets/images/faculty/DongYounLeeMDPhD.jpg" />
            </div>
        </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="speaker24" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <img src="~/static/assets/images/faculty/SondangMHAemiliaPandjaitanSiraitMDSpKKKMPdKe.jpg" />
            </div>
        </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="speaker25" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <img src="~/static/assets/images/faculty/PoonnawisSudtikoonasethMD.jpg" />
            </div>
        </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="speaker26" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <img src="~/static/assets/images/faculty/DaisukeTsurutaMDPhD.jpg" />
            </div>
        </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="speaker27" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <img src="~/static/assets/images/faculty/LeiWangMD.jpg" />
            </div>
        </div>
        </div>

	</div>
</template>

<script>
export default {
	layout: "home",
	data() {
		return {};
	},
    methods: {
        scrollToHeader() {
            const facHeader = this.$refs.facHeader;

            if (facHeader) {
                // Use el.scrollIntoView() to instantly scroll to the element
                facHeader.scrollIntoView({behavior: 'smooth'});
            }
        }
    },
    mounted() {
        setTimeout(() => {
            this.scrollToHeader()
        }, 300)
    }
};
</script>
<style scoped>
    .faculty-main-head {
        padding-top: 70px;
    }
    .modal-dialog {
        max-width: 1200px;
    }
    button.close {
        position: absolute;
        top: -40px;
        right: 0;
        background: none;
        border: none;
        color: #fff;
        font-size: 26px;
    }
    .modal-content img {
        width: 100%;
        height: auto;
    }
    .thumb-speaker {
        width: 100%;
        /* min-height: 370px; */
        border: 1px solid #d4d4d4;
        position: relative;
        margin-bottom: 25px;
        cursor: pointer;
    }
    .speaker-image {
        width: 100%;
        height: 328px;
        position: relative;
        text-align: center;
        overflow: hidden;
    }
    .speaker-image img {
        height: auto;
        width: 100%;
        transition: all 0.3s ease;
    }
    .thumb-speaker:hover .speaker-image img {
        width: 102%;
    }
    .speaker-name {
        /* position: absolute;
        bottom: 0;
        left: 0; */
        width: 100%;
        padding: 20px 40px 20px 10px;
        text-align: center;
        background-color: #fff;
        position: relative;
    }
    .speaker-name:after {
        content: '\2807';
        font-size: 25px;
        position: absolute;
        right: 7px;
        top: 0;
        bottom: 0;
        margin: auto 0;
        width: 20px;
        height: 38px;
        color: #888888;
    }
    .thumb-speaker:hover .speaker-name:after {
        color: #000000;
    }
    .speaker-name p {
        font-size: 20px;
        margin: 0;
        font-family: 'Inter', sans-serif;
        text-transform: uppercase;
    }
    @media screen and (max-width: 1399px) {
        .speaker-image {
            height: 280px;
        }
    }
    @media screen and (max-width: 1199px) {
        .speaker-image {
            height: 230px;
        }
    }
    @media screen and (max-width: 991px) {
        .speaker-image {
            height: 166px;
        }
    }
    @media screen and (max-width: 767px) {
        .speaker-image {
            height: auto;
        }
    }
</style>