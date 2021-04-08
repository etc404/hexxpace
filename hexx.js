// Welcome To sspace.js! This Script Will Translate To And From A Whitespace-ified Version Of Binary! //

ws = ["​", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "　"]
hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]

function StrToHex(input) {
        var output = ""
        for (var i = 0; i < input.length; i++) {
                output += input[i].charCodeAt(0).toString(16);
        };
        return output;
}

function HexToStr(input) {
        var output = '';
        for (var i = 0; i < input.length; i += 2) {
            var v = parseInt(input.substr(i, 2), 16);
            if (v) output += String.fromCharCode(v);
        };
        return output;
}

function WsToHex(input) {
        var output = "";
        for (var i = 0; i < input.length; i++) {
                console.log(input[i]);
                output += hex[ws.indexOf(input[i])];
        };
        return output;
}

function HexToWs(input) {
        var output = "";
        for (var i = 0; i < input.length; i++) {
                output += ws[hex.indexOf(input[i])];
        };
        return output;
}

function Encode(input) {
        console.log("Encoding...");
        console.log(input+" --> "+StrToHex(input));
        return "_"+HexToWs(StrToHex(input))+"_";
}

function Decode(input) {
        console.log("Decoding...");
        output = HexToStr(WsToHex(input));
        output = output.replace(/\r?\n|\r/g, "");
        console.log(WsToHex(input)+" --> "+output);
        return output;
}

function IsClean(input) {
        clean = true;
        for (let i = 0; i < input.length; i++) {
                if (!(ws.includes(input[i]) || input[i] == "_")) {
                        clean = false;
                        console.log("Unclean character: "+input[i]);
                };
        };
        return clean
}

function LineStrip(input) {
        return input.replace(/_/g, '');
}

function Main(input) {
        input = LineStrip(input);
        if (IsClean(input)) {
                // Decode
                console.log(Decode(input));
                return Decode(input);
        } else {
                // Encode
                console.log(Encode(input));
                return Encode(input);
        }
}

function Input() {
        event.preventDefault();
        document.getElementById("output").value = Main(document.getElementById("input").value);
}

module.exports = { Main };
//_                                       _//
