<template>
  <section id="annualMeetingASD" class="0">
    <div class="container committees py-5">
      <div class="row justify-content-start mb-3">
        <div class="col-lg-8 col-md-12">
          <div class="title bg-030C4C corner-rounded text-white p-3">
            <h3 class="rajdhani-bold text-center rajdhani-bold mb-0">
              4th ASD Annual Meeting Organizing Committee
            </h3>
          </div>
        </div>
      </div>

      <div class="row py-5">
        <div class="col-12 mb-3" id="remove-corner-rounder">
          <div class="accordion-item committee card corner-rounded">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed bg-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse-board"
                aria-expanded="false"
                aria-controls="collapse-board"
              >
                <h5 class="rajdhani-bold mb-0 header">
                  Organizing Committee Members
                </h5>
              </button>
            </h2>
            <div id="collapse-board" class="accordion-collapse collapse sub">
              <div
                class="
                  accordion-body
                  p-0
                  d-inline-block
                  text-start
                  corner-circle
                  dmsans-regular
                "
              >
                <div class="container">
                  <div class="row">
                    <p class="dmsans-regular mb-1 fw-bold">OVERALL CHAIR</p>
                    <p class="dmsans-regular mb-3">
                      Arnelfa C. Paliza, MD, FPDS
                    </p>

                    <p class="dmsans-regular mb-1 fw-bold">SCIENTIFIC</p>
                    <p class="dmsans-regular mb-1">
                      Maria Jasmin J. Jamora, MD, FPDS - Chair
                    </p>
                    <p class="dmsans-regular mb-1">
                      Ma. Flordeliza Casintahan, MD, FPDS
                    </p>
                    <p class="dmsans-regular mb-1">Bryan Guevara, MD, FPDS</p>
                    <p class="dmsans-regular mb-3">
                      Maria Isabel Beatriz Puno-Gomez, MD, FPDS
                    </p>

                    <p class="dmsans-regular mb-1 fw-bold">WAYS & MEANS</p>
                    <p class="dmsans-regular mb-1">
                      Georgina C. Pastorfide, MD, FPDS - Chair
                    </p>
                    <p class="dmsans-regular mb-3">
                      Maria Franchesca S. Quinio, MD, FPDS
                    </p>

                    <p class="dmsans-regular mb-1 fw-bold">
                      PHYSICAL ARRANGEMENTS
                    </p>
                    <p class="dmsans-regular mb-1">
                      Andrea Marie B. Bernales- Mendoza, MD, DPDS - Chair
                    </p>
                    <p class="dmsans-regular mb-1">
                      Johaness F. Dayrit. MD, FPDS
                    </p>
                    <p class="dmsans-regular mb-3">
                      Erin Jane L. Tababa- Santos, MD, FPDS
                    </p>

                    <p class="dmsans-regular mb-1 fw-bold">
                      PUBLICITY & AWARDS
                    </p>
                    <p class="dmsans-regular mb-1">
                      Kara Melissa Torres-Culala, MD, FPDS - Chair
                    </p>
                    <p class="dmsans-regular mb-1">
                      Terese Monette Aquino-Agas, MD, FPDS
                    </p>
                    <p class="dmsans-regular mb-1">
                      Maria Isabel Beatriz Puno-Gomez, MD, FPDS
                    </p>
                    <p class="dmsans-regular mb-3">
                      Mary Grace Anne Calvarido, MD, DPDS
                    </p>

                    <p class="dmsans-regular mb-1 fw-bold">REGISTRATION</p>
                    <p class="dmsans-regular mb-1">
                      Mary Elizabeth Danga, MD, FPDS - Chair
                    </p>
                    <p class="dmsans-regular mb-3">
                      Tanya Perez-Chua, MD, FPDS
                    </p>

                    <p class="dmsans-regular mb-1 fw-bold">RESEARCH</p>
                    <p class="dmsans-regular mb-1">
                      Mara Therese P. Evangelista-Huber, MD, FPDS - Chair
                    </p>
                    <p class="dmsans-regular mb-1">
                      Eileen Liesl A. Cubillan, MD, FPDS
                    </p>
                    <p class="dmsans-regular mb-3">Riza R. Milante, MD, FPDS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#annualMeetingASD {
  .committees {
    .committee {
      border: 2px solid #686d95;
      box-shadow: 0px 6px 16px rgba(74, 58, 255, 0.19);
      .accordion-body p:last-of-type {
        margin-bottom: 20px;
      }
      .accordion-button::after {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23ffffff'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
        background-color: #030c4c;
        background-position: center;
        padding: 17px;
        justify-content: center;
        border-radius: 20px;
      }

      .header {
        color: #030c4c;
      }
      .accordion-button {
        box-shadow: none;
      }
    }
    .corner-rounded {
      border-radius: 20px !important;
    }

    #remove-corner-rounder .corner-rounded {
      border-radius: 0px !important;
    }
  }
}
</style>
