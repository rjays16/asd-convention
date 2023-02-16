<template>
  <section id="abstract-form">
    <div class="container my-4">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-12">
          <div class="text-center">
            <h3 class="avenir-medium fw-bold">Abstract Form</h3>
          </div>
          <div class="opensans bs-1 py-4 px-5 corner-20px"
            :class="index > 0 ? 'mt-3' : ''"
            v-for="(author, index) in formAuthor"
            :key="index"
            :set="v = $v.formAuthor.$each[index]">
            <div class="px-0 position-relative" :class="index == 0 ? 'text-center' : ''">
              <p class="h4 avenir-medium fw-bold d-inline-block" v-if="index === 0">Submitting Author</p>
              <p class="h4 avenir-medium fw-bold d-inline-block" v-else>Author {{ index + 1 }}</p>

              <div class="position-absolute top-0 end-0">
                <button type="button" class="btn btn-blue btn-minus corner-circle d-inline-block bs-0 remove-author-btn" v-if="index > 0" @click="removeAuthor(index)">
                  <!-- <font-awesome-icon :icon="['fas', 'times']"/> -->
                  <p>&times;</p>
                </button>
              </div>
            </div>

            <div class="container px-0 mt-2">
              <div class="row">
                <div class="col-lg-6 col-md-12 mb-3">
                  <el-input placeholder="Last Name*" v-model="author.last_name" />
                  <div v-if="v.last_name.$dirty">
                    <div class="note-small color-FF2C2C" v-if="!v.last_name.required">Required</div>
                    <div class="note-small color-FF2C2C" v-if="!v.last_name.maxLength">Max of {{ v.last_name.$params.maxLength.max }} characters.</div>
                  </div>
                </div>
                  <div class="col-lg-6 col-md-12 mb-3">
                    <el-input placeholder="First Name*" v-model="author.first_name"/>
                    <div v-if="v.first_name.$dirty">
                      <div class="note-small color-FF2C2C" v-if="!v.first_name.required">Required</div>
                      <div class="note-small color-FF2C2C" v-if="!v.first_name.maxLength">Max of {{ v.first_name.$params.maxLength.max }} characters.</div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-12 mb-3">
                    <el-input placeholder="City*" v-model="author.city" />
                    <div v-if="v.city.$dirty">
                      <div class="note-small color-FF2C2C" v-if="!v.city.required">Required</div>
                      <div class="note-small color-FF2C2C" v-if="!v.city.maxLength">Max of {{ v.formAuthor.city.$params.maxLength.max }} characters.</div>
                    </div>
                  </div>
<!--                  <div class="col-lg-6 col-md-12 mb-3">-->
<!--                    <el-input placeholder="Country*" v-model="author.country " />-->
<!--                    <div v-if="v.country.$dirty">-->
<!--                      <div class="note-small color-FF2C2C" v-if="!v.country.required">Required</div>-->
<!--                      <div class="note-small color-FF2C2C" v-if="!v.country">Max of {{ v.country.$params.maxLength.max }} characters.</div>-->
<!--                    </div>-->
<!--                  </div>-->
                <div class="col-lg-6 col-md-12 mb-3">
                  <el-select placeholder="Country*" v-model="author.country" autocomplete="off" class="w-100">
                    <el-option
                      v-for="option in countries"
                      :key="option.id"
                      :label="option.name"
                      :value="option.name" />
                  </el-select>
                  <div v-if="v.country.$dirty">
                    <div class="note-small color-FF2C2C" v-if="!v.country.required">Required</div>
                      <div class="note-small color-FF2C2C" v-if="!v.country">Max of {{ v.country.$params.maxLength.max }} characters.</div>
                  </div>
                </div>
                 <div class="col-lg-6 col-md-12 mb-3" v-if="index === 0">
                   <el-input placeholder="Email*" v-model="author.email" />
                   <div v-if="v.email.$dirty">
                      <div class="note-small color-FF2C2C" v-if="!v.email.required">Required</div>
                     <div class="note-small color-FF2C2C" v-if="!v.email.maxLength">Max of {{ v.email.$params.maxLength.max }} characters.</div>
                   </div>
                 </div>
              </div>
            </div>

