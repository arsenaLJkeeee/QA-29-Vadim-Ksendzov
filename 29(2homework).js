//console.log("1 -- "+ true || true)
//console.log(true || false)
//console.log(false || true)



//console.log(true && true);
//console.log(true && false)

let item_1 = 0;
let item_2 = 20;
//let item_2 = 20;
let item_3 = (item_2 >= 20)? console.log("Idi Kushat") : console.log("Hodi golodnyi")


//if (item_1 > 3 || item_2 < 15 || item_3 !== 50) 

{console.log ("Idi Kushat")}
else 
{console.log ("Hodi golodnyi")}




while(item_1 < 20 && item_2 < 30) 


{
    console.log(item_1, " = Idi Kushat")
    console.log(item_2, " = -------")
    item_1++
    item_2++

    
}

for (let i = 0; i < 10; i++){


// console.log(i , "= FOR")

// }

let names = ['Kate',
            'Alex',
            'Ivan',
            'Ignat',
            'Andey',
            'Vika' ]

for (let item_1 of names) {

if (item_1 == 'Ignat') {break}

    console.log(item_1)

}



// 1. Написать скрипт, который сосчитает и выведет результат от возведения 2 в степень 10

let i = 1;
let result = 1
while (i < 11) {
    result = result *2
i++
}
console.log(result)

// *2. Преобразовать 1 задачу в функцию, принимающую на вход степень,
// в которую будет возводиться число 2

const power = function(num) 
{
let result = 1;
for(let i = 1; i <= num; i++)
{
    result = result *2
}
return result
}

// console.log(power(10))

// Написать скрипт, который выведет 5 строк в коносль таким образом,
//  чтобы в первой строчке выводилось :), во второй :):)
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)

let word = ':)'
let result2 = ''

for (let i=1; i<=4;i++)
{
result2+=word
console.log(result2)
}


