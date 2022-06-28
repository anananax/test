import Mock from 'mockjs'
// 通过mock模拟请求数据
Mock.mock('/code', {
    // 请求状态为成功
    "status": "success",
    // 这里可以直接Mock一些数据
    "code": ".active {\n        background-color: rgb(207, 144, 117);\n}\n.row{\n        font-size: 14px;\n        border-bottom: 1px dashed #ccc;\n}\n.error-tips {\n        background-color: rgb(255, 242, 241); \n        width: 100%;\n        height: 60px;\n        font-size: 30px;\n        color: rgb(132, 23, 39);\n        font-weight: 600;\n}",
    // 这里是需要高亮的行，比如第1、3、5这三行进行高亮
    "err_line_number_list": [1, 3, 5, 6, 7, 11, 13]
})
