function fact({number = 1} = {}){
    let factResult = 1;
    for(let i=1;i<=number;i++){
        factResult*=i;
    }
    return factResult;
}

let userNum = Number(prompt());
console.log(fact({number: userNum}));

function WhatLess({num1=0, num2=0} = {}){
    if (num1 === num2){ return `${num1} равно ${num2}`}
    return (num1 > num2) ? `${num1} больше, чем ${num2}`: `${num2} больше, чем ${num1}`;
}

const userNum1 = Number(prompt());
const userNum2 = Number(prompt());

console.log(WhatLess({num1: userNum1, num2: userNum2}));
