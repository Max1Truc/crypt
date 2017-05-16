// Script created by Max1Truc
// Source available on GitHub at https://GitHub.com/Max1Truc/crypt
// It's under the MIT License

function crypt (message, password) {
    // initialize the crypted message var
    var crypted = "";
    // crypt each letter
    for (var i = 0; i < message.length; i++) {
	var index_text_letter = message[i].charCodeAt(0),
	    index_pass_letter = password[i%password.length].charCodeAt(0);
	var crypted_letter = String.fromCharCode(index_text_letter+index_pass_letter);
	crypted = crypted.concat(crypted_letter);
    };
    // return
    return crypted;
};

function decrypt (crypted_message, password) {
    // initialize the decrypted message var
    var decrypted = "";
    // decrypt each letter
    for (var i = 0; i < crypted_message.length; i++) {
	var index_text_letter = crypted_message[i].charCodeAt(0),
	    index_pass_letter = password[i%password.length].charCodeAt(0);
	var decrypted_letter = String.fromCharCode(index_text_letter-index_pass_letter);
	decrypted = decrypted.concat(decrypted_letter);
    };
    // return
    return decrypted;
};
