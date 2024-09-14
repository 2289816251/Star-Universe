import Mock from 'mockjs';
// 文心一言
import AWordFromTheHeart from "@/assets/Json/AWordFromTheHeart.json";
// 商品分类数据
import shopListInfo from "@/assets/Json/ProductCategoriesInfo.json";
// 商品数据
import shopInfo from "@/assets/Json/shopInfo.json";

// 获取文心一言
Mock.mock('/home/getAWordFromTheHeart', 'get', {
    code: 200,
    data: AWordFromTheHeart
});

// 获取商品分类数据
Mock.mock('/shop/getShopListInfo', 'get', {
    code: 200,
    data: shopListInfo
});

// 获取商品数据
Mock.mock('/shop/getShopInfo', 'get', (options) => {
    const { url, type, body } = { ...options }
    const classId = JSON.parse(body).params[0]
    if(classId){
        let data = shopInfo.filter(e=>e.classId===classId)
        return {
            code: 200,
            data
        }
    }else{
        return { code: 200, data: [] }
    }
});

// 封装一个从url中获取query参数的函数
// 比如从https://juejin.cn/user/4433690702123534?id=1&name=rocky中取出？后面的键值对
let getQuery = (url, name) => {
    // console.log(url, name);

    // 判断是否有query参数
    const index = url.indexOf("?");
    if (index !== -1) {
        // 截取？后面字符串再将其以&分隔成数组：['id=1', 'name=rocky']
        const queryStrArr = url.substr(index + 1).split("&");

        for (var i = 0; i < queryStrArr.length; i++) {
            // 再对数组的每一项以=进行分隔成数组：[id, 1],[name, rocky]
            const itemArr = queryStrArr[i].split("=");
            console.log(itemArr);

            if (itemArr[0] === name) {
                // 取出键名对应的键值
                return itemArr[1];
            }
        }
    }
    return null;
};