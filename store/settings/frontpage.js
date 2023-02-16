export const state = () => ({
});

export const getters = {
}

export const mutations = {
};

export const actions = {
    getBanner({}) {
        return new Promise((resolve, reject) => {
            this.$axios.get('/settings/front/banner')
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err.response.data.message)
            })
        })
    },
};