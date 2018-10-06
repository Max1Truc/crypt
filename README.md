# Explaination

These are two JavaScript functions to crypt and decrypt messages with a password.

# Demo

A live Demo is available [here](https://max1truc.github.io/crypt/demo.html).

# How to use

### HTML

Include ```<script src="crypt.min.js"></script>``` in your HTML code.

In a JavaScript script type ```crypt([message], [password])``` and it will return the crypted message.

To decrypt a message, use ```decrypt([message], [password])```.

### NodeJS

First, npm install it : ```npm install crypt-js```

Include ```var crypt = require("crypt-js")``` in your HTML code.

In a JavaScript script type ```crypt.crypt([message], [password])``` and it will return the crypted message.

To decrypt a message, use ```crypt.decrypt([message], [password])```.
