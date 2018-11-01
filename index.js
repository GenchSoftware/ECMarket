const config = require('./config');
const aes = require('./secretModule/aesModule');
const login = require('./loginModule/login');
const log = require('./logsModule/logs');
const init = require('./initModule/init')

log.Log(log.Level.INFO, 'index.js', 'index页面加载完成。');
log.Log(log.Level.INFO, 'index.js', '开始尝试加载配置文件');
init.init();

// const tag = document.getElementById('AESTest');
// var data = 'dataTest';
// var enc = aes.encrypt(config.config.secKey, config.config.secIV, data);
// tag.innerHTML = "data:" + data + "<br> enc:" + enc + "<br> dec:" + aes.decrypt(config.config.secKey, config.config.secIV, enc);
// log.Log(log.Level.INFO, 'index.js', 'index文件加载完成。')
// setTimeout(function() {
//     login.loginWindow();
// }, 5000)