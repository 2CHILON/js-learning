function countWords(sentence) {
    // Trim extra spaces from the ends and  split by one or more spaces
    return sentence.trim().split(/\s+/).filter(word => word !== "")
}

//Example
console.log(countWords("Hello world this is a test"));
console.log(countWords("  Js  is  awesome "));
console.log(countWords(""));