function crypt (message, password, uncrypt=false) {
    
    const alphanumeric_chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789àâéêèëîïôöçù',!?.;:=+-()/@%$*? ";
    
    let message = message;
    let password = password;
    let extended_password = ((message.length - (message.length % password.length))/password.length) * password;
    password = password.split("");
    for (let i = 0; i < password.length-(message.length % password.length); i++) {
        var tmp = password.pop();
    };
    password = password.join("");
    extended_password = extended_password + password;
    for (let i = 0; i < message.length; i++) {
        if (!uncrypt) {
            message[i] =  alphanumeric_chars[alphanumeric_chars.indexOf(message[i]) + alphanumeric_chars.indexOf(extended_password[i])];
        } else {
            message[i] =  alphanumeric_chars[alphanumeric_chars.indexOf(message[i]) - alphanumeric_chars.indexOf(extended_password[i])];
        };
    };
    return message;
};
