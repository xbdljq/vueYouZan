let url = {
    hotLists:'/index/hotLists'
}
//开发环境
let host = 'http://rap2api.taobao.org/app/mock/178287'
//生产环境


for(let key in url){
    if(url.hasOwnProperty(key)){
        url[key] = host + url[key]
    }
}

export default url