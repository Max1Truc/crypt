function crypt (message, password, uncrypt=false) {
    extended_password = ((message.length - (message.length % password.length))/password.length) * password;
    extended_password += password[:password.length-(message.length % password.length)];
};
