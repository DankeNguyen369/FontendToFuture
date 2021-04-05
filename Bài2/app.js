let userInput =prompt("Please input your paraphrase").toLowerCase();
console.log(userInput);

let words = userInput.split(" ");
console.log(words);
let result = "";

for (let i= 0; i <= words.length -1; i++){
    let word=words[i];
    let letters= word.split("");
    console.log(letters);

    letters[0]= letters[0].toUpperCase();

    let newWord = letters.join("");
    console.log(newWord);
    result=result + newWord + " ";
}

console.log(result);

alert("Your new paraphrase:" +result);

