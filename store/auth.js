import cookies from '~/node_modules/js-cookie';

export const state = () => ({
    token: null,
    role_id: null,
    user: {
        id: null,
        first_name: "",
        last_name: "",
        email: null,
        phone: null,
        role: null,
        street: null,
        town: null,
        city: null,
        state: null,
        zipcode: null,
        delegate: {
            id: null,
        },
    }
});

export const getters = {
    isLoggedIn: (state) => {
        return !!state.token;
    },
    user: (state) => {
        return state.user;
    },
    delegate: (state) => {
        return state.user.delegate;
    },
    delegateFullname: (state) => {
        return state.user ? state.user.first_name + " " + state.user.last_name : "";
    },
}

export const mutations = {
    SET_TOKEN(state, token) {
        state.token = token;
    },
    REMOVE_TOKEN(state) {
        state.token = null;
    },
    SET_DELEGATE_DATA(state, data) {
        state.user = data;
    },
    REMOVE_DELEGATE_DATA(state) {
        state.user = null
    },
}

export const actions = {
    async check({ dispatch, commit }, { token }) {
        this.$axios.setToken(token, 'Bearer');
        const expiryTime = new Date(new Date().getTime() + 86400 * 1000);
        cookies.set('asdcon-x-access-token', token, {expires: expiryTime});
        commit('SET_TOKEN', token);
        const res = await this.$axios.get('/user');
        commit('SET_DELEGATE_DATA', res.data);
    },
    removeToken({commit}) {
        this.$axios.setToken(false);
        cookies.remove('asdcon-x-access-token');
        commit('REMOVE_TOKEN');
    },
    setToken({commit}, {token}) {
        this.$axios.setToken(token, 'Bearer');
        cookies.set('asdcon-x-access-token', token, { expires: new Date(new Date().getTime() + 86400 * 1000) });
        commit('SET_TOKEN', token);
    },
    login({ commit, state, dispatch }, data) {
        return new Promise((resolve, reject) => {
            this.$axios.post('/login', data)
            .then(res => {
                let token = res.data.token;
                dispatch('setToken', {token});
                commit('REMOVE_DELEGATE_DATA');
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
        })
    },
    loginWithToken({ dispatch }, token) {
        dispatch('check', {token});
    },
    logout({ commit }) {
        return new Promise((resolve, reject) => {
            this.$axios.post('/logout')
            .then(res => {
                cookies.remove('asdcon-x-access-token');
                commit('REMOVE_TOKEN');
                commit('REMOVE_DELEGATE_DATA');
                this.$axios.setToken(false);
                resolve(res)
            })
            .catch(err => {
                cookies.remove('asdcon-x-access-token');
                commit('REMOVE_TOKEN');
                this.$axios.setToken(false);
                reject(err)
            })
        })
    },
    getUser({}) {
        return new Promise((resolve, reject) => {
            this.$axios.get('/user')
            .then(res => { 
                resolve(res)
            })
            .catch(err =>{
                reject(err)
            })
        })
    },
    update({}, data) {
        return new Promise((resolve, reject) => {
            this.$axios.post('/user', data)
            .then(res => { 
                resolve(res)
            })
            .catch(err =>{
                reject(err)
            })
        })
    },
    updatePassword({}, data) {
        return new Promise((resolve, reject) => {
            this.$axios.post('/user/password', data)
            .then(res => { 
                resolve(res)
            })
            .catch(err =>{
                reject(err)
            })
        })
    },
    updateImage({}, data) {
        return new Promise((resolve, reject) => {
            this.$axios.post('/user/image', data)
            .then(res => { 
                resolve(res)
            })
            .catch(err =>{
                reject(err)
            })
        })
    },
    register({}, data) {
        return new Promise((resolve, reject) =>{
            this.$axios.post('/register', data)
            .then(res =>{
                resolve(res)
            })
            .catch(err =>{
                reject(err)
            })
        })
    },
    sendPasswordResetRequest({}, data) {
        return new Promise((resolve, reject) => {
            this.$axios.post('/password/reset-request', data)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err.response.data.message)
            })
        })
    }
}