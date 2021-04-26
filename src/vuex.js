import Vue from 'vue' 
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        counter: 0
    },
    mutations: {
        diminui: state => state.counter--,
        aumenta: state => state.counter++
    },
    getters: {
        counter: state => state.counter
    },
    actions: {
        diminui : ({commit}) => commit('diminui'),
        aumenta : ({commit}) => {
            setTimeout(() => {
                commit('aumenta')
            }, 2000)
        }
    }
})

export {store}