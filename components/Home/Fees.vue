<template>
    <section id="fees" class="mt-5 mb-4">
        <div class="container mb-4">
            <div class="row justify-content-start">
                <div class="col-lg-6 col-md-12">
                    <div class="title bg-030C4C corner-20px text-white p-3">
                        <h3 class="text-center text-md-start rajdhani-bold mb-0">
                            Registration Fees and Deadlines
                        </h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-10 col-md-12 d-inline-block">
                    <div class="table-responsive table-web">
                        <table class="table table-bordered">
                            <thead>
                                <tr class="text-center text-white bg-282A31F2 align-middle dmsans-bold">
                                    <th>
                                        <span class="text-uppercase">Categories</span>
                                    </th>
                                    <th>
                                        <span class="text-uppercase">Early Bird Rate</span><br>
                                        (until August 15, 2022)
                                    </th>
                                    <th>
                                        <span class="text-uppercase">STANDARD RATE</span><br>
                                        (From August 16, 2022 <br>
                                        to September 24, 2022)
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="text-center dmsans-regular">
                                    <td class="text-start dmsans-bold">ASD Member</td>
                                    <td>USD 100</td>
                                    <td>USD 150</td>
                                </tr>
                                <tr class="text-center dmsans-regular">
                                    <td class="text-start dmsans-bold">Non-ASD Member</td>
                                    <td>USD 200</td>
                                    <td>USD 250</td>
                                </tr>
                                <tr class="text-center dmsans-regular">
                                    <td class="text-start dmsans-bold">Resident/Fellow</td>
                                    <td>USD 50</td>
                                    <td>USD 100</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="table-responsive table-mobile">
                        <table class="table">
                            <thead>
                                <tr class="text-center text-uppercase align-middle dmsans-bold border-0">
                                    <th class="border-0">
                                        Categories
                                    </th>
                                    <th class="border-0">
                                        Early Bird Rate
                                    </th>
                                    <th class="border-0">
                                        Standard Rate
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="text-center dmsans-bold">
                                    <td class="text-start border-0 border-end border-dark">ASD Member</td>
                                    <td class="border-0 border-end border-dark">USD 100</td>
                                    <td class="border-0">USD 150</td>
                                </tr>
                                <tr class="text-center dmsans-bold">
                                    <td class="text-start border-0 border-end border-dark">Non-ASD Member</td>
                                    <td class="border-0 border-end border-dark">USD 200</td>
                                    <td class="border-0">USD 250</td>
                                </tr>
                                <tr class="text-center dmsans-bold">
                                    <td class="text-start border-0 border-end border-dark">Resident/Fellow</td>
                                    <td class="border-0 border-end border-dark">USD 50</td>
                                    <td class="border-0">USD 100</td>
                                </tr>
                                <tr class="text-center dmsans-regular fst-italic">
                                    <td class="border-0"></td>
                                    <td class="border-0">(Until August 15, 2022)</td>
                                    <td class="border-0">(From August 16, 2022 to September 24, 2022)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
#fees {
    .table {
        &-web {
            display: block;
        }
        &-mobile {
            display: none;
        }
    }
    @media only screen and (max-width: 767px) {
        .table {
            &-web {
                display: none;
            }
            &-mobile {
                display: block;
            }
        }
    }
}
</style>
