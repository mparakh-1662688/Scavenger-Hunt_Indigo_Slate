import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

import { API_ENDPOINT } from '../config';

export default new Vuex.Store({
    
    state: {
        items: {},
        basicToken: false,
        init: true
    },
    mutations: {
        submitBasicToken: function( state, token ) {
            state.basicToken = `basic ${token}`;
        },
        updateList: function(state, list) {
            let singleObject = {};
            for (let item of list) {
              singleObject[item] = {};
              singleObject[item].name = item;
              singleObject[item].checked = false;
            }
            state.items = singleObject;
        },
        updateIsItem: function(state, data) {
          state.items[data.name].checked = data.isChecked;
        }

    },
    actions: {
        newImage: function( { commit, state }, obj ) { 
          return axios({
            method: 'POST',
            url: `${API_ENDPOINT}/api/send`,
            data: {'data': [obj.captures, obj.name] }
          }).then( res => {
            let data = {}
            data.isChecked = res.data;
            data.name = obj.name;
            commit( 'updateIsItem', data );
          }).catch(function (error) {
            console.log(error);
          })
        },
        getList: function( { commit, state } ) {
            return axios({
            method: 'GET',
            url: `${API_ENDPOINT}/api/getList`,
            headers: { authorization: state.basicToken }
          }).then( res => {
            commit( 'updateList', res.data );
          });
        },
    }
})
