import 'css/common.css'
import './index.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'



let app = new Vue({
    el:'#app',
    data:{
        lists:url
    },
    created(){
        axios.get(url.hotLists,{
            pageNum:1,
            pageSize:6
        }).then(res =>{
            console.log(res) 
        })
    }
})