<!--            <div class="container px-0 mt-4">-->
<!--              <div class="row">-->
<!--                <div class="col-12 text-center">-->
<!--                    <h5 class="avenir-medium fw-bold">Affiliation</h5>-->
<!--                </div>-->
<!--                <div class="col-lg-6 col-md-12 mb-3">-->
<!--                  <el-input placeholder="Institution/University/Hospital*" v-model="author.institution" />-->
<!--                  <div v-if="v.institution.$dirty">-->
<!--                    <div class="note-small color-FF2C2C" v-if="!v.institution.required">Required</div>-->
<!--                    <div class="note-small color-FF2C2C" v-if="!v.institution.maxLength">Max of {{ v.institution.$params.maxLength.max }} characters.</div>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="col-lg-6 col-md-12 mb-3">-->
<!--                  <el-input placeholder="Department*" v-model="author.department" />-->
<!--                  <div v-if="v.department.$dirty">-->
<!--                    <div class="note-small color-FF2C2C" v-if="!v.department.required">Required</div>-->
<!--                    <div class="note-small color-FF2C2C" v-if="!v.department.maxLength">Max of {{ v.department.$params.maxLength.max }} characters.</div>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="col-lg-6 col-md-12 mb-3">-->
<!--                  <el-input placeholder="City*" v-model="author.affiliation_city" />-->
<!--                  <div v-if="v.affiliation_city.$dirty">-->
<!--                    <div class="note-small color-FF2C2C" v-if="!v.affiliation_city.required">Required</div>-->
<!--                    <div class="note-small color-FF2C2C" v-if="!v.affiliation_city.maxLength">Max of {{ v.affiliation_city.$params.maxLength.max }} characters.</div>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="col-lg-6 col-md-12 mb-3">-->
<!--                  <el-input placeholder="Country*" v-model="author.affiliation_country" />-->
<!--                  <div v-if="v.affiliation_country.$dirty">-->
<!--                    <div class="note-small color-FF2C2C" v-if="!v.affiliation_country.required">Required</div>-->
<!--                    <div class="note-small color-FF2C2C" v-if="!v.affiliation_country.maxLength">Max of {{ v.affiliation_country.$params.maxLength.max }} characters.</div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
          </div>
        </div>
        <div class="text-center my-4">
          <button class="btn btn-blue btn-add corner-circle d-inline-block bs-0 add-author-btn" @click="addAuthor(limit)">
            <!-- <font-awesome-icon :icon="['fas', 'plus']"/> -->
            <p>&plus;</p>
          </button>
          <h4 class="avenir-medium fw-bold pt-2 mb-0 d-inline-block">
            Add Author
          </h4>
        </div>

        <!-- <div class="opensans bs-1 py-4 px-5 corner-20px text-center mb-3">
          <div class="col-12 text-center">
            <h4 class="avenir-medium fw-bold">Abstract Category and Study Design</h4>
          </div>
          <div class="container px-0 mt-4">
            <div class="row">
              <div class="col-lg-6 col-md-12 mb-3">
                <el-input placeholder="Category" v-model="$v.formAbstract.abstract_category.$model" />
                <div v-if="$v.formAbstract.abstract_category.$dirty">
                  <div class="note-small color-FF2C2C" v-if="!$v.formAbstract.abstract_category.required">Required</div>
                  <div class="note-small color-FF2C2C" v-if="!$v.formAbstract.abstract_category.maxLength">Max of {{ $v.formAbstract.abstract_category.$params.maxLength.max }} characters.</div>
                </div>
              </div>
              <div class="col-lg-6 col-md-12 mb-3">
                <el-input placeholder="Study Design" v-model="$v.formAbstract.study_design.$model" />
                <div v-if="$v.formAbstract.study_design.$dirty">
                  <div class="note-small color-FF2C2C" v-if="!$v.formAbstract.study_design.required">Required</div>
                  <div class="note-small color-FF2C2C" v-if="!$v.formAbstract.study_design.maxLength">Max of {{ $v.formAbstract.study_design.$params.maxLength.max }} characters.</div>
                </div>
              </div>
            </div>
          </div>
        </div> -->

        <div class="opensans bs-1 py-4 px-5 corner-20px text-center mb-5">
          <div class="col-12 text-center">
            <h4 class="avenir-medium fw-bold">Abstract</h4>
          </div>
          <div class="container px-0 mt-4">
            <div class="row">
              <div class="col-12 mb-3">
                <el-input placeholder="Title*" v-model="$v.formAbstract.title.$model" />
                <div v-if="$v.formAbstract.title.$dirty">
                  <div class="note-small color-FF2C2C" v-if="!$v.formAbstract.title.required">Required</div>
                  <div class="note-small color-FF2C2C" v-if="!$v.formAbstract.title.maxLength">Max of {{ $v.formAbstract.title.$params.maxLength.max }} characters.</div>
                </div>
              </div>
