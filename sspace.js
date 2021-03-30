// Welcome To sspace.js! This Script Will Translate To And From A Whitespace-ified Version Of Binary! //

function StrToBin(input) {
        var output = ""
        for (var i = 0; i < input.length; i++) {
                output += input[i].charCodeAt(0).toString(2) + " ";
        };
        output = output.slice(0, -1);
        return output;
}

function BinToStr(input) {
        console.log("Input is: "+input)
        var output = input.split(' ').map(bin => String.fromCharCode(parseInt(bin, 2))).join('');
        return output;
}

function WsToTxt(input) {
        var output = input.replace(/ /g, "0").replace(/ /g, "1");
        return output;
}

function TxtToWs(input) {
        var output = input.replace(/0/g, " ").replace(/1/g, " ");
        return output;
}

function Encode(input) {
        console.log("Encoding...");
        console.log(input+" --> "+StrToBin(input));
        return "_"+TxtToWs(StrToBin(input))+"_";
}

function Decode(input) {
        console.log("Decoding...");
        output = BinToStr(WsToTxt(input));
        output = output.replace(/\r?\n|\r/g, "");
        console.log(WsToTxt(input)+" --> "+output);
        return output;
}

function IsClean(input) {
        clean = true;
        for (let i = 0; i < input.length; i++) {
                if (!([' ', ' ', ' '].includes(input[i]))) {
                        clean = false;
                        console.log("Unclean character: "+input[i]);
                }
        }
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
        document.getElementById("output").value = Main(document.getElementById("input").value)
}

module.exports = { Main }
//_                                       _//
