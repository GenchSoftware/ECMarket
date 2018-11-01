const fs = require('fs')

/**
 * 日志编写及文件落地
 * @param level 日志等级
 * @param origin 日志来源
 * @param data 日志内容
 */
exports.Log = (level, origin, data) => {
    var now = new Date();
    var timeNow = now.toLocaleString();
    console.log('[' + timeNow + '] 【' + level + '】 ' + origin + '：' + data)
}


/**
 * 日志等级设定
 * @param INFO 信息
 * @param DEBUG 测试
 * @param WARNING 警告
 * @param ERROR 错误
 */
exports.Level = {
    INFO: 'INFO',
    DEBUG: 'DEBUG',
    WARNING: 'WARNING',
    ERROR: 'ERROR'
}