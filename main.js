const { app, BrowserWindow } = require('electron')
const { ipcMain } = require('electron')
const path = require('path')
const fs = require('fs')
const config = require('./config')
const aes = require('./secretModule/aesModule')

let main;

function initMainProcess() {
    // 创建初始窗口
    main = new BrowserWindow({ width: 800, height: 400, frame: false, icon: __dirname + '/static/img/icon.ico' });
    // 加载文件
    main.loadURL(path.join('file://', __dirname, '/index.html'));
    main.setOpacity(0.85)
    main.setMenu(null)
    main.setAlwaysOnTop(true)

    // 判断是否为调试环境
    if (config.debug) {
        main.webContents.openDevTools();
    }

    // 关闭事件
    main.on('closed', () => {
        app.quit();
    });
}

// 初始化
app.on('ready', initMainProcess);

// 退出程序
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})