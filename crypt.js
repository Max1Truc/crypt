function crypt (message, password, uncrypt=false) {
    var extended_password = ((message.length - (message.length % password.length))/password.length) * password;
    for (i = 0; i < password.length-(message.length % password.length); i++) {
        tmp = password.split();
    };
    var extended_password = extended_password + password;
    for (i = 0; i < message.length; i++) {
        if (!uncrypt} {
            message[i] =  alphanumeric_chars[alphanumeric_chars.indexOf(message[i]) + alphanumeric_chars.indexOf(extended_password[i])];
        } else {
            message[i] =  alphanumeric_chars[alphanumeric_chars.indexOf(message[i]) - alphanumeric_chars.indexOf(extended_password[i])];
        };
    };
    return message;
};
