export const state = () => ({
    orders: [],

    abstracts: [],
    abstractType: 1,
    authors: [],
    abstract_categories: [],
    abstract_study_design: [],
});

export const getters = {
    getOrders: (state) => {
        return state.orders;
    },
    getAbstract: (state) => {
        return state.abstracts;
    },
    getAbstractAuthor({}, id) {
      return state.authors;
    },
    getAbstractCategoryList: (state) => {
        return state.abstract_categories;
    },
    getAbstractStudyList: (state) => {
        return state.abstract_study_design;
    },
  }
;

export const mutations = {
    SET_ORDERS(state, data) {
        state.orders = data;
    },
    SET_ABSTRACTS(state, data) {
        state.abstracts = data;
    },
    SET_ABSTRACT_TYPE(state, data) {
        state.abstractType = data;
        console.log("Abstract type", state.abstractType)
    },
    SET_AUTHORS(state, data) {
        state.authors = data;
    },
    SET_ABSTRACT_CATEGORY(state, data) {
        state.abstract_categories = data;
    },
    SET_ABSTRACT_STUDY(state, data) {
        state.abstract_study_design = data;
    }
};

export const actions = {
    // Start of Orders
    getOrders({ commit }, member_id) {
        return new Promise((resolve, reject) => {
            this.$axios.get('/orders', {
				params: {
					member_id: member_id
				}
			})
            .then(res => {
                resolve(res)
                commit('SET_ORDERS', res.data);
            })
            .catch(err => {
                reject(err.response.data.message)
                commit('SET_ORDERS', []);
            })
        })
    },
    // End of Orders

    // Start of Ideapay
    createIdeapay({}, data) {
        return new Promise((resolve, reject) => {
            this.$axios.post('/member/ideapay', data)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err.response.data.message)
            })
        })
    },
    // End of Ideapay

    // Start of user functions
    update({}, data) {
        return new Promise((resolve, reject) => {
            this.$axios.post(`/member/${data['id']}/edit`, data)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err.response.data.message)
            })
        })
    },
    updateField({}, data) {
        return new Promise((resolve, reject) =>{
            this.$axios.post(`/member/${data['id']}/edit/field`, data)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err.response.data.message)
            })
        })
    },
    // End of user functions

    // Start of abstracts
    getAbstracts({ commit }, member_id){
        return new Promise((resolve, reject) => {
            this.$axios.get('/abstract', {
                params: {
                    member_id: member_id
                }
            })
            .then(res => {
                resolve(res)
                commit('SET_ABSTRACTS', res.data);
            })
            .catch(err => {
                reject(err.response.data.message)
                commit('SET_ABSTRACTS', []);
            })
        })
    },
    getAbstract({}, id){
        return new Promise((resolve, reject) => {
            this.$axios.get(`/abstract/${id}`)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
        })
    },
    createAbstract({}, data) {
        return new Promise((resolve, reject) => {
            this.$axios.post('/abstract', data)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
        })
    },
    getAbstractCategoryList({commit}){
        return new Promise((resolve, reject) => {
            this.$axios.get('/abstract/categories')
            .then(res => {
                resolve(res)
                commit('SET_ABSTRACT_CATEGORY', res.data);
            })
            .catch(err => {
                console.log(err);
                reject(err)
                commit('SET_ABSTRACT_CATEGORY', []);
            })
        })
    },
    getAbstractStudyList({commit}){
        return new Promise((resolve, reject) => {
            this.$axios.get('/abstract/study-designs')
            .then(res => {
                resolve(res)
                commit('SET_ABSTRACT_STUDY', res.data);
            })
            .catch(err => {
                console.log(err);
                reject(err)
                commit('SET_ABSTRACT_STUDY', []);
            })
        })
    },
    // End of abstracts
};
