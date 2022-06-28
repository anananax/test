import Mock from 'mockjs'

Mock.mock('/code', {
    // 请求状态为成功
    "status": "success",
    // 这里可以直接Mock一些数据
    "code": ".container{\n        border:1px solid #ff0;\n        color:#ddd;\n    }",
    // 这里是需要高亮的行，比如第1、3、5这三行进行高亮
    "err_line_number_list": [1, 3, 5, 6, 7]
})
