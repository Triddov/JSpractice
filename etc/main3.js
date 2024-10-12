function compareAndPrintMax({ListOfNumbers} = {}){
    ListOfNumbers.sort();
    let maxElememnt = Math.max(...ListOfNumbers);
    return maxElememnt;
}

let numList = [];
let num = null;

for(let i=0;i<4;i++){
    let num = Number(prompt());
    numList.push(num);
}


console.log(compareAndPrintMax({ListOfNumbers: numList}));
