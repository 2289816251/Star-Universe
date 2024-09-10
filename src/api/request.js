// 引入axios
import axios from 'axios'

let requests = axios.create({
    // baseURL:'http://127.0.0.1:8000',
    // baseURL:'http://114.115.252.184:8000',
    timeout:5000,
    // 设置请求头
    headers:{
        'Content-Type':'application/json;charset=utf-8',
        // 'Authorization':localStorage.getItem('token') || ''
    }
})

// 请求拦截器：在发请求之前处理一些失去
requests.interceptors.request.use((config) =>{
    // config：配置对象 对象里面有一个很重要的配置 header
    return config
})

// 响应拦截器
requests.interceptors.response.use((res) =>{
    // 响应成功的回调 服务器在返回相应数据的同时可以处理一些事情
    return res.data
},(error) =>{
    // 响应失败的回调
    // 打印请求失败的值
    console.log(error.message)
    return Promise.reject(new Error('faile'))
})

// 向外暴露
export default requests