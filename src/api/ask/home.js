import request from '../request'

// 获取分类数据数据
function getAWordFromTheHeart () {
    return request({
        method:'get',
        url:`/home/getAWordFromTheHeart`
    })
}

export default {
    getAWordFromTheHeart
}