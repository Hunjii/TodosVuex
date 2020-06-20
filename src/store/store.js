import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state :{
        todos:''
    },
    getters:{
        AllTodos : state => state.todos
    },
    actions:{
        async fetchData({ commit }){
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos');

            console.log(response.data);
            
            commit('setTodos', response.data);            
        },

        async filterData({ commit }, e){
            const limit = parseInt(e.target.options[e.target.options.selectedIndex].value);

            const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
            
            console.log(response.data);

            commit('setTodos', response.data );

        }
    },
    mutations:{
        setTodos: (state, todos) => state.todos = todos
    },
})