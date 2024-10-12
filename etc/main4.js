function averige({ListOfNums} = {}){
    let listSum = 0;
    for(let i=0;i<ListOfNums.length;i++){
        listSum += ListOfNums[i];
    }
    return listSum/ListOfNums.length;
}

let numList = [];
let num = null;
for(let i=0;i<3;i++){
    num = Number(prompt());
    numList.push(num);
}

console.log(averige({ListOfNums: numList})*2);


