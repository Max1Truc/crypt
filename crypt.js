// Script created by Max1Truc
// Source available on GitHub at https://GitHub.com/Max1Truc/crypt
// It's under the MIT License

function crypt (message, password, decrypt=false) {
    // initialize the crypted message var
    var crypted = "";
    if (decrypt) {
        var symbol = "-";
    } else {
        var symbol = "+";
    }
    // crypt each letter
    for (var i = 0; i < message.length; i++) {
	var index_text_letter = message[i].charCodeAt(0),
	    index_pass_letter = password[i%password.length].charCodeAt(0);
	var crypted_letter = String.fromCharCode(eval("index_text_letter"+symbol+"index_pass_letter"));
	crypted = crypted.concat(crypted_letter);
    };
    // return
    return crypted;
};

function decrypt (crypted_message, password) {
    return crypt(crypted_message, password, decrypt=true);
};