<!--              <div class="col-12 mb-3">-->
<!--                <el-input placeholder="Author" v-model="list_of_authors" disabled />-->
<!--              </div>-->
              <div class="col-12 mb-5">
                <div id="words" class="mb-4"> <small>Words Left:</small> </div>
                  <textarea placeholder="Structured Abstract*" class="w-100 h-100" data-max-length="251" v-model="$v.formAbstract.structured_abstract.$model" :rows="4" v-on:keyup="countWords"/>
                <div v-if="$v.formAbstract.structured_abstract.$dirty">
                    <div class="note-small color-FF2C2C" v-if="!$v.formAbstract.structured_abstract.required">Required</div>
                  </div>
                </div>
              </div>
              <div class="col-12 mb-3">
                <label class="text mb-2 avenir-medium color-FF2C2C">Please indicate comma (,) for each words</label>
                <input data-max-keyword="5" v-model="$v.formAbstract.keywords.$model" placeholder="Keywords*" v-on:keyup="keywordLimit" class="w-100 h-100"/>
                <div v-if="$v.formAbstract.keywords.$dirty">
                  <div class="note-small color-FF2C2C" v-if="!$v.formAbstract.keywords.required">Required</div>
                  <div class="note-small color-FF2C2C" v-if="!$v.formAbstract.title.maxLength">Max of {{ $v.formAbstract.title.$params.maxLength.max }} characters.</div>
                </div>
              </div>
              <div class="col-12 mb-3">
                <el-radio
                  v-model="formAbstract.is_conflict_interest"
                  v-for="option in yesNone_COI"
                  :key="option.id"
                  :label="option.value"
                  :value="option.value"
                  class="blue-input">
                  {{ option.name }}
                </el-radio>
                <el-input v-if="formAbstract.is_conflict_interest === false || formAbstract.is_conflict_interest === null" disabled placeholder="Conflict of Interest*"/>
                <el-input v-else v-model="$v.formAbstract.conflict_interest.$model" placeholder="Conflict of Interest*" />
                <div v-if="$v.formAbstract.conflict_interest.$dirty">
                  <div class="note-small color-FF2C2C" v-if="!$v.formAbstract.conflict_interest.required">Required</div>
                  <div class="note-small color-FF2C2C" v-if="!$v.formAbstract.conflict_interest.maxLength">Max of {{ $v.formAbstract.conflict_interest.$params.maxLength.max }} characters.</div>
                </div>
              </div>
              <div class="col-12 mb-3">
                <el-radio
                  v-model="formAbstract.is_commercial_funding"
                  v-for="option in yesNone_CF"
                  :key="option.id"
                  :label="option.value"
                  :value="option.value"
                  class="blue-input">
                  {{option.name}}
                </el-radio>
                <el-input v-if="formAbstract.is_commercial_funding === false || formAbstract.is_commercial_funding === null" disabled placeholder="Commercial funding" />
                <el-input v-else v-model="$v.formAbstract.commercial_funding.$model" placeholder="Commercial funding" />
                <div v-if="$v.formAbstract.commercial_funding.$dirty">
                  <div class="note-small color-FF2C2C" v-if="!$v.formAbstract.commercial_funding.required">Required</div>
                  <div class="note-small color-FF2C2C" v-if="!$v.formAbstract.commercial_funding.maxLength">Max of {{ $v.formAbstract.commercial_funding.$params.maxLength.max }} characters.</div>
                </div>
              </div>
            </div>
          </div>
