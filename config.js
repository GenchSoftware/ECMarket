// config.js
//
// 作者：李沐阳
// 本文件用于存放系统所需要的运行配置
// 注：本文件中的配置均为硬编码配置

exports.config = {


    // 项目名
    name: 'ECShop',

    // 硬编码秘钥
    secKey: 'v85W66kHKJPkEKQ4',

    // 硬编码向量
    secIV: '4564234321687341',

    // 数据库配置文件
    configFile: 'config.conf',

    // 加密方式
    encryptMethod: 'AES'
};
// 是否为调试环境
exports.debug = false;