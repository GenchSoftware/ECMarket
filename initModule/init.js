const fs = require('fs');
const log = require('../logsModule/logs');
const { ipcRenderer } = require('electron')

/**
 * 检查日志文件夹是否存在
 * 若存在则返回true，若不存在则尝试创建
 * 若创建失败则返回false，若创建成功则返回true
 * 
 * @returns 日志文件夹最终状态，若存在则返回true，若创建失败则返回false
 */
function checkLogDir() {
    fs.exists('logs', (exits) => {
        if (exits) {
            console.log('logs目录存在，继续下一步初始化');
            return true;
        } else {
            console.log('未发现logs目录，正在尝试创建');
            fs.mkdir('logs', function(err) {
                if (err) {
                    console.log(err);
                    return false;
                }
                console.log('logs目录创建完成，继续下一步初始化');
                return true;
            })
        }
    })
    return true;
}

exports.init = () => {
    if (!checkLogDir()) {
        console.log('send alert to main proc')
        console.log(ipcRenderer.sendSync('logdirErr', 'true'));
    }
}