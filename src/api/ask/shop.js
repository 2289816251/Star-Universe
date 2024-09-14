import request from '../request'

// 获取商品分类数据
function getShopListInfo() {
    return request({
        method: 'get',
        url: `/shop/getShopListInfo`
    })
}

// 获取商品数据
function getShopInfo(classId) {
    return request({
        method: 'get',
        url: `/shop/getShopInfo`,
        data: { params: classId }
    })
}

export default {
    getShopListInfo,
    getShopInfo
}