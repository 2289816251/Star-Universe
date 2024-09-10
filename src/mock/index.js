import Mock from 'mockjs';
// 文心一言
import AWordFromTheHeart from "@/assets/Json/AWordFromTheHeart.json";

Mock.mock('/home/getAWordFromTheHeart', 'get', {
    code: 200,
    data: AWordFromTheHeart
});