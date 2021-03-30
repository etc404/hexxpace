## Welcome To sspace.py! This Script Will Translate To And From A Whitespace-ified Version Of Binary! ##

print("Welcome! Enter text, and the translator will detect whether you're encoding or decoding based on the presence of characters other than whitespace")
In = input("~> ")
# Detect whether ws or txt
Clean = True
for char in In:
    if not (char in [' ', ' ']):
        Clean = False

# Clean means its in ws, Not Clean means its to be encoded
if Clean:
    print("Decoding...")
    Bin = In.replace(' ', '0').replace(' ', '1')
    print(Bin)
    ToTxt = ''.join(chr(int(Bin[i*8:i*8+8],2)) for i in range(len(Bin)//8))
    print(ToTxt)
else:
    print("Encoding...")
    ToBin = ''.join(format(ord(i), '08b') for i in In)
    print(ToBin)
    Result = ToBin.replace('0', ' ').replace('1', ' ')
    print("Result invisible, but shown between these borders. Remember not to grab the pipes!")
    print("-------------------------------------------------")
    print("|"+Result+"|")
    print("-------------------------------------------------")

## /etc/anashiiiiii ##
