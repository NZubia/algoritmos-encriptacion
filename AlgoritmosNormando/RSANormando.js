/**
 * Demostración de uso de algoritmo RSA
 */

const RSA = require('node-rsa');
const cipher = new RSA({b: 512});
const textToEncrypt = "Este es mi texto a encriptar";


/**
 * Función que encripta un texto por medio del algoritmo RSA
 * @param text - Texto a encriptar
 * @param cipher - Objecto que contiene las llaves pública y privada
 * @returns {String} Texto encriptado
 */
function encodeRSA (text, cipher) {
    return cipher.encrypt(text, 'base64');
}

/**
 * Función que desencripta un texto por medio del algoritmo RSA
 * @param text - Texto a desencriptar
 * @param cipher - Objecto que contiene las llaves pública y privada
 * @returns {String} Texto desencriptado
 */
function decodeRSA (text, cipher) {
    return cipher.decrypt(text, 'utf8');
}

cipher.generateKeyPair();
const encryptText = encodeRSA(textToEncrypt, cipher);
const decryptText = decodeRSA(encryptText, cipher);

console.log("######--------Comienzo de algoritmo RSA--------######");

console.log(`Llave Pública -> ${cipher.exportKey('public')}`);
console.log(`Llave Privada -> ${cipher.exportKey('private')}`);

console.log(`Texto encriptado -> ${encryptText}`);
console.log(`Texto desencriptado -> ${decryptText}`);