const config = require('./config');
const aes = require('./secretModule/aesModule');
const login = require('./loginModule/login');
const log = require('./logsModule/logs');

const tag = document.getElementById('AESTest');
var data = 'dataTest';
var enc = aes.encrypt(config.config.secKey, config.config.secIV, data);
tag.innerHTML = "data:" + data + "<br> enc:" + enc + "<br> dec:" + aes.decrypt(config.config.secKey, config.config.secIV, enc);
setTimeout(function() {
    login.loginWindow();
}, 5000)