function crypt (message, password, uncrypt=false) {
    extended_password = ((message.length - (message.length % password.length))/password.length) * password;
    extended_password += password[:password.length-(message.length % password.length)];
    
    for (i = 0; i < message.length; i++) {
        message[i] =  alphanumeric_chars[alphanumeric_chars.indexOf(message[i]) + alphanumeric_chars.indexOf(extended_password[i])];
    };
    return message;
};
