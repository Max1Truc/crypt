function crypt (message, password, uncrypt=false) {
    
    window.message = message;
    window.password = password
    alphanumeric_chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789àâéêèëîïôöçù',!?.;:=+-()/@%$*? ";
    
    var extended_password = ((message.length - (message.length % password.length))/password.length) * password;
    window.password = window.password.split("");
    for (i = 0; i < password.length-(message.length % password.length); i++) {
        var tmp = window.password.pop();
    };
    var password = window.password.join("");
    var extended_password = extended_password + password;
    for (i = 0; i < message.length; i++) {
        if (!uncrypt) {
            window.message[i] =  alphanumeric_chars[alphanumeric_chars.indexOf(message[i]) + alphanumeric_chars.indexOf(extended_password[i])];
        } else {
            window.message[i] =  alphanumeric_chars[alphanumeric_chars.indexOf(message[i]) - alphanumeric_chars.indexOf(extended_password[i])];
        };
    };
    return window.message;
};
