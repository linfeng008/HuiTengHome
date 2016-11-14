var crypto = require('crypto');
var key ='359706826';  //加盐
var algorithm ='aes-128-ecb';
var clearEncoding ='utf-8';
var iv='';
var cipherEncoding ='hex'; //hex or base64

exports.encryption = function (data,cb) {
    //加密
    var cipher = crypto.createCipher(algorithm, key, iv);
    var cipherChunks = [];
    cipherChunks.push(cipher.update(data, clearEncoding, cipherEncoding));
    cipherChunks.push(cipher.final(cipherEncoding));
    return cb(cipherChunks.join(''));
};

exports.decryption = function (data,cb) {
    //解密
    var decipher = crypto.createDecipher(algorithm, key, iv);
    var plainChunks = [];
    for (var i = 0; i < data.length; i++) {
        plainChunks.push(decipher.update(data[i], cipherEncoding, clearEncoding));
    }
    plainChunks.push(decipher.final(clearEncoding));
    var val = plainChunks.join('');

    return cb(val);

}