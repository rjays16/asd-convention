<template>
    <div class="modal fade" id="abstract-preview" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="abstract-guidelines">Abstract Preview</h5>
            <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close">
            </button>
          </div>
          <div class="modal-body text-justify">
            <p class="mb-1">
              <span class="fw-bold">Type of Presentation:</span>
              <span :data-type="form.abstract_type">{{ form.abstract_type == 2 ? "Free Paper Presentation" : "E-Poster" }}</span>
            </p>
            <p class="mb-4">
              <span class="fw-bold">Title:</span>
              <span>{{ form.title}}</span>
            </p>
            <p v-for="author, index in form.authors" :key="author.id">
              <span v-if="index === 0" class="fw-bold">Submitting author:</span>
              <span v-else class="fw-bold">Co-Author:</span>
              <span>{{ author.first_name }} {{ author.last_name }}</span>
              <span v-if="index === 0" class="fw-bold pl">Email: </span><span class="pl-3px" v-if="index === 0" >{{form.authors[0].email}}</span>
              <br/>
              <span class="fw-bold">Affiliation:</span> {{ author.country }}, {{ author.city }}
            </p>
            <div>
              <p class="mb-4">
                <span class="fw-bold">Introduction:</span>
                <span class="structured word-break break-all text-justify mb-4">{{form.structured_abstract}}</span>
              </p>
            </div>
            <p class="mb-4">
              <span class="fw-bold">Keywords:</span>
              <span>{{ form.keywords }}</span>
            </p>

            <p class="mb-1">
              <span class="fw-bold">Conflict of interest:</span>
              <span>{{ form.is_conflict_interest ? "YES - " + form.conflict_interest : "None" }}</span>
            </p>

            <p class="mb-1">
              <span class="fw-bold">Commercial funding:</span>
              <span>{{ form.is_commercial_funding ? "YES - " + form.commercial_funding : "None" }}</span>
            </p>

            <p class="mb-1">
              <span class="fw-bold">Date Submitted:</span>
              <span>{{ form.submission_date }}</span>
            </p>

            <div>
              <hr v-if="!is_preview">
              <div v-if="!is_preview" class="opensans text-start justify-content-center">
                <p>
                  <el-checkbox v-model="has_agree"></el-checkbox>
                  I have fully read and agree with the <a href="/abstract-submission-guidelines" target="_blank">ASD Abstract Guidelines</a>. In clicking SUBMIT, I declare that this abstract has not been previously presented at a major international meeting,
                  that the presentation is based on scientific and/or clinical methods that are ethical and valid, that all co-authors
                  have consented to being listed as authors and have contributed to, agree, and approve the abstract in its entirety.
                </p>
              </div>
            </div>
          </div>
          <div class="modal-footer avenir-bold justify-content-center">
            <button type="button" class="btn btn-blue corner-22px" data-dismiss="modal">
              {{ is_preview ? "Close" : "Edit" }}
            </button>
            <button type="button" class="btn btn-blue corner-22px btn-submit" @click="submit" v-if="!is_preview">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import $ from 'jquery';
import { disableButton } from "~/components/Helper/functions.js";
export default {
  name: "Preview",
  data(){
    return{
      form:{
        abstract_type: null,
        title: null,
        structured_abstract: null,
        keywords: null,
        conflict_interest: null,
        is_conflict_interest: null,
        is_commercial_funding:null,
        commercial_funding: null,
        submission_date: null,
        study_design: null,
        authors: [{
          first_name: null, last_name: null,
          city: null, country: null,
          email: null,
          institution: null, department: null,
          affiliation_city: null, affiliation_country: null
        }],
      },
      is_preview: false,
      has_agree: false,
    }
  },
  computed: {
    ...mapGetters({
      abstract: 'members/getAbstract',
      type_id: ''
    }),
  },
  methods: {
    preview(abstractData, formAuthor, abstract_type = null) {
      console.log("Abstract Data for Preview: ", abstractData)
      console.log("formAuthor: ", formAuthor)
      const moment = require('moment');
      this.form.title = abstractData.title
      this.form.commercial_funding = abstractData.commercial_funding
      this.form.keywords = abstractData.keywords
      this.form.conflict_interest = abstractData.conflict_interest
      this.form.is_conflict_interest = abstractData.is_conflict_interest
      this.form.is_commercial_funding = abstractData.is_commercial_funding
      this.form.structured_abstract = abstractData.structured_abstract
      this.form.submission_date = abstractData.prev_presentation_date
      this.form.abstract_type = abstractData.abstract_type
      this.form.submission_date = !this.is_preview ? moment(new Date()).format("MMMM DD, YYYY") : moment(new Date(abstractData.created_at)).format("MMMM DD, YYYY")
      this.form.authors = formAuthor;
    },
    submit() {
      if(this.has_agree === false) {
        this.$message.error('Please check the agreement first');
      } else {
        disableButton('.btn-send', true)
        this.$store.dispatch('members/createAbstract', this.form)
          .then(res => {
            $('#abstract-preview').modal('hide');
            this.close()
            disableButton('.btn-send', false)
            this.$router.push('/abstract-thank-you')
          })
          .catch(err => {
            this.$message.error(err)
            disableButton('.btn-send', false)
          })
      }
    },
    openModal(id, is_preview) {
      console.log("Abstract ID:", id, "Is preview?", is_preview)
      this.is_preview = is_preview
      this.$store.dispatch("members/getAbstract", id)
      .then((res) => {
        var data = res.data;
        console.log(data);
        // console.log("Abstract Data for Preview: ", res.data)
        this.preview(data, data.authors, data.abstract_type)
        $('#abstract-preview').modal('show');
      })
      .catch((err) => {
        this.$message.error(err.message)
      })
    },
    close() {
      $('#abstract-preview').modal('hide');
    }
  },
}
</script>

<style lang="scss" scoped>
.el-checkbox::v-deep .el-checkbox__inner{
  overflow-wrap: break-word;
}
#agree {
  &::v-deep {
    .el-checkbox__label {
      word-break: break-word;
      white-space: pre-line;
    }
  }
}
.word-break {
  &.break-all {
    word-break: break-all;
  }
}
.text-justify{
  text-align: justify;
}
</style>
