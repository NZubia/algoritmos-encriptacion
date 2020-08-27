/**
 * Demostración de uso de algoritmo AES 128
 */

const crypto = require('crypto');
const secretKey = "A8PwIrURoEll";
const textToEncrypt = "Este es mi texto a encriptar";

/**
 * Función que encripta un texto por medio del algoritmo AES
 * @param text - Texto a encriptar
 * @param key - Llave que será usada para encriptar
 * @returns {String} Texto encriptado
 */
function encodeAES (text, key) {
    const cipherKey = crypto.createCipher('aes-128-cbc', key);
    let encryptedString = cipherKey.update(text, 'utf8', 'hex');
    encryptedString += cipherKey.final('hex');
    return encryptedString;
}

/**
 * Función que desencripta un texto por medio del algoritmo AES
 * @param text - Texto a desencriptar
 * @param key - Llave que será usada para desencriptar
 * @returns {String} Texto desencriptado
 */
function decodeAES (text, key) {
    const decipherKey = crypto.createDecipher('aes-128-cbc', key);
    let encryptedString = decipherKey.update(text, 'hex', 'utf8');
    encryptedString += decipherKey.final('utf8');
    return encryptedString;
}

const encryptText = encodeAES(textToEncrypt, secretKey);
const decryptText = decodeAES(encryptText, secretKey);

console.log("######--------Comienzo de algoritmo AES--------######");

console.log(`Texto a encriptar -> ${textToEncrypt}`);
console.log(`Texto encriptado -> ${encryptText}`);
console.log(`Texto desencriptado -> ${decryptText}`);