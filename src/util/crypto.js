export async function enryptPassword(password) {
    var CryptoJS = require("crypto-js");
    var encryptedPassword = CryptoJS.SHA256(password);
    return encryptedPassword.toString();
}