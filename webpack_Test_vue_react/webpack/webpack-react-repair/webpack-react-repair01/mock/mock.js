//mock.js
const Mock = require("mockjs");
// const Random = Mock.Random // Mock.Random 是一个工具类，用于生成各种随机数据
const dataList = [];
//用于接受生成数据的数组
for (let i = 0; i < 50; i++) {
  // 可自定义生成的个数
  const template = {
    roleId: i,
    name: "admin" + i,
    remark: "超级管理员" + i,
    createBy: null,
    createTime: "2018-08-14T03:11:11.000+0000",
    lastUpdateBy: null,
    lastUpdateTime: null,
    delFlag: 0,
  };
  dataList.push(template);
}
Mock.mock(/role\/query/, "post", (params) => {
  //三个参数。第一个路径，第二个请求方式post/get，第三个回调，返回值
  var info = JSON.parse(params.body);
  var [index, size, total] = [
    info.params.pageIndex,
    info.params.pageSize,
    dataList.length,
  ];
  var len = total / size;
  var totalPages = len - parseInt(len) > 0 ? parseInt(len) + 1 : len;
  var newDataList = dataList.slice((index - 1) * size, index * size);
  return {
    code: "0",
    message: "success",
    data: {
      pageIndex: index,
      pageSize: size,
      content: newDataList,
      total: total,
      totalPages: totalPages,
    },
  };
});
