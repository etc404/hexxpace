// A CLI version of the sspace tool //

const f = require('./hexxpace');

const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
});

readline.question("Welcome, Good User! Enter text, and the translator will detect whether you're encoding or decoding based on the presense of characters other than whitespace.\n~>", resp => {
        f.Main(resp)
        readline.close();
});

// :} //
