import {request} from "./request";

export function getDetail(iid) {
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}

export function getRecommend() {
    return request({
        url: '/recommend'
    })
}
//抽取商品基本信息
export class Goods {
    constructor(itemInfo, columns, services) {
        services.length >= 4 && services.splice(3) //删除多余数据
        this.title = itemInfo.title;//商品标题
        this.desc = itemInfo.desc;//
        this.newPrice = itemInfo.price;//价格
        this.oldPrice = itemInfo.oldPrice;//原价
        this.discount = itemInfo.discountDesc || '优惠价';//
        this.discountBgColor = itemInfo.discountBgColor;//折扣背景色
        this.columns = columns;
        this.services = services;
        this.nowPrice = itemInfo.highNowPrice;
    }
}

//店铺基本信息
export class Shop {
    constructor(shopInfo) {
        this.logo = shopInfo.shopLogo;//店铺logo
        this.name = shopInfo.name;//店铺名称
        this.fans = shopInfo.cFans;//店铺粉丝
        this.sells = shopInfo.cSells;//总销量
        this.score = shopInfo.score;//店铺评分
        this.goodsCount = shopInfo.cGoods//商品数量
    }
}
