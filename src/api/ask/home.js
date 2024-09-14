import request from '../request'

// 获取文心一言
function getAWordFromTheHeart () {
    return request({
        method:'get',
        url:`/home/getAWordFromTheHeart`
    })
}

export default {
    getAWordFromTheHeart
}