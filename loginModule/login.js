const { BrowserWindow } = require('electron').remote;

const path = require('path');

exports.loginWindow = () => {
    const modalPath = path.join('file://', __dirname, '/loginWindow.html')
    let win = new BrowserWindow({ width: 400, height: 320, show: false })
    win.setMenu(null)
    win.setAlwaysOnTop(true)
    win.setFullScreen(true)
    win.webContents.openDevTools()

    win.on('close', () => { win = null })
    win.loadURL(modalPath)
    win.once('ready-to-show', () => {
        win.show()
    })
}