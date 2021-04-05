let userInput =prompt("Please input your paraphrase");
console.log(userInput);

let words = userInput.split(" ");
console.log(words);
let result = "";

for (let i= 0; i <= words.length -1; i++){
    let word=words[i];
    let letters= word.split("");
    console.log(letters);

    for (let k = words.length-1; k >=0; k--) {
        let newWord =  words[k];
        
        
    }

    let newWord = letters.join("");
    console.log(newWord);
    result=result + newWord + " ";
}

console.log(result);

alert("Your new paraphrase:" +result);

