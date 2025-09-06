const poem = `Amm Pata jora jora
marbo chabuk jora jora
ore babu sore dara
asche amr pagla ghora
`
console.log(poem)



function sum(num1, num2 = 0){
    const total = num1+num2;
    const output =`sum of ${num1} and ${num2} is equal to ${total}`
    console.log(output)
}
sum(10,9);