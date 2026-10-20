const score = 72;

if(score >= 80) {
    console.log("A");
} else if (score >= 60) {
    console.log("B");
} else {
    console.log("C");
}

const result = score >= 50? "pass" : "fail";  //ternary

switch (score > 50) {
    case true: console.log("ok"); break;
    default: console.log("no");
}