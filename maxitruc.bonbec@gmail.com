// Script created by Max1Truc
// Source available on GitHub at https://GitHub.com/Max1Truc/crypt
// It's under the MIT License

// All is in the var name
var alphanumeric_chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789\"',!.;:=+-()/\\@%$*? ".repeat(2);

function crypt (message, password) {
    // to make the password string longer
    var extended_password = ((message.length - (message.length % password.length))/password.length) + 1;
    extended_password = password.repeat(extended_password);
    
    // initialize the crypted message var
    var crypted = "";
	
    // crypt each letter
    for (var i = 0; i < message.length; i++) {
		index_in_alphanumeric_chars = alphanumeric_chars.indexOf(message[i]) + alphanumeric_chars.indexOf(extended_password[i]);
		crypted = crypted.concat(alphanumeric_chars[index_in_alphanumeric_chars]);
    };
    // return
    return crypted;
};

function decrypt (crypted_message, password) {
	
    var extended_password = ((crypted_message.length - (crypted_message.length % password.length))/password.length) + 1;
    extended_password = password.repeat(extended_password);
    var decrypted = "";
	
    for (var i = 0; i < crypted_message.length; i++) {
	index_in_alphanumeric_chars = (alphanumeric_chars.indexOf(crypted_message[i]) - alphanumeric_chars.indexOf(extended_password[i])) + (alphanumeric_chars.length / 2);
	decrypted = decrypted.concat(alphanumeric_chars[index_in_alphanumeric_chars]);
    };
    return decrypted;
};
