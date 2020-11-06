const morseCode = {
    'a': '.-',
    'b': '-...',
    'c': '-.-.',
    'd': '-..',
    'e': '.',
    'f': '..-.',
    'g': '--.',
    'h': '....',
    'i': '..',
    'j': '.---',
    'k': '-.-',
    'l': '.-..',
    'm': '--',
    'n': '-.',
    'o': '---',
    'p': '.--.',
    'q': '--.-',
    'r': '.-.',
    's': '...',
    't': '-',
    'u': '..-',
    'v': '...-',
    'w': '.--',
    'x': '-..-',
    'y': '-.--',
    'z': '--..',
    '1': '.----',
    '2': '..---',
    '3': '...--',
    '4': '....-',
    '5': '.....',
    '6': '-....',
    '7': '--...',
    '8': '---..',
    '9': '----.',
    '0': '-----',
}


const resetBtn = document.getElementById("resetBtn");
const sumbitBtn = document.getElementById("submitBtn");





const  getInput = () => {
const Input = document.getElementById("inputField").value;

const text = Input.split("");

const morseCode = text.map(getArrayInput);
document.getElementById("outputField").value = morseCode.join("")
};


const getArrayInput = Input => {
    return morseCode[Input];
}

resetBtn.addEventListener("click", function(){
    document.getElementById("inputField").value = "";
    document.getElementById("outputField").value = "";
});
