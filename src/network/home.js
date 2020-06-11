import {request} from "./request"

//获取首页所有数据
export function getHomeMultiData() {
    return request({
        url: '/home/multidata'
    })
}
//获取商品列表数据
export function getHomeGoods(type,page) {
    return request({
        url: '/home/data',
        params: {
            type,page
        }
    })
}