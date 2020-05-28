import {request} from "./request"

//获取首页所有数据
export function getHomeMultiData() {
    return request({
        url: '/home/multidata'
    })
}