<!--          <div class="opensans text-start">-->
<!--             <p>The abstract has been presented in another conference prior to this submission</p> -->
<!--              <el-checkbox id="agree" class="blue-input" v-model="has_agree" size="large">-->
<!--                  I have fully read and agree with the <a href="/abstract-submission-guidelines" target="_blank">ASD Abstract Guidelines</a>-->
<!--              </el-checkbox>-->
<!--          </div>-->
        </div>
      </div>

    <div class="container my-5">
      <div class="row text-center">
        <div class="inline-block avenir-medium">
          <button class="btn btn-blue py-2 px-5 corner-22px fs-5 me-3" href="#" tabindex="-1" data-toggle="modal" @click="recheckInputs">
            Preview
          </button>
        </div>
      </div>
    </div>

     <ModalsAbstractPreview ref="AbstractPreviewModal"/>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import $ from 'jquery';
import { required, maxLength, email, sameAs , requiredIf } from 'vuelidate/lib/validators/';
import { disableButton } from "~/components/Helper/functions.js";
// import { VueEditor } from  "vue2-editor";
export default {
  // head: {
  //   script: [{src: "https://code.jquery.com/jquery-3.2.1.min.js",
  //     integrity: "sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=",
  //     crossorigin: "anonymous"
  //   }],
  // },
  props:['abstract_type'],
	data() {
		return {
		  limit: 1,
      yesNone_COI: this.$store.state.options.yesNone,
      yesNone_CF: this.$store.state.options.yesNone,
      formAuthor: [{
        last_name: null,
        first_name: null,
        city: null,
        country: null,
        email: null,

        institution: null,
        department: null,
        affiliation_city: null,
        affiliation_country: null,
      }],

      formAbstract: {
        abstract_category: null,
        study_design: null,

        title: null,
        structured_abstract: null, // Structured Abstract
        keywords: null,
        is_conflict_interest: false,
        conflict_interest: null,
        is_commercial_funding: false,
        commercial_funding: null,
        abstract_type: this.abstract_type,
        has_been_presented: false,
        prev_presentation_date: null,
      },
      // has_agree: false,
      yesNo: this.$store.state.options.yesNo,
    }
  },
  validations: {
    formAuthor: {
      $each: {
        last_name: {
          required,
          maxLength: maxLength(255)
        },
        first_name: {
          required,
          maxLength: maxLength(255)
        },
        city: {
          required,
          maxLength: maxLength(255)
        },
        country: {
          required,
          maxLength: maxLength(255)
        },
        email: {
          required: requiredIf(function (){
            return this.limit === 1 && this.limit <= 2;
          }),
          maxLength: maxLength(255),
        },
        institution: {
          maxLength: maxLength(255)
        },
        department: {
          maxLength: maxLength(255)
        },
        affiliation_city: {
          maxLength: maxLength(255)
        },
        affiliation_country: {
          maxLength: maxLength(255)
        },
      }
    },
    formAbstract: {
      title: {
        required,
        maxLength: maxLength(255)
      },
      structured_abstract: {
        required,
      },
      keywords: {
        required,
        maxLength: maxLength(255)
      },
      conflict_interest: {
        required: requiredIf(function() {
          return this.formAbstract.is_conflict_interest === true /* required if yes */
        }),
        maxLength: maxLength(255)
      },
      commercial_funding: {
        required: requiredIf(function() {
          return this.formAbstract.is_commercial_funding === true /* required if yes */
        }),
        maxLength: maxLength(255)
      },
    },
    prev_presentation_date: {
      required: requiredIf(function() {
        return this.formAbstract.has_been_presented
      }),
    },
  },
  computed: {
		...mapGetters({
      countries: 'options/getCountries',
    }),
	},
  methods: {
    addAuthor() {
      if(this.limit != 6){
        const limit = Number(this.limit);
        this.formAuthor = [...Array(limit).keys()].map(i => this.formAuthor[i] || {});
        this.limit++;
      } else {
        this.$message.error("Maximum of 5 authors only per abstract submission.")
      }
    },
    countWords: function() {
      $(function() {
        const counter_str = function() {
          $('[data-max-length]').each(function(){
            var field = $(this);
            var value = $(this).val();
            var strLimit = $(this).attr('data-max-length');
            var words = value.split(/[\s\.\?]+/);
            var words = words.slice(0,strLimit);
            var wordCount=value.split(/[\s\.\?]+/).length;
            if((strLimit - wordCount) >= 0){
              var left = strLimit - wordCount;
            }else{
              var left = 0;
            }
            $('small').html("Words left : " + left) ;
            if(wordCount > strLimit){
              field.val(words.join(" "));
            }
          })
        }
        $('[data-max-length]').each(function(){
          $(this).change(counter_str);
          $(this).keydown(counter_str);
          $(this).keypress(counter_str);
          $(this).keyup(counter_str);
          $(this).blur(counter_str);
          $(this).focus(counter_str);
        });
      });
    },
    keywordLimit: function() {
      $(function() {
        const counter_str = function() {
          $('[data-max-keyword]').each(function(){
            var field = $(this);
            var value = $(this).val();
            var strLimit = $(this).attr('data-max-keyword');
            var words = value.split(/[\s\.\?]+/);
            var words = words.slice(0,strLimit);
            var wordCount=value.split(/[\s\.\?]+/).length;
            if((strLimit - wordCount) >= 0){
              var left = strLimit - wordCount;
            }else{
              var left = 0;
            }
            $('keys').html("Words left : " + left) ;
            if(wordCount > strLimit){
              field.val(words.join(" "));
            }
          })
        }
        $('[data-max-keyword]').each(function(){
          $(this).change(counter_str);
          $(this).keydown(counter_str);
          $(this).keypress(counter_str);
          $(this).keyup(counter_str);
          $(this).blur(counter_str);
          $(this).focus(counter_str);
        });
      });
    },
    removeAuthor(index) {
      if(index > 0) {
        this.formAuthor.splice(index, 1);
      }
    },
    preview() {
      this.formAbstract.conflict_interest = this.formAbstract.is_conflict_interest ? this.formAbstract.conflict_interest : null
      this.formAbstract.commercial_funding = this.formAbstract.is_commercial_funding ? this.formAbstract.commercial_funding : null
      this.$refs.AbstractPreviewModal.preview(this.formAbstract, this.formAuthor);
      $('#abstract-preview').modal('show');
    },
		recheckInputs() {
			this.$v.$touch()
			if(this.$v.$invalid) {
        this.$message.error("Please fill in the required fields.")
      } else {
        // if(this.has_agree === false) {
        //   this.$message.error('Please check the agreement first');
        // } else {
          this.preview();
        // }
      }
		},
  },
  mounted() {
    this.$v.$reset
    this.$store.dispatch("options/getCountries") // Get the list of countries
  }
}
</script>

