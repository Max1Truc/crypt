// Script created by Max1Truc
// Source available on GitHub at https://GitHub.com/Max1Truc/crypt
// It's under the MIT License

function crypt (message, password, decrypt=false) {
    // to make the password string longer
    var extended_password = ((message.length - (message.length % password.length))/password.length) + 1;
    extended_password = password.repeat(extended_password);
    
    // initialize the crypted message var
    var crypted = "";
	
    // crypt each letter
    for (var i = 0; i < message.length; i++) {
		var index_text_letter = message[i].charCodeAt(0),
		    index_pass_letter = extended_password[i].charCodeAt(0),
		    crypted_letter = String.fromCharCode(!decrypt?index_text_letter+index_pass_letter:index_text_letter-index_pass_letter);
		crypted = crypted.concat(crypted_letter);
    };
    // return
    return crypted;
};

function decrypt (crypted_message, password) {
    return crypt(crypted_message, password, decrypt=1);
};
