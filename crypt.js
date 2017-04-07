function crypt (message, password, uncrypt=false) {
    var extended_password = ((message.length - (message.length % password.length))/password.length) * password;
    var extended_password += password[:password.length-(message.length % password.length)];
    
    for (i = 0; i < message.length; i++) {
        if (!uncrypt} {
            message[i] =  alphanumeric_chars[alphanumeric_chars.indexOf(message[i]) + alphanumeric_chars.indexOf(extended_password[i])];
        } else {
            message[i] =  alphanumeric_chars[alphanumeric_chars.indexOf(message[i]) - alphanumeric_chars.indexOf(extended_password[i])];
        };
    };
    return message;
};