<style lang="scss" scoped>
#abstract-form {
  .btn-add {
    padding: 1px 7px;
  }
  .btn-minus {
    padding: 1px 7px;
  }
}
.add-author-btn {
  vertical-align: baseline;
}
.add-author-btn p {
  margin: 0;
  display: inline-block;
  font-weight: 700;
  font-size: 25px;
  line-height: 20px;
  padding: 2px 0 7px;
}
.remove-author-btn {
  vertical-align: baseline;
}
.remove-author-btn p {
  margin: 0;
  display: inline-block;
  font-weight: 700;
  font-size: 25px;
  line-height: 20px;
  padding: 2px 0 7px;
}
.el-checkbox {
  margin-bottom: 20px;
  display: flex;
  white-space: normal;
}
.el-input {
  &::v-deep input {
    border: 1px solid #333;
    font-size: 22px;
    padding: 25px;
  }
  &::v-deep input::placeholder {
    color: #888888;
  }
}
textarea{
  border: 1px solid #333;
  font-size: 22px;
  padding: 25px;
  color: #888888;
}
#words small{
  float: right;
}
.el-select::v-deep .el-input__inner{
  border: 1px solid #333;
  font-size: 22px;
  padding: 25px;
}
.el-select::v-deep .el-select__caret{
  color: #333;
}
.el-checkbox::v-deep .el-checkbox__inner{
  border: 1px solid #424242;
  margin-left: 50%;
}
input{
  border: 1px solid #333;
  font-size: 22px;
  padding: 15px;
  color: #888888;
}
#agree {
  ::v-deep {
    .el-checkbox__label {
      font-weight: bold;
      font-size: 18px;
      padding-left: 12px;
    }
  }
}
.text{
  float: left;
}
</style>
