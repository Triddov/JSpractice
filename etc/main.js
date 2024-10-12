let weight = Number(prompt());
let status = prompt();
let price = null;
let answer = null;
if(weight<=5){
    if (status === "обычная"){
        price = 500;
    }else if (status === "экспресс"){
        price = 1000;
    }else{
        answer = "Некорректный статус доставки";
    }
}else{
    if (status === "обычная"){
        price = 800;
    }else if (status === "экспресс"){
        price = 1500;
    }else{
        answer = "Некорректный статус доставки";
    }
}

if (answer !== "Некорректный статус доставки"){
    console.log(`Стоимость доставки: ${price} рублей`)
}else if (answer === "Некорректный статус доставки"){
    console.log(answer)
}
